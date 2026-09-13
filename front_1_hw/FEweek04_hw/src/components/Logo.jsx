import styled from "styled-components";

function Logo() {
  return (
    <Container>
      <Initial>BR</Initial>
      <BrandName>baskin</BrandName>
      <BrandName>robbins</BrandName>
    </Container>
  );
}

export default Logo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "kirang";
`;

const Initial = styled.span`
  color: #ff338a;
  font-size: 80px;
  line-height: 0.8;
`;

const BrandName = styled.span`
  color: #ff7cb4;
  font-size: 24px;
  line-height: 0.85;
`;
