import { create } from "zustand";
import { devtools } from "zustand/middleware";
import getProducts from "../apis/productApi";

const useProductStore = create(
  devtools((set) => ({
    products: [],
    isLoading: false,
    error: null,

    fetchProducts: async () => {
      set(
        {
          isLoading: true,
          error: null,
        },
        undefined,
        "product/fetchProducts/pending",
      );

      try {
        const data = await getProducts();

        set(
          {
            products: data.products,
            isLoading: false,
          },
          undefined,
          "product/fetchProducts/success",
        );
      } catch {
        set(
          {
            error: "상품 조회 실패",
            isLoading: false,
          },
          undefined,
          "product/fetchProducts/failure",
        );
      }
    },
  })),
);

export default useProductStore;
