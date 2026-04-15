import { NextRequest, NextResponse } from "next/server";
import { getFunnelData } from "@/lib/funnel-data";

const PASSWORD = "theincubator";

export async function GET(req: NextRequest) {
  const auth = req.headers.get("x-funnel-auth");
  if (auth !== PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await getFunnelData();
    return NextResponse.json(data);
  } catch (err: any) {
    console.error("Funnel read error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
