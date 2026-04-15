"use client";

import { useEffect, useState } from "react";
import type {
  FunnelData,
  FunnelVideo,
  GHLContact,
  GHLAppointment,
  TrafficSource,
} from "@/lib/funnel-types";

// --- Helpers ---

function fmt(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1) + "K";
  return n.toLocaleString();
}

function money(n: number): string {
  return "$" + n.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

function daysAgo(d: string): string {
  const days = Math.floor((Date.now() - new Date(d).getTime()) / 86_400_000);
  if (days === 0) return "Today";
  if (days === 1) return "Yesterday";
  return `${days}d ago`;
}

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function formatDate(d: string): string {
  return new Date(d).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

// --- Password gate ---

function PasswordGate({ onAuth }: { onAuth: () => void }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);

  const submit = () => {
    if (pw === "theincubator") {
      sessionStorage.setItem("funnel-auth", pw);
      onAuth();
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#09090b] flex items-center justify-center font-sans">
      <div className="w-full max-w-xs">
        <div className="text-center mb-10">
          <div className="text-sm font-medium tracking-widest text-zinc-500 uppercase mb-2">
            Priceless CPA
          </div>
          <h1 className="text-lg font-medium text-zinc-200">Dashboard Access</h1>
        </div>
        <div className="space-y-3">
          <input
            type="password"
            placeholder="Enter password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            className={`w-full px-4 py-2.5 bg-zinc-900 border rounded-md text-sm text-zinc-100 placeholder-zinc-600 outline-none transition-all ${
              error ? "border-red-500/50" : "border-zinc-800 focus:border-zinc-600"
            }`}
            autoFocus
          />
          <button
            onClick={submit}
            className="w-full py-2.5 bg-zinc-100 text-zinc-900 text-sm font-medium rounded-md hover:bg-white transition-colors"
          >
            Continue
          </button>
          {error && <p className="text-xs text-red-400 text-center">Wrong password</p>}
        </div>
      </div>
    </div>
  );
}

// --- Reusable components ---

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[11px] font-medium tracking-widest text-zinc-500 uppercase">
      {children}
    </div>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-lg bg-zinc-900/50 border border-zinc-800/50 ${className}`}>
      {children}
    </div>
  );
}

function Metric({
  label,
  value,
  sub,
  accent,
  large,
}: {
  label: string;
  value: string | number;
  sub?: string;
  accent?: string;
  large?: boolean;
}) {
  return (
    <div>
      <Label>{label}</Label>
      <div
        className={`${large ? "text-3xl" : "text-2xl"} font-semibold tabular-nums mt-1 ${
          accent || "text-zinc-100"
        }`}
      >
        {typeof value === "number" ? fmt(value) : value}
      </div>
      {sub && <div className="text-xs text-zinc-600 mt-0.5">{sub}</div>}
    </div>
  );
}

function Bar({ value, max, color }: { value: number; max: number; color: string }) {
  const pct = max > 0 ? Math.min((value / max) * 100, 100) : 0;
  return (
    <div className="h-1 rounded-full bg-zinc-800">
      <div className={`h-1 rounded-full ${color} transition-all`} style={{ width: `${pct}%` }} />
    </div>
  );
}

// --- Channel detail drawer ---

function ChannelDetailDrawer({
  title,
  color,
  contacts,
  appointments,
  onClose,
}: {
  title: string;
  color: string;
  contacts: GHLContact[];
  appointments: GHLAppointment[];
  onClose: () => void;
}) {
  const [selectedContact, setSelectedContact] = useState<GHLContact | null>(null);

  // Break down contacts by source
  const sourceCounts: Record<string, GHLContact[]> = {};
  for (const c of contacts) {
    const src = c.source || "unknown";
    if (!sourceCounts[src]) sourceCounts[src] = [];
    sourceCounts[src].push(c);
  }
  const sortedSources = Object.entries(sourceCounts).sort((a, b) => b[1].length - a[1].length);
  const [activeSource, setActiveSource] = useState<string | null>(null);

  const displayContacts = activeSource
    ? sourceCounts[activeSource] || []
    : contacts;

  return (
    <>
      {selectedContact && (
        <ContactDetail contact={selectedContact} onClose={() => setSelectedContact(null)} />
      )}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 flex justify-end" onClick={onClose}>
        <div
          className="bg-[#0c0c0e] border-l border-zinc-800 w-full max-w-2xl h-full overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-[#0c0c0e] border-b border-zinc-800 px-6 py-4 flex items-center justify-between z-10">
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${color}`} />
              <h2 className="text-base font-semibold text-zinc-100">{title} Channel</h2>
              <span className="text-xs text-zinc-600">{contacts.length} contacts</span>
            </div>
            <button onClick={onClose} className="text-zinc-500 hover:text-zinc-300 transition-colors p-1">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="px-6 py-5 space-y-6">
            {/* Summary stats */}
            <div className="grid grid-cols-3 gap-3">
              <Card className="p-3">
                <Metric label="Leads" value={contacts.length} />
              </Card>
              <Card className="p-3">
                <Metric label="Calls" value={appointments.length} accent="text-emerald-400" />
              </Card>
              <Card className="p-3">
                <Metric
                  label="Book Rate"
                  value={contacts.length > 0 ? `${((appointments.length / contacts.length) * 100).toFixed(1)}%` : "0%"}
                />
              </Card>
            </div>

            {/* Source breakdown */}
            <div>
              <Label>Sources</Label>
              <div className="mt-3 space-y-1">
                <button
                  onClick={() => setActiveSource(null)}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors ${
                    activeSource === null ? "bg-zinc-800 text-zinc-200" : "text-zinc-500 hover:bg-zinc-900 hover:text-zinc-400"
                  }`}
                >
                  <span>All Sources</span>
                  <span className="text-xs tabular-nums">{contacts.length}</span>
                </button>
                {sortedSources.map(([src, list]) => (
                  <button
                    key={src}
                    onClick={() => setActiveSource(src)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors ${
                      activeSource === src ? "bg-zinc-800 text-zinc-200" : "text-zinc-500 hover:bg-zinc-900 hover:text-zinc-400"
                    }`}
                  >
                    <span>{src}</span>
                    <span className="text-xs tabular-nums">{list.length}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Contacts list */}
            <div>
              <Label>{activeSource ? `${activeSource} Contacts` : "All Contacts"}</Label>
              <div className="mt-3 space-y-1">
                {displayContacts.length === 0 ? (
                  <div className="text-sm text-zinc-600 py-4 text-center">No contacts</div>
                ) : (
                  displayContacts.map((c) => (
                    <button
                      key={c.id}
                      onClick={() => setSelectedContact(c)}
                      className="w-full flex items-center justify-between px-3 py-2.5 rounded-md hover:bg-zinc-900 transition-colors text-left group"
                    >
                      <div className="min-w-0">
                        <div className="text-sm text-zinc-300 truncate">{c.name || "Unknown"}</div>
                        <div className="text-xs text-zinc-600 font-mono truncate">{c.email}</div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0 ml-3">
                        <span className="bg-zinc-800 text-zinc-500 px-1.5 py-0.5 rounded text-[10px]">
                          {c.source}
                        </span>
                        {c.tags.length > 0 && (
                          <span className="text-[10px] text-zinc-700">{c.tags.length} tags</span>
                        )}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-zinc-700 group-hover:text-zinc-500 transition-colors">
                          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// --- Channel funnel card (Organic or Paid) ---

function ChannelFunnel({
  title,
  topLabel,
  topValue,
  topSub,
  contacts,
  calls,
  adSpend,
  color,
  onSpendChange,
  onClick,
}: {
  title: string;
  topLabel: string;
  topValue: number;
  topSub: string;
  contacts: number;
  calls: number;
  adSpend?: number;
  color: string;
  onSpendChange?: (v: number) => void;
  onClick?: () => void;
}) {
  const [editingSpend, setEditingSpend] = useState(false);
  const [spendInput, setSpendInput] = useState(String(adSpend || 0));

  const saveSpend = () => {
    const val = parseFloat(spendInput) || 0;
    onSpendChange?.(val);
    setEditingSpend(false);
  };

  const costPerLead = adSpend && contacts > 0 ? adSpend / contacts : null;
  const costPerCall = adSpend && calls > 0 ? adSpend / calls : null;

  return (
    <Card className={`p-5 flex-1 ${onClick ? "cursor-pointer hover:border-zinc-700 transition-colors" : ""}`}>
      <div className="flex items-center justify-between mb-4" onClick={onClick}>
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${color}`} />
          <span className="text-sm font-medium text-zinc-300">{title}</span>
        </div>
        {onClick && (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-zinc-600">
            <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </div>

      <div className="space-y-4" onClick={onClick}>
        <div>
          <Label>{topLabel}</Label>
          <div className="text-2xl font-semibold text-zinc-100 tabular-nums mt-1">
            {fmt(topValue)}
          </div>
          <div className="text-xs text-zinc-600">{topSub}</div>
        </div>

        <div className="flex items-center gap-2 text-zinc-700">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M12 4v16m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          {topValue > 0 && contacts > 0 && (
            <span className="text-[11px] text-zinc-600">
              {((contacts / topValue) * 100).toFixed(2)}% conversion
            </span>
          )}
        </div>

        <div>
          <Label>Leads</Label>
          <div className="text-2xl font-semibold text-amber-400 tabular-nums mt-1">{contacts}</div>
        </div>

        <div className="flex items-center gap-2 text-zinc-700">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path d="M12 4v16m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          {contacts > 0 && calls > 0 && (
            <span className="text-[11px] text-zinc-600">
              {((calls / contacts) * 100).toFixed(1)}% book rate
            </span>
          )}
        </div>

        <div>
          <Label>Calls Booked</Label>
          <div className="text-2xl font-semibold text-emerald-400 tabular-nums mt-1">{calls}</div>
        </div>
      </div>

      {/* Ad spend section (paid only) */}
      {onSpendChange !== undefined && (
        <div className="mt-5 pt-4 border-t border-zinc-800/50">
          <div className="flex items-center justify-between mb-2">
            <Label>Ad Spend</Label>
            {!editingSpend && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSpendInput(String(adSpend || 0));
                  setEditingSpend(true);
                }}
                className="text-[11px] text-zinc-600 hover:text-zinc-400 transition-colors"
              >
                Edit
              </button>
            )}
          </div>
          {editingSpend ? (
            <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
              <input
                type="number"
                value={spendInput}
                onChange={(e) => setSpendInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && saveSpend()}
                className="flex-1 px-2 py-1.5 bg-zinc-800 border border-zinc-700 rounded text-sm text-zinc-100 outline-none"
                autoFocus
              />
              <button
                onClick={saveSpend}
                className="px-3 py-1.5 bg-zinc-100 text-zinc-900 text-xs font-medium rounded hover:bg-white"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="text-xl font-semibold text-red-400 tabular-nums">
              {money(adSpend || 0)}
            </div>
          )}

          {adSpend && adSpend > 0 ? (
            <div className="grid grid-cols-2 gap-3 mt-3">
              <div>
                <div className="text-[11px] text-zinc-600">Cost / Lead</div>
                <div className="text-sm font-medium text-zinc-300 tabular-nums">
                  {costPerLead ? money(Math.round(costPerLead)) : "-"}
                </div>
              </div>
              <div>
                <div className="text-[11px] text-zinc-600">Cost / Call</div>
                <div className="text-sm font-medium text-zinc-300 tabular-nums">
                  {costPerCall ? money(Math.round(costPerCall)) : "-"}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </Card>
  );
}

// --- Video table ---

function VideoTable({ videos, label }: { videos: FunnelVideo[]; label: string }) {
  if (!videos.length) return null;
  const totalViews = videos.reduce((s, v) => s + v.views, 0);

  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/50">
        <div className="text-sm font-medium text-zinc-300">
          {label} <span className="text-zinc-600 ml-1">{videos.length}</span>
        </div>
        <div className="text-xs text-zinc-500 tabular-nums">{fmt(totalViews)} views</div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="text-[11px] text-zinc-600 uppercase tracking-wider">
              <th className="text-left py-2 px-4 font-medium">Title</th>
              <th className="text-right py-2 px-4 font-medium w-20">Views</th>
              <th className="text-right py-2 px-4 font-medium w-16">Likes</th>
              <th className="text-right py-2 px-4 font-medium w-14">Len</th>
              <th className="text-right py-2 px-4 font-medium w-20">Published</th>
            </tr>
          </thead>
          <tbody>
            {videos.map((v, i) => (
              <tr
                key={v.videoId}
                className={`border-t border-zinc-800/30 hover:bg-zinc-800/20 transition-colors ${
                  i % 2 ? "bg-zinc-900/20" : ""
                }`}
              >
                <td className="py-2.5 px-4 text-zinc-300 max-w-[320px] truncate">{v.title}</td>
                <td className="py-2.5 px-4 text-right text-zinc-200 font-medium tabular-nums">
                  {fmt(v.views)}
                </td>
                <td className="py-2.5 px-4 text-right text-zinc-500 tabular-nums">{fmt(v.likes)}</td>
                <td className="py-2.5 px-4 text-right text-zinc-500 tabular-nums">
                  {formatDuration(v.duration)}
                </td>
                <td className="py-2.5 px-4 text-right text-zinc-600">{daysAgo(v.publishedAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

// --- Source breakdown ---

function SourceBreakdown({ sources, label }: { sources: TrafficSource[]; label: string }) {
  if (!sources.length) return null;
  const max = sources[0]?.count || 1;

  return (
    <Card className="p-4">
      <Label>{label}</Label>
      <div className="space-y-2.5 mt-3">
        {sources.slice(0, 10).map((s) => (
          <div key={s.source}>
            <div className="flex justify-between text-[13px] mb-1">
              <span className="text-zinc-400">{s.source}</span>
              <span className="text-zinc-600 tabular-nums">
                {s.count} <span className="text-zinc-700">({s.percentage}%)</span>
              </span>
            </div>
            <Bar value={s.count} max={max} color="bg-amber-500/50" />
          </div>
        ))}
      </div>
    </Card>
  );
}

// --- Channel badge ---

const CHANNEL_STYLES: Record<string, string> = {
  paid: "bg-purple-500/10 text-purple-400",
  organic: "bg-emerald-500/10 text-emerald-400",
  unknown: "bg-zinc-700/30 text-zinc-400",
};

function ChannelBadge({ channel }: { channel: string }) {
  return (
    <span className={`px-1.5 py-0.5 rounded text-xs ${CHANNEL_STYLES[channel] || CHANNEL_STYLES.unknown}`}>
      {channel}
    </span>
  );
}

// --- Contact detail panel ---

function ContactDetail({ contact, onClose }: { contact: GHLContact; onClose: () => void }) {
  const fields = [
    { label: "Name", value: contact.name || "Unknown" },
    { label: "Email", value: contact.email || "-" },
    { label: "Phone", value: contact.phone || "-" },
    { label: "Source", value: contact.source || "-" },
    { label: "Channel", value: contact.channel },
    { label: "Date Added", value: contact.dateAdded ? new Date(contact.dateAdded).toLocaleString() : "-" },
    { label: "Contact ID", value: contact.id },
  ];

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-zinc-900 border border-zinc-800 rounded-xl w-full max-w-md shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800">
          <div>
            <div className="text-sm font-medium text-zinc-200">{contact.name || "Unknown"}</div>
            <div className="text-xs text-zinc-500 mt-0.5">{contact.email}</div>
          </div>
          <button onClick={onClose} className="text-zinc-500 hover:text-zinc-300 transition-colors p-1">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="px-5 py-4 space-y-3">
          {fields.map((f) => (
            <div key={f.label} className="flex justify-between items-start">
              <span className="text-[11px] font-medium tracking-wider text-zinc-500 uppercase shrink-0">
                {f.label}
              </span>
              <span className="text-sm text-zinc-300 text-right ml-4">
                {f.label === "Channel" ? <ChannelBadge channel={f.value} /> : f.value}
              </span>
            </div>
          ))}

          {/* Tags */}
          <div>
            <div className="text-[11px] font-medium tracking-wider text-zinc-500 uppercase mb-2">
              Tags ({contact.tags.length})
            </div>
            {contact.tags.length > 0 ? (
              <div className="flex gap-1.5 flex-wrap">
                {contact.tags.map((t) => (
                  <span key={t} className="bg-zinc-800 text-zinc-400 px-2 py-1 rounded text-xs">
                    {t}
                  </span>
                ))}
              </div>
            ) : (
              <div className="text-xs text-zinc-600">No tags</div>
            )}
          </div>
        </div>

        <div className="px-5 py-3 border-t border-zinc-800">
          <a
            href={`https://app.gohighlevel.com/v2/location/w9nlFqFeNgvMxlmA50dr/contacts/detail/${contact.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            Open in GHL &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

// --- Contacts table ---

function ContactsTable({
  contacts,
  filter,
}: {
  contacts: GHLContact[];
  filter: "all" | "organic" | "paid" | "unknown";
}) {
  const [selectedContact, setSelectedContact] = useState<GHLContact | null>(null);
  const filtered =
    filter === "all" ? contacts : contacts.filter((c) => c.channel === filter);

  if (!filtered.length) {
    return (
      <Card className="p-8 text-center">
        <div className="text-zinc-500 text-sm">
          {filter === "all" ? "No contacts" : `No ${filter} contacts`}
        </div>
      </Card>
    );
  }

  return (
    <>
      {selectedContact && (
        <ContactDetail contact={selectedContact} onClose={() => setSelectedContact(null)} />
      )}
      <Card className="overflow-hidden">
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/50">
          <div className="text-sm font-medium text-zinc-300">
            Contacts <span className="text-zinc-600 ml-1">{filtered.length}</span>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-[13px]">
            <thead>
              <tr className="text-[11px] text-zinc-600 uppercase tracking-wider">
                <th className="text-left py-2 px-4 font-medium">Name</th>
                <th className="text-left py-2 px-4 font-medium">Email</th>
                <th className="text-left py-2 px-4 font-medium">Source</th>
                <th className="text-left py-2 px-4 font-medium">Channel</th>
                <th className="text-left py-2 px-4 font-medium">Tags</th>
                <th className="text-right py-2 px-4 font-medium">Added</th>
              </tr>
            </thead>
            <tbody>
              {filtered.slice(0, 50).map((c, i) => (
                <tr
                  key={c.id}
                  onClick={() => setSelectedContact(c)}
                  className={`border-t border-zinc-800/30 hover:bg-zinc-800/20 transition-colors cursor-pointer ${
                    i % 2 ? "bg-zinc-900/20" : ""
                  }`}
                >
                  <td className="py-2.5 px-4 text-zinc-300">{c.name || "Unknown"}</td>
                  <td className="py-2.5 px-4 text-zinc-500 font-mono text-xs">{c.email}</td>
                  <td className="py-2.5 px-4">
                    <span className="bg-zinc-800 text-zinc-400 px-1.5 py-0.5 rounded text-xs">
                      {c.source}
                    </span>
                  </td>
                  <td className="py-2.5 px-4">
                    <ChannelBadge channel={c.channel} />
                  </td>
                  <td className="py-2.5 px-4">
                    <div className="flex gap-1 flex-wrap max-w-[200px]">
                      {c.tags.slice(0, 3).map((t) => (
                        <span key={t} className="bg-zinc-800 text-zinc-500 px-1 py-0.5 rounded text-[10px]">
                          {t}
                        </span>
                      ))}
                      {c.tags.length > 3 && (
                        <span className="text-zinc-600 text-[10px]">+{c.tags.length - 3}</span>
                      )}
                    </div>
                  </td>
                  <td className="py-2.5 px-4 text-right text-zinc-600">
                    {c.dateAdded ? daysAgo(c.dateAdded) : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </>
  );
}

// --- Appointments table ---

function AppointmentsTable({ appointments }: { appointments: GHLAppointment[] }) {
  if (!appointments.length) {
    return (
      <Card className="p-8 text-center">
        <div className="text-zinc-500 text-sm">No appointments</div>
      </Card>
    );
  }

  const statusColors: Record<string, string> = {
    confirmed: "text-emerald-400 bg-emerald-500/10",
    showed: "text-emerald-400 bg-emerald-500/10",
    completed: "text-emerald-400 bg-emerald-500/10",
    new: "text-blue-400 bg-blue-500/10",
    active: "text-blue-400 bg-blue-500/10",
    cancelled: "text-red-400 bg-red-500/10",
    noshow: "text-red-400 bg-red-500/10",
  };

  return (
    <Card className="overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800/50">
        <div className="text-sm font-medium text-zinc-300">
          Appointments <span className="text-zinc-600 ml-1">{appointments.length}</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-[13px]">
          <thead>
            <tr className="text-[11px] text-zinc-600 uppercase tracking-wider">
              <th className="text-left py-2 px-4 font-medium">Title</th>
              <th className="text-left py-2 px-4 font-medium">Contact</th>
              <th className="text-left py-2 px-4 font-medium">Status</th>
              <th className="text-left py-2 px-4 font-medium">Channel</th>
              <th className="text-right py-2 px-4 font-medium">Date</th>
            </tr>
          </thead>
          <tbody>
            {appointments
              .sort((a, b) => new Date(b.startTime).getTime() - new Date(a.startTime).getTime())
              .slice(0, 30)
              .map((a, i) => {
                const colors = statusColors[a.status] || "text-zinc-400 bg-zinc-800";
                return (
                  <tr
                    key={a.id}
                    className={`border-t border-zinc-800/30 hover:bg-zinc-800/20 transition-colors ${
                      i % 2 ? "bg-zinc-900/20" : ""
                    }`}
                  >
                    <td className="py-2.5 px-4 text-zinc-300">{a.title}</td>
                    <td className="py-2.5 px-4 text-zinc-500">{a.contactName || "-"}</td>
                    <td className="py-2.5 px-4">
                      <span className={`px-1.5 py-0.5 rounded text-xs ${colors}`}>{a.status}</span>
                    </td>
                    <td className="py-2.5 px-4">
                      <ChannelBadge channel={a.channel} />
                    </td>
                    <td className="py-2.5 px-4 text-right text-zinc-600">
                      {a.startTime ? formatDate(a.startTime) : "-"}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

// --- Main dashboard ---

type Tab = "overview" | "contacts" | "calls";

const PERIODS = [
  { label: "7d", value: "7" },
  { label: "30d", value: "30" },
  { label: "90d", value: "90" },
];

function Dashboard() {
  const [data, setData] = useState<FunnelData | null>(null);
  const [loading, setLoading] = useState(true);
  const [collecting, setCollecting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [tab, setTab] = useState<Tab>("overview");
  const [period, setPeriod] = useState("30");
  const [contactFilter, setContactFilter] = useState<"all" | "organic" | "paid" | "unknown">("all");
  const [activeDrawer, setActiveDrawer] = useState<"organic" | "paid" | "unknown" | null>(null);

  const auth =
    typeof window !== "undefined" ? sessionStorage.getItem("funnel-auth") || "" : "";

  const loadData = () => {
    setLoading(true);
    fetch("/api/funnel", { headers: { "x-funnel-auth": auth } })
      .then((r) => {
        if (!r.ok) throw new Error("Failed to load");
        return r.json();
      })
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch((e) => {
        setError(e.message);
        setLoading(false);
      });
  };

  const collectData = () => {
    setCollecting(true);
    setError(null);
    fetch(`/api/funnel/collect?period=${period}d`, {
      method: "POST",
      headers: { "x-funnel-auth": auth },
    })
      .then((r) => {
        if (!r.ok) throw new Error("Collect failed");
        return r.json();
      })
      .then(() => {
        setCollecting(false);
        loadData();
      })
      .catch((e) => {
        setError(e.message);
        setCollecting(false);
      });
  };

  const updateAdSpend = (amount: number) => {
    fetch("/api/funnel/spend", {
      method: "POST",
      headers: { "x-funnel-auth": auth, "Content-Type": "application/json" },
      body: JSON.stringify({ adSpend: amount }),
    }).then(() => loadData());
  };

  useEffect(() => {
    loadData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#09090b] flex items-center justify-center">
        <div className="text-zinc-600 text-sm">Loading...</div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-[#09090b] flex items-center justify-center">
        <div className="text-red-400 text-sm">Error: {error || "No data"}</div>
      </div>
    );
  }

  const yt = data.youtube;
  const ghl = data.ghl;
  const longFormViews = yt.longForm.reduce((s, v) => s + v.views, 0);
  const shortsViews = yt.shorts.reduce((s, v) => s + v.views, 0);
  const totalViews = longFormViews + shortsViews;

  const organicContacts = ghl.recentContacts.filter((c) => c.channel === "organic");
  const paidContacts = ghl.recentContacts.filter((c) => c.channel === "paid");
  const unknownContacts = ghl.recentContacts.filter((c) => c.channel === "unknown");

  const activeCalls = ghl.appointments.filter(
    (a) => a.status !== "cancelled" && a.status !== "invalid"
  );
  const organicCalls = activeCalls.filter((a) => a.channel === "organic");
  const paidCalls = activeCalls.filter((a) => a.channel === "paid");
  const unknownCalls = activeCalls.filter((a) => a.channel === "unknown");

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans">
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <div className="text-[11px] font-medium tracking-widest text-zinc-600 uppercase">
              Priceless CPA
            </div>
            <h1 className="text-xl font-semibold text-zinc-100 mt-1">Funnel Analysis</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex bg-zinc-900 rounded-md p-0.5 border border-zinc-800/50">
              {PERIODS.map((p) => (
                <button
                  key={p.value}
                  onClick={() => setPeriod(p.value)}
                  className={`px-3 py-1 text-xs font-medium rounded transition-colors ${
                    period === p.value
                      ? "bg-zinc-800 text-zinc-200"
                      : "text-zinc-500 hover:text-zinc-400"
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
            <button
              onClick={collectData}
              disabled={collecting}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-zinc-100 text-zinc-900 rounded-md hover:bg-white disabled:opacity-50 transition-colors"
            >
              {collecting ? (
                <>
                  <svg className="animate-spin h-3 w-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Collecting
                </>
              ) : (
                "Refresh"
              )}
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-4 px-3 py-2 bg-red-500/10 border border-red-500/20 rounded-md text-red-400 text-xs">
            {error}
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-1 mb-6 border-b border-zinc-800/50">
          {(["overview", "contacts", "calls"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 text-sm font-medium capitalize transition-colors ${
                tab === t
                  ? "text-zinc-100 border-b-2 border-zinc-100 -mb-px"
                  : "text-zinc-600 hover:text-zinc-400"
              }`}
            >
              {t === "calls" ? "Calls Booked" : t}
            </button>
          ))}
        </div>

        {tab === "overview" && (
          <div className="space-y-8">
            {/* Side-by-side Organic vs Paid funnels */}
            <div>
              <Label>Funnel Breakdown</Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
                <ChannelFunnel
                  title="Organic"
                  topLabel="YouTube + IG Views"
                  topValue={totalViews}
                  topSub={`${yt.longForm.length} long-form, ${yt.shorts.length} shorts`}
                  contacts={organicContacts.length}
                  calls={organicCalls.length}
                  color="bg-emerald-500"
                  onClick={() => setActiveDrawer("organic")}
                />
                <ChannelFunnel
                  title="Paid Ads"
                  topLabel="Ad Impressions"
                  topValue={0}
                  topSub="Connect ad platform for impressions"
                  contacts={paidContacts.length}
                  calls={paidCalls.length}
                  adSpend={data.adSpend}
                  color="bg-purple-500"
                  onSpendChange={updateAdSpend}
                  onClick={() => setActiveDrawer("paid")}
                />
                <ChannelFunnel
                  title="Unknown"
                  topLabel="Unattributed"
                  topValue={0}
                  topSub="Contacts with no clear source"
                  contacts={unknownContacts.length}
                  calls={unknownCalls.length}
                  color="bg-zinc-500"
                  onClick={() => setActiveDrawer("unknown")}
                />
              </div>
            </div>

            {/* Totals row */}
            <div>
              <Label>Totals</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3">
                <Card className="p-4">
                  <Metric label="Subscribers" value={yt.subscribers} />
                </Card>
                <Card className="p-4">
                  <Metric label="Total Contacts" value={ghl.totalContacts} />
                </Card>
                <Card className="p-4">
                  <Metric
                    label="Total Calls"
                    value={activeCalls.length}
                    accent="text-emerald-400"
                  />
                </Card>
                <Card className="p-4">
                  <Metric
                    label="Book Rate"
                    value={
                      ghl.totalContacts > 0
                        ? `${((activeCalls.length / ghl.totalContacts) * 100).toFixed(1)}%`
                        : "0%"
                    }
                  />
                </Card>
              </div>
            </div>

            {/* YouTube section */}
            <div>
              <Label>YouTube Content</Label>
              <div className="mt-3 space-y-3">
                {yt.longForm.length === 0 && yt.shorts.length === 0 ? (
                  <Card className="p-8 text-center border-dashed">
                    <div className="text-zinc-500 text-sm">No YouTube data</div>
                    <div className="text-zinc-700 text-xs mt-1">Click Refresh to pull data</div>
                  </Card>
                ) : (
                  <>
                    <VideoTable videos={yt.longForm} label="Long-Form Videos" />
                    <VideoTable videos={yt.shorts} label="Shorts" />
                  </>
                )}
              </div>
            </div>

            {/* Sources */}
            {ghl.contactsBySource.length > 0 && (
              <SourceBreakdown sources={ghl.contactsBySource} label="All Contacts by Source" />
            )}
          </div>
        )}

        {tab === "contacts" && (
          <div className="space-y-4">
            <div className="flex gap-1">
              {(["all", "organic", "paid", "unknown"] as const).map((f) => {
                const count =
                  f === "all" ? ghl.recentContacts.length
                  : f === "organic" ? organicContacts.length
                  : f === "paid" ? paidContacts.length
                  : unknownContacts.length;
                return (
                  <button
                    key={f}
                    onClick={() => setContactFilter(f)}
                    className={`px-3 py-1 text-xs font-medium rounded-md transition-colors capitalize ${
                      contactFilter === f
                        ? "bg-zinc-800 text-zinc-200"
                        : "text-zinc-600 hover:text-zinc-400"
                    }`}
                  >
                    {f} ({count})
                  </button>
                );
              })}
            </div>
            <ContactsTable contacts={ghl.recentContacts} filter={contactFilter} />
          </div>
        )}

        {tab === "calls" && <AppointmentsTable appointments={ghl.appointments} />}

        {/* Footer */}
        <div className="text-center text-xs text-zinc-700 py-8 mt-8 border-t border-zinc-800/30">
          {data.lastUpdated
            ? `Last updated ${new Date(data.lastUpdated).toLocaleString()}`
            : "Click Refresh to collect data"}
        </div>
      </div>

      {/* Channel detail drawer */}
      {activeDrawer && (
        <ChannelDetailDrawer
          title={activeDrawer === "organic" ? "Organic" : activeDrawer === "paid" ? "Paid Ads" : "Unknown"}
          color={activeDrawer === "organic" ? "bg-emerald-500" : activeDrawer === "paid" ? "bg-purple-500" : "bg-zinc-500"}
          contacts={
            activeDrawer === "organic" ? organicContacts
            : activeDrawer === "paid" ? paidContacts
            : unknownContacts
          }
          appointments={
            activeDrawer === "organic" ? organicCalls
            : activeDrawer === "paid" ? paidCalls
            : unknownCalls
          }
          onClose={() => setActiveDrawer(null)}
        />
      )}
    </div>
  );
}

// --- Page export ---

export default function FunnelPage() {
  const [authed, setAuthed] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const saved = sessionStorage.getItem("funnel-auth");
    if (saved === "theincubator") setAuthed(true);
    setChecking(false);
  }, []);

  if (checking) {
    return (
      <div className="min-h-screen bg-[#09090b] flex items-center justify-center">
        <div className="text-zinc-600 text-sm">Loading...</div>
      </div>
    );
  }

  if (!authed) return <PasswordGate onAuth={() => setAuthed(true)} />;
  return <Dashboard />;
}
