// vPIC API 응답 형식
export interface VpicResponse<T> {
  Results: T[];
}

// 브랜드별 차종
export interface VpicVehicleType {
  VehicleTypeName: string;
}

// 차종별 모델 정보
export interface VpicModel {
  Make_Name: string;
  Model_ID: number;
  Model_Name: string;
  VehicleTypeName: string;
}

// 같은 모델의 차종을 배열로 모음
export type CarModel = Omit<VpicModel, "VehicleTypeName"> & {
  vehicleTypes: string[];
};

// Wikipedia 이미지 정보
export interface WikiImage {
  source: string;
}

// Wikipedia 문서 요약 응답
export interface WikiSummary {
  type: string;
  extract?: string;
  thumbnail?: WikiImage;
}

// Wikipedia 설명 및 이미지
export type WikiInfo = Pick<WikiSummary, "extract" | "thumbnail">;

// 모델 상세 정보
export interface ModelDetails {
  manufacturer: string;
  modelName: string;
  modelYear: string;
  vehicleType: string;
}

// 브랜드 정보
export interface Brand {
  label: string;
  makeId: number;
}
