import { create } from "zustand";
import getProducts from "../apis/productApi";

const useProductStore = create((set) => ({
  products: [],
  isLoading: false,
  error: null,

  fetchProducts: async () => {
    set({
      isLoading: true,
      error: null,
    });

    try {
      const data = await getProducts();

      set({
        products: data.products,
        isLoading: false,
      });
    } catch {
      set({
        error: "상품 조회 실패",
        isLoading: false,
      });
    }
  },
}));

export default useProductStore;
