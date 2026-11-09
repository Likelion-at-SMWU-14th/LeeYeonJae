import { notFound } from "next/navigation";
import FortuneCard from "@/components/FortuneCard";
import ResultActions from "@/components/ResultActions";
import { getTier, isValidScore } from "@/lib/fortunes";

async function parse({ params, searchParams }) {
  const { score } = await params;
  const { name } = await searchParams;
  const value = Number(score);

  if (!isValidScore(value)) notFound();
  return { score: value, name: (name ?? "").trim() };
}

export default async function ResultPage(props) {
  const { score, name } = await parse(props);
  if (!name) notFound();

  // 서버 응답을 의도적으로 지연시켜 loading.js 동작 확인
  await new Promise((r) => setTimeout(r, 1000));

  return (
    <>
      <h1>{name}님의 운세</h1>
      <FortuneCard score={score} tier={getTier(score)} />
      <ResultActions name={name} />
    </>
  );
}
