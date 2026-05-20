#!/usr/bin/env node
// Confirmed-delete helper for cleanup-system skill.
// Will NOT delete anything unless every target path is passed both:
//   1. via --target <path> (or in --targets-file <jsonl>)
//   2. AND echoed back via --confirm <path>  (matching exact string)
// This forces Claude to surface each path to the user before deletion.
//
// Writes one audit log entry per file to ~/.priceless-cleanup/audit.jsonl.
// Refuses to delete anything inside the priceless-cpa repo working tree.
//
// Usage examples:
//
//   # delete ONE file (must appear in both --target and --confirm)
//   node delete.mjs \
//     --target "/Users/x/Downloads/smith_1040.pdf" \
//     --confirm "/Users/x/Downloads/smith_1040.pdf" \
//     --reason "HIGH tier: matched 1040" \
//     --user "austin@theincubator.xyz"
//
//   # delete a BATCH from a JSON file (each entry must list path + confirmed:true)
//   node delete.mjs --targets-file /tmp/cleanup-approved.json \
//     --user "austin@theincubator.xyz"
//
//   # dry-run (lists what WOULD be deleted; no filesystem changes)
//   node delete.mjs --target "..." --confirm "..." --dry-run

import fs from "node:fs";
import path from "node:path";
import os from "node:os";

const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const flagValue = (name) => {
  const i = args.indexOf(name);
  return i >= 0 && i + 1 < args.length ? args[i + 1] : null;
};
const allValues = (name) => {
  const out = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i] === name && i + 1 < args.length) out.push(args[i + 1]);
  }
  return out;
};

const targets = allValues("--target");
const confirms = allValues("--confirm");
const targetsFile = flagValue("--targets-file");
const reason = flagValue("--reason") || "no reason given";
const user = flagValue("--user") || process.env.USER || "unknown";
const dryRun = flag("--dry-run");

const REPO_ROOT = path.resolve(path.join(import.meta.dirname || ".", "../../.."));
const AUDIT_DIR = path.join(os.homedir(), ".priceless-cleanup");
const AUDIT_LOG = path.join(AUDIT_DIR, "audit.jsonl");

function refuse(msg) {
  console.error(`REFUSED: ${msg}`);
  process.exit(2);
}

function isInsideRepo(p) {
  const abs = path.resolve(p);
  return abs === REPO_ROOT || abs.startsWith(REPO_ROOT + path.sep);
}

// Gather final delete list.
let pending = [];

if (targetsFile) {
  let parsed;
  try {
    parsed = JSON.parse(fs.readFileSync(targetsFile, "utf8"));
  } catch (e) {
    refuse(`could not parse --targets-file ${targetsFile}: ${e.message}`);
  }
  if (!Array.isArray(parsed)) refuse("--targets-file must be a JSON array");
  for (const entry of parsed) {
    if (!entry || typeof entry !== "object") {
      refuse("--targets-file entries must be objects { path, confirmed: true, reason? }");
    }
    if (entry.confirmed !== true) {
      refuse(`entry for ${entry.path} missing "confirmed": true`);
    }
    if (!entry.path || typeof entry.path !== "string") {
      refuse("entry missing string path");
    }
    pending.push({ path: entry.path, reason: entry.reason || reason });
  }
} else {
  if (targets.length === 0) refuse("no --target provided");
  if (targets.length !== confirms.length) {
    refuse(
      `mismatched --target (${targets.length}) and --confirm (${confirms.length}) counts; every target needs a matching confirm`
    );
  }
  for (let i = 0; i < targets.length; i++) {
    if (targets[i] !== confirms[i]) {
      refuse(
        `--target ${targets[i]} does not match --confirm ${confirms[i]} (paths must be byte-identical)`
      );
    }
    pending.push({ path: targets[i], reason });
  }
}

// Safety checks per path BEFORE any deletion.
for (const item of pending) {
  const abs = path.resolve(item.path);
  if (!fs.existsSync(abs)) refuse(`does not exist: ${abs}`);
  if (isInsideRepo(abs)) {
    refuse(
      `path is inside the priceless-cpa repo (${REPO_ROOT}). This script will not delete repo contents: ${abs}`
    );
  }
  // Refuse obvious system directories.
  const forbidden = [
    os.homedir(),
    "/",
    "/Users",
    "/System",
    "/Library",
    "/Applications",
    "/etc",
    "/var",
    "/usr",
    "/private",
    path.join(os.homedir(), "Library"),
    path.join(os.homedir(), "Documents"),
    path.join(os.homedir(), "Downloads"),
    path.join(os.homedir(), "Desktop"),
  ];
  if (forbidden.includes(abs)) {
    refuse(`refusing to delete top-level directory: ${abs}`);
  }
  const stat = fs.statSync(abs);
  if (stat.isDirectory()) {
    // Allow only Claude desktop cache subpaths or transcript files. Block other directories.
    refuse(
      `refusing to delete directory: ${abs}. This helper only deletes individual files.`
    );
  }
}

// Ensure audit dir exists.
fs.mkdirSync(AUDIT_DIR, { recursive: true });

const results = [];

for (const item of pending) {
  const abs = path.resolve(item.path);
  const stat = fs.statSync(abs);
  const entry = {
    ts: new Date().toISOString(),
    user,
    path: abs,
    size: stat.size,
    reason: item.reason,
    dryRun,
    action: dryRun ? "dry-run" : "deleted",
  };
  if (!dryRun) {
    try {
      fs.unlinkSync(abs);
    } catch (e) {
      entry.action = "failed";
      entry.error = e.message;
    }
  }
  fs.appendFileSync(AUDIT_LOG, JSON.stringify(entry) + "\n");
  results.push(entry);
}

console.log(
  JSON.stringify(
    {
      auditLog: AUDIT_LOG,
      dryRun,
      processed: results.length,
      results,
    },
    null,
    2
  )
);
