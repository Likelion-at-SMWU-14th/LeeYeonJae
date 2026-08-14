import styled from "styled-components";

export const Page = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 40px;
  align-items: start;
`;

export const Section = styled.div`
  min-width: 0;
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  border: 1px solid #eef1f6;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(26, 35, 53, 0.08);
  overflow: hidden;
`;

export const ProductImage = styled.img`
  height: 100%;
  width: auto;
  object-fit: cover;
`;

export const ProductBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px;
  gap: 12px;
`;

export const ProductTitle = styled.h2`
  font-size: 16px;
  margin: 0;
  min-height: 36px;
`;

export const ProductPrice = styled.h2`
  font-size: 14px;
  margin: 0;
`;

export const Button = styled.button`
  height: 40px;
  padding: 0 14px;
  border: none;
  border-radius: 8px;
  background: #eef1f7;
  color: #1d2a3b;
  cursor: pointer;
  font-weight: 600;
  transition:
    transform 0.06s ease,
    box-shadow 0.2s,
    background 0.2s;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    background: #e6ebf5;
  }
  &:active {
    transform: translateY(1px);
  }
`;

export const PrimaryButton = styled(Button)`
  background: #5b79ff;
  color: #fff;
  box-shadow: 0 6px 16px rgba(91, 121, 255, 0.28);

  &:hover {
    background: #4f6af0;
  }
`;

export const DeleteButton = styled(Button)`
  background: #ffe9e9;
  color: #c43d3d;
  padding: 8px 10px;
  height: 32px;

  &:hover {
    background: #ffdede;
  }
`;

export const QtyButton = styled(Button)`
  width: 32px;
  height: 32px;
  padding: 0;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 500;
  line-height: 1;
`;

export const CartPanel = styled.div`
  position: sticky;
  top: 40px;
  background: #fff;
  border: 1px solid #eef1f6;
  border-radius: 12px;
  padding: 20px 16px;
  box-shadow: 0 8px 24px rgba(26, 35, 53, 0.08);
`;

export const CartPanelTitle = styled.h1`
  margin: 0 0 20px;
  font-size: 20px;
`;

export const CartList = styled.div`
  display: grid;
  gap: 14px;
`;

export const CartItem = styled.div`
  display: grid;
  grid-template-columns: 64px minmax(0, 1fr);
  gap: 12px;
  align-items: center;
  padding: 10px;
  background: #fff;
  border: 1px solid #eef1f6;
  border-radius: 8px;
`;

export const CartImage = styled.img`
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 8px;
  background: #f7f7f7;
`;

export const CartBody = styled.div`
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CartTitle = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CartActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Qty = styled.span`
  min-width: 20px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
`;

export const Empty = styled.p`
  margin: 0;
  color: #a0a0a0;
  font-size: 14px;
`;

export const Loading = styled.div`
  min-height: 100vh;
  display: grid;
  place-items: center;
  color: #909090;
  font-size: 16px;
  font-weight: 500;
`;
