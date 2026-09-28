// 상품
export interface Product {
  readonly id: number;
  title: string;
  price: number;
  thumbnail: string;
}

// 장바구니에 담긴 상품(상품 정보 + 수량)
export interface CartItem extends Product {
  quantity: number;
}

// GET /products API 응답
export interface ProductsResponse {
  products: Product[];
}

// 상품 스토어의 상태와 액션
export interface ProductStore {
  products: Product[];
  isLoading: boolean;

  fetchProducts: () => Promise<void>;
}

// 장바구니 스토어의 상태와 액션
export interface CartStore {
  items: CartItem[];

  addItem: (product: Product) => void;
  removeItem: (productId: Product["id"]) => void;
  increaseQuantity: (productId: Product["id"]) => void;
  decreaseQuantity: (productId: Product["id"]) => void;
}
