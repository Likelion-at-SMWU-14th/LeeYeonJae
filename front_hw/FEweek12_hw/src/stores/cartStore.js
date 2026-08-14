import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useCartStore = create(
  devtools((set) => ({
    items: [],

    // 상품 추가
    addItem: (product) =>
      set(
        (state) => {
          const existingItem = state.items.find(
            (item) => item.id === product.id,
          );

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
        },
        undefined,
        "cart/addItem",
      ),

    // 상품 삭제
    removeItem: (productId) =>
      set(
        (state) => ({
          items: state.items.filter((item) => item.id !== productId),
        }),
        undefined,
        "cart/removeItem",
      ),

    // 수량 변경(+)
    increaseQuantity: (productId) =>
      set(
        (state) => ({
          items: state.items.map((item) =>
            item.id === productId
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item,
          ),
        }),
        undefined,
        "cart/increaseQuantity",
      ),

    // 수량 변경(-)
    decreaseQuantity: (productId) =>
      set(
        (state) => ({
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
        }),
        undefined,
        "cart/decreaseQuantity",
      ),
  })),
);

export default useCartStore;
