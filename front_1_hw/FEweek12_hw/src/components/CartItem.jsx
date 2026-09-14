import useCartStore from "../stores/cartStore";
import * as S from "../styles/styled";

const CartItem = ({ item }) => {
  const increaseQuantity = useCartStore((s) => s.increaseQuantity);
  const decreaseQuantity = useCartStore((s) => s.decreaseQuantity);
  const removeItem = useCartStore((s) => s.removeItem);

  return (
    <S.CartItem>
      <S.CartImage src={item.thumbnail} alt={item.title} />

      <S.CartBody>
        <S.CartTitle>{item.title}</S.CartTitle>

        <S.CartActions>
          <S.QtyButton onClick={() => decreaseQuantity(item.id)}>-</S.QtyButton>

          <S.Qty>{item.quantity}</S.Qty>

          <S.QtyButton onClick={() => increaseQuantity(item.id)}>+</S.QtyButton>

          <S.DeleteButton onClick={() => removeItem(item.id)}>
            삭제
          </S.DeleteButton>
        </S.CartActions>
      </S.CartBody>
    </S.CartItem>
  );
};

export default CartItem;
