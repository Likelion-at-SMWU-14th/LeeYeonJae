import { useEffect } from "react";
import useProductStore from "../stores/productStore";
import useCartStore from "../stores/cartStore";
import ProductCard from "../components/ProductCard";
import CartItem from "../components/CartItem";
import * as S from "../styles/styled";

const ShopPage = () => {
  const fetchProducts = useProductStore((s) => s.fetchProducts);
  const products = useProductStore((s) => s.products);
  const isLoading = useProductStore((s) => s.isLoading);
  const items = useCartStore((s) => s.items);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (isLoading) {
    return <S.Loading>loading</S.Loading>;
  }

  return (
    <S.Page>
      <S.Section>
        <S.ProductGrid>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </S.ProductGrid>
      </S.Section>

      <S.CartPanel>
        <S.CartPanelTitle>장바구니</S.CartPanelTitle>

        {items.length === 0 ? (
          <S.Empty>장바구니가 비어있습니다.</S.Empty>
        ) : (
          <S.CartList>
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </S.CartList>
        )}
      </S.CartPanel>
    </S.Page>
  );
};

export default ShopPage;
