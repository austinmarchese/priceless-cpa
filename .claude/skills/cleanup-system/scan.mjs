#!/usr/bin/env node
// Cross-platform PII scanner for Priceless CPA cleanup-system skill.
// Works on macOS, Windows, Linux. Requires Node 18+. No external dependencies.
//
// Usage:
//   node scan.mjs                     # filename-only scan (default)
//   node scan.mjs --deep              # also scan file CONTENT for SSN/EIN patterns
//   node scan.mjs --json              # emit JSON only (no human-readable header)
//   node scan.mjs --max-age 30        # only files modified in last 30 days
//   node scan.mjs --dir <path>        # add an extra directory to scan
//
// Output: JSON array of { tier, source, path, size, mtime, reasons[] }

import fs from "node:fs";
import path from "node:path";
import os from "node:os";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const argValue = (name) => {
  const i = args.indexOf(name);
  return i >= 0 && i + 1 < args.length ? args[i + 1] : null;
};

const DEEP = flag("--deep");
const JSON_ONLY = flag("--json");
const MAX_AGE_DAYS = parseInt(argValue("--max-age") || "0", 10) || null;
const EXTRA_DIRS = args.reduce((acc, a, i) => {
  if (a === "--dir" && args[i + 1]) acc.push(args[i + 1]);
  return acc;
}, []);

const patterns = JSON.parse(
  fs.readFileSync(path.join(__dirname, "patterns.json"), "utf8")
);

const platform =
  process.platform === "darwin"
    ? "macos"
    : process.platform === "win32"
      ? "windows"
      : "linux";

function expandPath(p) {
  if (!p) return p;
  let out = p;
  if (out.startsWith("~")) {
    out = path.join(os.homedir(), out.slice(1));
  }
  out = out.replace(/%([^%]+)%/g, (_, name) => process.env[name] || "");
  return path.normalize(out);
}

const scanDirs = (patterns.scanDirs[platform] || []).map(expandPath);
EXTRA_DIRS.forEach((d) => scanDirs.push(path.resolve(d)));

const claudeCodeDir = expandPath(patterns.claudePaths.code);
const claudeDesktopDir = expandPath(
  platform === "macos"
    ? patterns.claudePaths.desktopMacos
    : platform === "windows"
      ? patterns.claudePaths.desktopWindows
      : patterns.claudePaths.desktopLinux
);

const ignoreSet = new Set(patterns.ignoreDirs);
const maxAgeMs =
  (MAX_AGE_DAYS || patterns.maxAgeDays) * 24 * 60 * 60 * 1000;
const maxSizeBytes = patterns.maxFileSizeMB * 1024 * 1024;
const now = Date.now();

const filenameRegex = {
  high: patterns.filenamePatterns.high.map((p) => new RegExp(p, "i")),
  medium: patterns.filenamePatterns.medium.map((p) => new RegExp(p, "i")),
  low: patterns.filenamePatterns.low.map((p) => new RegExp(p, "i")),
};
const clientNameRegex = patterns.clientNames.map(
  (n) => new RegExp(`\\b${n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i")
);
const contentRegex = Object.fromEntries(
  Object.entries(patterns.contentPatterns).map(([k, v]) => [k, new RegExp(v)])
);

function classifyFilename(name) {
  const reasons = [];
  let tier = null;
  for (const r of filenameRegex.high) {
    if (r.test(name)) {
      reasons.push(`filename matched high pattern: ${r.source}`);
      tier = "HIGH";
    }
  }
  for (const r of clientNameRegex) {
    if (r.test(name)) {
      reasons.push(`filename contains client name: ${r.source}`);
      tier = tier === "HIGH" ? "HIGH" : "HIGH";
    }
  }
  if (!tier) {
    for (const r of filenameRegex.medium) {
      if (r.test(name)) {
        reasons.push(`filename matched medium pattern: ${r.source}`);
        tier = "MEDIUM";
      }
    }
  }
  if (!tier) {
    for (const r of filenameRegex.low) {
      if (r.test(name)) {
        reasons.push(`filename matched low pattern (extension): ${r.source}`);
        tier = "LOW";
      }
    }
  }
  return { tier, reasons };
}

const TEXT_EXTENSIONS = new Set([
  ".txt",
  ".csv",
  ".md",
  ".json",
  ".jsonl",
  ".log",
  ".html",
  ".xml",
  ".yml",
  ".yaml",
]);

function scanContent(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!TEXT_EXTENSIONS.has(ext)) return [];
  try {
    const stat = fs.statSync(filePath);
    if (stat.size > maxSizeBytes) return [];
    const chunk = fs.readFileSync(filePath, { encoding: "utf8" }).slice(0, 5_000_000);
    const hits = [];
    for (const [name, re] of Object.entries(contentRegex)) {
      if (re.test(chunk)) hits.push(`content has ${name}`);
    }
    return hits;
  } catch {
    return [];
  }
}

function* walk(dir, depth = 0) {
  if (depth > 6) return;
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    if (entry.name.startsWith(".") && entry.name !== ".claude") continue;
    if (ignoreSet.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full, depth + 1);
    } else if (entry.isFile()) {
      yield full;
    }
  }
}

function scanDir(dir, source) {
  const findings = [];
  if (!fs.existsSync(dir)) return findings;
  for (const file of walk(dir)) {
    let stat;
    try {
      stat = fs.statSync(file);
    } catch {
      continue;
    }
    if (maxAgeMs && now - stat.mtimeMs > maxAgeMs) continue;
    const name = path.basename(file);
    const { tier: filenameTier, reasons } = classifyFilename(name);
    let tier = filenameTier;
    let contentHits = [];
    if (DEEP) {
      contentHits = scanContent(file);
      if (contentHits.length > 0) {
        tier = "HIGH";
        reasons.push(...contentHits);
      }
    }
    if (!tier) continue;
    findings.push({
      tier,
      source,
      path: file,
      size: stat.size,
      mtime: stat.mtime.toISOString(),
      reasons,
    });
  }
  return findings;
}

function scanClaudeCodeTranscripts() {
  const findings = [];
  if (!fs.existsSync(claudeCodeDir)) return findings;
  for (const file of walk(claudeCodeDir)) {
    if (!file.endsWith(".jsonl")) continue;
    let stat;
    try {
      stat = fs.statSync(file);
    } catch {
      continue;
    }
    if (maxAgeMs && now - stat.mtimeMs > maxAgeMs) continue;
    if (stat.size > maxSizeBytes) continue;

    const reasons = [];
    let tier = null;
    let referencedPaths = new Set();
    try {
      const content = fs.readFileSync(file, "utf8");
      // Cheap pass: search for PII content patterns in the transcript itself.
      for (const [name, re] of Object.entries(contentRegex)) {
        if (re.test(content)) {
          reasons.push(`transcript contains ${name}`);
          tier = "HIGH";
        }
      }
      // Find file paths referenced via tool_use blocks.
      const pathRegex = /"(?:file_path|path|absolute_path)"\s*:\s*"([^"]+)"/g;
      let match;
      while ((match = pathRegex.exec(content)) !== null) {
        referencedPaths.add(match[1]);
      }
      // Flag transcripts that reference high-risk filenames.
      for (const p of referencedPaths) {
        const base = path.basename(p);
        const r = classifyFilename(base);
        if (r.tier === "HIGH") {
          reasons.push(`transcript references high-risk file: ${base}`);
          tier = "HIGH";
        } else if (r.tier === "MEDIUM" && tier !== "HIGH") {
          reasons.push(`transcript references medium-risk file: ${base}`);
          tier = "MEDIUM";
        }
      }
    } catch {
      continue;
    }

    if (!tier) continue;
    findings.push({
      tier,
      source: "claude-code-transcript",
      path: file,
      size: stat.size,
      mtime: stat.mtime.toISOString(),
      reasons,
      referencedPaths: [...referencedPaths].slice(0, 20),
    });
  }
  return findings;
}

function scanClaudeDesktop() {
  const findings = [];
  if (!fs.existsSync(claudeDesktopDir)) return findings;
  let totalSize = 0;
  let fileCount = 0;
  let latestMtime = 0;
  try {
    for (const file of walk(claudeDesktopDir)) {
      try {
        const stat = fs.statSync(file);
        totalSize += stat.size;
        fileCount++;
        if (stat.mtimeMs > latestMtime) latestMtime = stat.mtimeMs;
      } catch {
        /* skip */
      }
    }
  } catch {
    /* skip */
  }
  if (fileCount === 0) return findings;
  findings.push({
    tier: "MEDIUM",
    source: "claude-desktop-cache",
    path: claudeDesktopDir,
    size: totalSize,
    mtime: new Date(latestMtime).toISOString(),
    reasons: [
      `claude desktop app cache: ${fileCount} files, ${(totalSize / 1024 / 1024).toFixed(1)} MB`,
      "uploaded attachments may persist here; clear via app settings",
    ],
  });
  return findings;
}

const allFindings = [];
for (const dir of scanDirs) {
  allFindings.push(...scanDir(dir, "local-files"));
}
allFindings.push(...scanClaudeCodeTranscripts());
allFindings.push(...scanClaudeDesktop());

const tierOrder = { HIGH: 0, MEDIUM: 1, LOW: 2 };
allFindings.sort((a, b) => {
  const t = tierOrder[a.tier] - tierOrder[b.tier];
  if (t !== 0) return t;
  return new Date(b.mtime) - new Date(a.mtime);
});

if (JSON_ONLY) {
  process.stdout.write(JSON.stringify(allFindings, null, 2));
} else {
  process.stdout.write(
    JSON.stringify(
      {
        platform,
        scannedDirs: scanDirs,
        claudeCodeDir,
        claudeDesktopDir,
        deepScan: DEEP,
        maxAgeDays: MAX_AGE_DAYS || patterns.maxAgeDays,
        totalFindings: allFindings.length,
        byTier: {
          HIGH: allFindings.filter((f) => f.tier === "HIGH").length,
          MEDIUM: allFindings.filter((f) => f.tier === "MEDIUM").length,
          LOW: allFindings.filter((f) => f.tier === "LOW").length,
        },
        findings: allFindings,
      },
      null,
      2
    )
  );
}
