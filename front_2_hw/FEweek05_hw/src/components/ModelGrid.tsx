import { useEffect, useState } from "react";
import { fetchModels } from "../apis/vpic";
import * as S from "../styles/styled";
import ModelCard from "./ModelCard";
import type { Brand, CarModel } from "../types/car";

interface Props {
  brand: Brand;
  year: number;
}

export default function ModelGrid({ brand, year }: Props) {
  const [data, setData] = useState<CarModel[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetchModels(brand.makeId, year)
      .then((models) => {
        if (!cancelled) setData(models);
      })
      .catch((e: unknown) => {
        if (!cancelled)
          setError(e instanceof Error ? e.message : "Unknown error");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [brand.makeId, year]);

  if (loading) return <S.Message>Loading...</S.Message>;
  if (error) return <S.Message $error>{error}</S.Message>;

  return (
    <S.Grid>
      {(data ?? []).map((m) => (
        <ModelCard
          key={`${brand.makeId}-${year}-${m.Model_ID}`}
          brand={brand}
          model={m}
          year={year}
        />
      ))}
    </S.Grid>
  );
}
