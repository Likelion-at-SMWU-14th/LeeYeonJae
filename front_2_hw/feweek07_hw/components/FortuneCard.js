// Server Component
export default function FortuneCard({ score, tier }) {
  const level = score >= 70 ? "high" : score < 30 ? "low" : "";

  return (
    <div className="fortune">
      <div className="emoji">{tier.emoji}</div>

      <p className="score">
        <strong>{score}</strong>
        <span>점</span>
      </p>

      <div className="bar">
        <div className={`fill ${level}`} style={{ width: `${score}%` }} />
      </div>

      <p className="message">{tier.message}</p>
    </div>
  );
}
