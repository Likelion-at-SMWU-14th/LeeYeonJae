import { NextResponse } from "next/server";
import { getTier, isValidScore } from "@/lib/fortunes";

// GET /api/fortunes/:score
export async function GET(_request, { params }) {
  const { score } = await params;
  const value = Number(score);

  if (!isValidScore(value)) {
    return NextResponse.json(
      { error: "점수는 0~100 사이의 정수만 허용됩니다." },
      { status: 400 },
    );
  }

  return NextResponse.json({ score: value, tier: getTier(value) });
}
