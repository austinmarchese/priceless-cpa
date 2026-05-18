import { NextRequest, NextResponse } from "next/server";
import { getFunnelData, saveFunnelData } from "@/lib/funnel-data";

const PASSWORD = "theincubator";

export async function POST(req: NextRequest) {
  const auth = req.headers.get("x-funnel-auth");
  if (auth !== PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { adSpend } = await req.json();
  if (typeof adSpend !== "number" || adSpend < 0) {
    return NextResponse.json({ error: "Invalid ad spend" }, { status: 400 });
  }

  const data = await getFunnelData();
  data.adSpend = adSpend;
  await saveFunnelData(data);

  return NextResponse.json({ ok: true });
}
