import useCartStore from "../stores/cartStore";
import type { Product } from "../types/product";
import * as S from "../styles/styled";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <S.ProductCard>
      <S.ProductImage src={product.thumbnail} alt={product.title} />

      <S.ProductBody>
        <S.ProductTitle>{product.title}</S.ProductTitle>

        <S.ProductPrice>${product.price}</S.ProductPrice>

        <S.PrimaryButton onClick={() => addItem(product)}>
          장바구니 담기
        </S.PrimaryButton>
      </S.ProductBody>
    </S.ProductCard>
  );
};

export default ProductCard;
