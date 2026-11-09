"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ResultActions({ name }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function redraw() {
    setLoading(true);
    try {
      const res = await fetch("/api/draw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      if (!res.ok) throw new Error("draw failed");
      const data = await res.json();
      router.replace(
        `/result/${data.score}?name=${encodeURIComponent(data.name)}`,
      );
    } catch {
      alert("운세를 뽑지 못했어요. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="actions">
      <button className="btn" onClick={redraw} disabled={loading}>
        다시 뽑기
      </button>
      <Link href="/" className="btn reset">
        처음으로
      </Link>
    </div>
  );
}
