import { NextRequest, NextResponse } from "next/server";
import { getFunnelData, saveFunnelData } from "@/lib/funnel-data";
import type {
  FunnelData,
  FunnelVideo,
  FunnelSnapshot,
  GHLContact,
  GHLAppointment,
  TrafficSource,
} from "@/lib/funnel-types";

const PASSWORD = "theincubator";

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY || "";
const YOUTUBE_CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || "";
const GHL_API_KEY = process.env.GHL_API_KEY || "";
const GHL_LOCATION_ID = "w9nlFqFeNgvMxlmA50dr";

const SHORTS_MAX_SECONDS = 90;

function parseDuration(iso: string): number {
  const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!m) return 0;
  return (
    parseInt(m[1] || "0") * 3600 +
    parseInt(m[2] || "0") * 60 +
    parseInt(m[3] || "0")
  );
}

// --- YouTube ---

async function ytFetch(endpoint: string, params: Record<string, string>) {
  const url = new URL(`https://www.googleapis.com/youtube/v3/${endpoint}`);
  url.searchParams.set("key", YOUTUBE_API_KEY);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`YouTube API ${res.status}: ${await res.text()}`);
  return res.json();
}

async function collectYouTube() {
  if (!YOUTUBE_API_KEY || !YOUTUBE_CHANNEL_ID) {
    return { subscribers: 0, totalViews: 0, longForm: [] as FunnelVideo[], shorts: [] as FunnelVideo[] };
  }

  const chData = await ytFetch("channels", {
    part: "statistics,contentDetails",
    id: YOUTUBE_CHANNEL_ID,
  });
  const ch = chData.items?.[0];
  if (!ch) throw new Error("Channel not found");

  const subscribers = parseInt(ch.statistics.subscriberCount || "0");
  const totalViews = parseInt(ch.statistics.viewCount || "0");
  const uploadsPlaylistId = ch.contentDetails.relatedPlaylists.uploads;

  const plData = await ytFetch("playlistItems", {
    part: "contentDetails,snippet",
    playlistId: uploadsPlaylistId,
    maxResults: "50",
  });

  const videoIds = (plData.items || []).map((i: any) => i.contentDetails.videoId).join(",");
  if (!videoIds) return { subscribers, totalViews, longForm: [], shorts: [] };

  const vData = await ytFetch("videos", {
    part: "statistics,snippet,contentDetails",
    id: videoIds,
  });

  const longForm: FunnelVideo[] = [];
  const shorts: FunnelVideo[] = [];

  for (const v of vData.items || []) {
    const duration = parseDuration(v.contentDetails.duration || "");
    const video: FunnelVideo = {
      videoId: v.id,
      title: v.snippet.title,
      views: parseInt(v.statistics.viewCount || "0"),
      likes: parseInt(v.statistics.likeCount || "0"),
      comments: parseInt(v.statistics.commentCount || "0"),
      publishedAt: v.snippet.publishedAt,
      duration,
      type: duration <= SHORTS_MAX_SECONDS ? "short" : "long",
    };
    if (duration <= SHORTS_MAX_SECONDS) shorts.push(video);
    else longForm.push(video);
  }

  return { subscribers, totalViews, longForm, shorts };
}

// --- GHL ---

const GHL_HEADERS = {
  Authorization: `Bearer ${GHL_API_KEY}`,
  Version: "2021-07-28",
  "Content-Type": "application/json",
  Accept: "application/json",
};

// Tags/sources that indicate paid ads
const PAID_INDICATORS = ["roas", "paid", "ad", "facebook", "meta", "google ads", "ppc", "cpc"];
// Tags/sources that indicate organic
const ORGANIC_INDICATORS = ["organic", "youtube", "instagram", "referral", "website", "seo", "social"];

function classifyChannel(tags: string[], source: string): "organic" | "paid" | "unknown" {
  const lowerSource = source.toLowerCase();
  // Check paid first
  if (PAID_INDICATORS.some((p) => lowerSource.includes(p))) return "paid";
  for (const tag of tags) {
    const lowerTag = tag.toLowerCase();
    if (PAID_INDICATORS.some((p) => lowerTag.includes(p))) return "paid";
  }
  // Check organic
  if (ORGANIC_INDICATORS.some((p) => lowerSource.includes(p))) return "organic";
  for (const tag of tags) {
    const lowerTag = tag.toLowerCase();
    if (ORGANIC_INDICATORS.some((p) => lowerTag.includes(p))) return "organic";
  }
  // Can't determine
  return "unknown";
}

async function collectGHL() {
  if (!GHL_API_KEY) {
    return {
      totalContacts: 0,
      recentContacts: [] as GHLContact[],
      appointments: [] as GHLAppointment[],
      contactsBySource: [] as TrafficSource[],
    };
  }

  // 1. Search contacts
  let allContacts: GHLContact[] = [];
  try {
    const res = await fetch("https://services.leadconnectorhq.com/contacts/search", {
      method: "POST",
      headers: GHL_HEADERS,
      body: JSON.stringify({
        locationId: GHL_LOCATION_ID,
        pageLimit: 100,
      }),
    });
    if (res.ok) {
      const data = await res.json();
      allContacts = (data.contacts || []).map((c: any) => {
        const tags = c.tags || [];
        const source = c.source || c.attributionSource?.medium || "unknown";
        return {
          id: c.id,
          name: `${c.firstName || ""} ${c.lastName || ""}`.trim() || c.name || "",
          email: c.email || "",
          phone: c.phone || "",
          source,
          tags,
          dateAdded: c.dateAdded || c.createdAt || "",
          channel: classifyChannel(tags, source),
        };
      });
    }
  } catch (e) {
    console.error("GHL contacts error:", e);
  }

  // 2. Get calendar appointments
  let appointments: GHLAppointment[] = [];
  try {
    // First get calendars to find the calendar ID
    const calRes = await fetch(
      `https://services.leadconnectorhq.com/calendars/?locationId=${GHL_LOCATION_ID}`,
      { headers: GHL_HEADERS }
    );
    if (calRes.ok) {
      const calData = await calRes.json();
      const calendars = calData.calendars || [];

      // Get events from each calendar
      const now = Date.now();
      const ninetyDaysAgo = now - 90 * 86_400_000;

      for (const cal of calendars) {
        try {
          const params = new URLSearchParams({
            locationId: GHL_LOCATION_ID,
            calendarId: cal.id,
            startTime: ninetyDaysAgo.toString(),
            endTime: now.toString(),
          });
          const evRes = await fetch(
            `https://services.leadconnectorhq.com/calendars/events?${params}`,
            { headers: GHL_HEADERS }
          );
          if (evRes.ok) {
            const evData = await evRes.json();
            for (const ev of evData.events || []) {
              // Match appointment to contact to determine channel
              const matchedContact = allContacts.find((c) => c.id === ev.contactId);
              appointments.push({
                id: ev.id,
                title: ev.title || cal.name || "Call",
                contactId: ev.contactId || "",
                contactName: ev.contact?.name || "",
                status: ev.appointmentStatus || ev.status || "new",
                startTime: ev.startTime || "",
                channel: matchedContact?.channel || "unknown",
              });
            }
          }
        } catch (e) {
          console.error(`GHL calendar ${cal.id} events error:`, e);
        }
      }
    }
  } catch (e) {
    console.error("GHL calendars error:", e);
  }

  // 3. Build source breakdown
  const sourceCounts: Record<string, number> = {};
  for (const c of allContacts) {
    const src = c.source || "unknown";
    sourceCounts[src] = (sourceCounts[src] || 0) + 1;
  }
  const total = allContacts.length;
  const contactsBySource: TrafficSource[] = Object.entries(sourceCounts)
    .map(([source, count]) => ({
      source,
      count,
      percentage: total > 0 ? Math.round((count / total) * 1000) / 10 : 0,
    }))
    .sort((a, b) => b.count - a.count);

  return {
    totalContacts: allContacts.length,
    recentContacts: allContacts.slice(0, 100),
    appointments,
    contactsBySource,
  };
}

// --- Main handler ---

export async function POST(req: NextRequest) {
  const auth = req.headers.get("x-funnel-auth");
  if (auth !== PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const existing = await getFunnelData();
    const [yt, ghl] = await Promise.all([collectYouTube(), collectGHL()]);

    const longFormViews = yt.longForm.reduce((s, v) => s + v.views, 0);
    const shortsViews = yt.shorts.reduce((s, v) => s + v.views, 0);

    const snapshot: FunnelSnapshot = {
      date: new Date().toISOString().split("T")[0],
      subscribers: yt.subscribers,
      longFormViews,
      shortsViews,
      totalContacts: ghl.totalContacts,
      callsBooked: ghl.appointments.length,
    };

    const history = existing.history.filter((h) => h.date !== snapshot.date);
    history.push(snapshot);
    if (history.length > 90) history.splice(0, history.length - 90);

    const funnel: FunnelData = {
      lastUpdated: new Date().toISOString(),
      adSpend: existing.adSpend || 0, // Preserve manual ad spend input
      youtube: {
        subscribers: yt.subscribers,
        totalViews: yt.totalViews,
        longForm: yt.longForm,
        shorts: yt.shorts,
      },
      ghl,
      history,
    };

    await saveFunnelData(funnel);
    return NextResponse.json({ ok: true, lastUpdated: funnel.lastUpdated });
  } catch (err: any) {
    console.error("Collect error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
