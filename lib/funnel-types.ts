export interface FunnelVideo {
  videoId: string;
  title: string;
  views: number;
  likes: number;
  comments: number;
  publishedAt: string;
  duration: number;
  type: "long" | "short";
}

export interface GHLContact {
  id: string;
  name: string;
  email: string;
  phone: string;
  source: string;
  tags: string[];
  dateAdded: string;
  channel: "organic" | "paid" | "unknown";
}

export interface GHLAppointment {
  id: string;
  title: string;
  contactId: string;
  contactName: string;
  status: string;
  startTime: string;
  channel: "organic" | "paid" | "unknown";
}

export interface TrafficSource {
  source: string;
  count: number;
  percentage: number;
}

export interface ChannelMetrics {
  contacts: number;
  calls: number;
  bookRate: string;
}

export interface FunnelSnapshot {
  date: string;
  subscribers: number;
  longFormViews: number;
  shortsViews: number;
  totalContacts: number;
  callsBooked: number;
}

export interface FunnelData {
  lastUpdated: string | null;
  adSpend: number; // manual input, persisted
  youtube: {
    subscribers: number;
    totalViews: number;
    longForm: FunnelVideo[];
    shorts: FunnelVideo[];
  };
  ghl: {
    totalContacts: number;
    recentContacts: GHLContact[];
    appointments: GHLAppointment[];
    contactsBySource: TrafficSource[];
  };
  history: FunnelSnapshot[];
}
