import type { Brand } from "../types/car";

export const BRANDS: Brand[] = [
  { label: "Hyundai", makeId: 498 },
  { label: "Kia", makeId: 499 },
  { label: "Tesla", makeId: 441 },
  { label: "Mercedes-Benz", makeId: 449 },
  { label: "BMW", makeId: 452 },
  { label: "Ford", makeId: 460 },
  { label: "Audi", makeId: 582 },
  { label: "Toyota", makeId: 448 },
];

export const YEARS = [2026, 2025, 2024, 2023, 2022, 2021] as const;
