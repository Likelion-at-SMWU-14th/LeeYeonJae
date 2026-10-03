import axios from "axios";
import type {
  VpicResponse,
  VpicVehicleType,
  VpicModel,
  CarModel,
} from "../types/car";

// vPic Axios 인스턴스
const vpicClient = axios.create({
  baseURL: "https://vpic.nhtsa.dot.gov/api/vehicles",
  params: { format: "json" },
});

async function getResults<T>(url: string): Promise<T[]> {
  const { data } = await vpicClient.get<VpicResponse<T>>(url);
  return data.Results;
}

// 브랜드 + 연식 → 모델 리스트 조회
export async function fetchModels(
  makeId: number,
  year: number,
): Promise<CarModel[]> {
  const types = await getResults<VpicVehicleType>(
    `/GetVehicleTypesForMakeId/${makeId}`,
  );

  const lists = await Promise.all(
    types.map((t) =>
      getResults<VpicModel>(
        `/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}/vehicletype/${encodeURIComponent(t.VehicleTypeName)}`,
      ),
    ),
  );

  const byId = new Map<number, CarModel>();

  for (const m of lists.flat()) {
    const existing = byId.get(m.Model_ID);

    // 중복 모델인 경우 차종 정보만 추가
    if (existing) {
      if (!existing.vehicleTypes.includes(m.VehicleTypeName)) {
        existing.vehicleTypes.push(m.VehicleTypeName);
      }
    } else {
      byId.set(m.Model_ID, {
        Make_Name: m.Make_Name,
        Model_ID: m.Model_ID,
        Model_Name: m.Model_Name,
        vehicleTypes: [m.VehicleTypeName],
      });
    }
  }

  return [...byId.values()].sort((a, b) =>
    a.Model_Name.localeCompare(b.Model_Name),
  );
}
