"use client";

import Link from "next/link";

export default function Error({ reset }) {
  return (
    <>
      <h1>오류 발생</h1>
      <div className="crystal">☁️</div>
      <div className="actions">
        <button className="btn" onClick={reset}>
          다시 시도
        </button>
        <Link href="/" className="btn reset">
          처음으로
        </Link>
      </div>
    </>
  );
}
