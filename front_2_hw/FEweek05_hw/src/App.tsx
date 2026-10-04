import { useState } from "react";
import * as S from "./styles/styled";
import FilterButton from "./components/FilterButton";
import ModelGrid from "./components/ModelGrid";
import { YEARS } from "./constants/filterOptions";
import type { Brand } from "./types/car";

function App() {
  const [brand, setBrand] = useState<Brand>();
  const [year, setYear] = useState<number>(YEARS[0]);

  return (
    <S.Page>
      <S.Title>Car Models</S.Title>
      <S.SubTitle>powered by NHTSA vPIC API & Wikipedia API</S.SubTitle>

      <FilterButton
        brand={brand}
        year={year}
        onBrand={setBrand}
        onYear={setYear}
      />

      <S.Content>
        {brand ? (
          <ModelGrid
            key={`${brand.makeId}-${year}`}
            brand={brand}
            year={year}
          />
        ) : (
          <S.Message>Explore car models by brand and year.</S.Message>
        )}
      </S.Content>
    </S.Page>
  );
}

export default App;
