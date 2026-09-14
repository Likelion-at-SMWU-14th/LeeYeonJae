import styled from "styled-components";

function OrderButton() {
  return <Button type="button">주문하기</Button>;
}

export default OrderButton;

const Button = styled.button`
  width: 100%;
  max-width: 280px;
  padding: 14px;
  border: none;
  border-radius: 16px;
  background: #ff7cb4;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  transition: filter 0.3s ease;

  &:hover {
    filter: brightness(0.9);
  }
`;
