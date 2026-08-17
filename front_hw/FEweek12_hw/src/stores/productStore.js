import { create } from "zustand";
import { devtools } from "zustand/middleware";
import getProducts from "../apis/productApi";

const useProductStore = create(
  devtools((set) => ({
    products: [],
    isLoading: false,

    fetchProducts: async () => {
      set(
        {
          isLoading: true,
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
