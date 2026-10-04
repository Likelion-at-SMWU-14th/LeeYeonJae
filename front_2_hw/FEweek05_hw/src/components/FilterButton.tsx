import * as S from "../styles/styled";
import { BRANDS, YEARS } from "../constants/filterOptions";
import type { Brand } from "../types/car";

interface Props {
  brand: Brand | undefined;
  year: number;
  onBrand: (b: Brand) => void;
  onYear: (y: number) => void;
}

export default function FilterButton({ brand, year, onBrand, onYear }: Props) {
  return (
    <S.FilterButtonContainer>
      <S.BrandFilter>
        {BRANDS.map((b) => (
          <S.BrandButton
            key={b.makeId}
            $active={brand?.makeId === b.makeId}
            onClick={() => onBrand(b)}
          >
            {b.label}
          </S.BrandButton>
        ))}
      </S.BrandFilter>
      <S.YearFilter
        value={year}
        onChange={(e) => onYear(Number(e.target.value))}
      >
        {YEARS.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </S.YearFilter>
    </S.FilterButtonContainer>
  );
}
