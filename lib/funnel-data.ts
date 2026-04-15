import { promises as fs } from "fs";
import path from "path";
import type { FunnelData } from "./funnel-types";

const DATA_PATH = path.join(process.cwd(), "public/funnel-data.json");

const EMPTY: FunnelData = {
  lastUpdated: null,
  adSpend: 0,
  youtube: { subscribers: 0, totalViews: 0, longForm: [], shorts: [] },
  ghl: {
    totalContacts: 0,
    recentContacts: [],
    appointments: [],
    contactsBySource: [],
  },
  history: [],
};

export async function getFunnelData(): Promise<FunnelData> {
  try {
    const raw = await fs.readFile(DATA_PATH, "utf8");
    return JSON.parse(raw) as FunnelData;
  } catch {
    return EMPTY;
  }
}

export async function saveFunnelData(data: FunnelData): Promise<void> {
  await fs.writeFile(DATA_PATH, JSON.stringify(data, null, 2), "utf8");
}
