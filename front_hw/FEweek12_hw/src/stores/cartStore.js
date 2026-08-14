import { create } from "zustand";

const useCartStore = create((set) => ({
  items: [],

  // 상품 추가
  addItem: (product) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === product.id);

      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item,
          ),
        };
      }

      return {
        items: [
          ...state.items,
          {
            ...product,
            quantity: 1,
          },
        ],
      };
    }),

  // 상품 삭제
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    })),

  // 수량 변경(+)
  increaseQuantity: (productId) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    })),

  // 수량 변경(-)
  decreaseQuantity: (productId) =>
    set((state) => ({
      items: state.items
        .map((item) =>
          item.id === productId
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    })),
}));

export default useCartStore;
