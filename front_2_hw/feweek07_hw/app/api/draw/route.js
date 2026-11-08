import { NextResponse } from "next/server";
import { drawScore, getTier } from "@/lib/fortunes";

// POST /api/draw
export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const name = typeof body.name === "string" ? body.name.trim() : "";

  if (!name) {
    return NextResponse.json(
      { error: "이름을 입력해주세요." },
      { status: 400 },
    );
  }

  const score = drawScore();
  return NextResponse.json({ name, score, tier: getTier(score) });
}
