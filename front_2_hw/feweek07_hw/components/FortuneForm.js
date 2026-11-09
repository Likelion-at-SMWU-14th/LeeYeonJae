"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import NameInput from "./NameInput";

export default function FortuneForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const canDraw = name.trim() !== "" && !loading;

  async function draw() {
    if (!canDraw) return;
    setLoading(true);
    try {
      const res = await fetch("/api/draw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      if (!res.ok) throw new Error("draw failed");
      const data = await res.json();
      router.push(
        `/result/${data.score}?name=${encodeURIComponent(data.name)}`,
      );
    } catch {
      setLoading(false);
      alert("다시 시도해주세요.");
    }
  }

  return (
    <>
      <NameInput value={name} onChange={setName} onSubmit={draw} />
      <button className="btn" disabled={!canDraw} onClick={draw}>
        운세 뽑기
      </button>
    </>
  );
}
