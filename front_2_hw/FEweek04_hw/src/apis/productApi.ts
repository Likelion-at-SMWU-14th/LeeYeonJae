import type { ProductsResponse } from "../types/product";

const BASE_URL = "https://dummyjson.com";

const getProducts = async (): Promise<ProductsResponse> => {
  const response = await fetch(`${BASE_URL}/products`);

  if (!response.ok) {
    throw new Error("DummyJSON 상품 조회 실패");
  }

  return response.json();
};

export default getProducts;
