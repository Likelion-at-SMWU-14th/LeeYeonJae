import styled from "styled-components";
import hate1 from "../assets/images/hate1.png";
import hate2 from "../assets/images/hate2.png";
import hate3 from "../assets/images/hate3.png";

function HateCard() {
  return (
    <Container>
      <Item>
        <Scoop src={hate1} />
        <Name>민트 초콜릿 칩</Name>
      </Item>
      <Item>
        <Scoop src={hate2} />
        <Name>애플 민트</Name>
      </Item>
      <Item>
        <Scoop src={hate3} />
        <Name>체리쥬빌레</Name>
      </Item>
    </Container>
  );
}

export default HateCard;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 280px;
  padding: 10px 14px;
  border-radius: 16px;
  border: 2px solid #a0a0a0;
  background-color: #ffffff;
  box-sizing: border-box;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Scoop = styled.img`
  width: 80px;
  height: auto;
  object-fit: contain;
  filter: grayscale(100%);
`;

const Name = styled.span`
  color: #a0a0a0;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
`;
