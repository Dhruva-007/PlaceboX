import { type NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}))
  // simulate success
  return NextResponse.json({ ok: true, message: "Trade executed (simulated)", body })
}
