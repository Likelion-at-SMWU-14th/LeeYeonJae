import { NextResponse } from "next/server";
import { fortunes } from "@/lib/fortunes";

// GET /api/fortunes
export async function GET() {
  return NextResponse.json({ fortunes });
}
