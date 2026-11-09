export const fortunes = [
  { min: 100, emoji: "🌟", message: "오늘은 뭘 해도 잘 풀려요!" },
  { min: 90, emoji: "🍀", message: "작은 행운이 찾아와요." },
  { min: 80, emoji: "😌", message: "무난하지만 편안한 하루예요." },
  { min: 70, emoji: "🍃", message: "서두르지 말고 천천히 가요." },
  { min: 60, emoji: "🧘🏻‍♀️", message: "오늘은 쉬어가는 게 좋겠어요." },
  { min: 50, emoji: "🧸", message: "오늘도 충분히 잘하고 있어요!" },
  { min: 40, emoji: "🌧️", message: "작은 실수는 가볍게 넘겨요." },
  { min: 30, emoji: "🫧", message: "잠시 멈추고 마음을 정리해 봐요." },
  { min: 20, emoji: "🌙", message: "오늘은 나를 먼저 챙겨주세요." },
  { min: 10, emoji: "🪴", message: "작은 것부터 다시 시작해 봐요." },
  { min: 0, emoji: "☁️", message: "조금은 답답해도 괜찮아요." },
];

export function getTier(score) {
  return fortunes.find((t) => score >= t.min);
}

export function isValidScore(score) {
  return Number.isInteger(score) && score >= 0 && score <= 100;
}

export function drawScore() {
  return Math.floor(Math.random() * 101);
}
