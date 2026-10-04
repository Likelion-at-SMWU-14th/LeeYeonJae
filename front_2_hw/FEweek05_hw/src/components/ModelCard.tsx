import { useEffect, useState } from "react";
import { fetchWikiInfo } from "../apis/wikipedia";
import * as S from "../styles/styled";
import type { Brand, CarModel, ModelDetails, WikiInfo } from "../types/car";

const ROWS: [keyof ModelDetails, string][] = [
  ["manufacturer", "Manufacturer"],
  ["modelName", "Model"],
  ["modelYear", "Model year"],
  ["vehicleType", "Vehicle type"],
];

interface Props {
  brand: Brand;
  model: CarModel;
  year: number;
}

export default function ModelCard({ brand, model, year }: Props) {
  const [flipped, setFlipped] = useState(false);
  const [wikiInfo, setWikiInfo] = useState<WikiInfo | null>(null);
  const [wikiLoading, setWikiLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    fetchWikiInfo(brand.label, model.Model_Name).then((info) => {
      if (cancelled) return;
      setWikiInfo(info);
      setWikiLoading(false);
    });

    return () => {
      cancelled = true;
    };
  }, [brand.label, model.Model_Name]);

  const image = wikiInfo?.thumbnail;

  const details: ModelDetails = {
    manufacturer: model.Make_Name,
    modelName: model.Model_Name,
    modelYear: String(year),
    vehicleType: model.vehicleTypes.join(", "),
  };

  return (
    <S.CardContainer onClick={() => setFlipped((f) => !f)}>
      <S.CardContent $flipped={flipped}>
        <S.Front>
          <S.Image>
            {image ? (
              <img
                src={image.source}
                alt={`${brand.label} ${model.Model_Name}`}
              />
            ) : wikiLoading ? (
              "Loading..."
            ) : (
              "No image available"
            )}
          </S.Image>
          <S.Caption>
            <S.Label>{brand.label}</S.Label>
            <S.Value>{model.Model_Name}</S.Value>
          </S.Caption>
        </S.Front>

        <S.Back>
          <S.Rows>
            {ROWS.map(([key, label]) => (
              <div key={key}>
                <dt>{label}</dt>
                <dd>{details[key]}</dd>
              </div>
            ))}
          </S.Rows>
          <S.Desc>
            {wikiLoading ? "Loading..." : wikiInfo?.extract || "unavailable"}
          </S.Desc>
        </S.Back>
      </S.CardContent>
    </S.CardContainer>
  );
}
