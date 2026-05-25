import styled from "styled-components";
import like1 from "../assets/images/like1.png";
import like2 from "../assets/images/like2.png";
import like3 from "../assets/images/like3.png";

function LikeCard() {
  return (
    <Container>
      <Item>
        <Scoop src={like1} />
        <Name>31요거트</Name>
      </Item>
      <Item>
        <Scoop src={like2} />
        <Name>레인보우샤베트</Name>
      </Item>
      <Item>
        <Scoop src={like3} />
        <Name>그린티</Name>
      </Item>
    </Container>
  );
}

export default LikeCard;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 280px;
  padding: 10px 14px;
  border-radius: 16px;
  border: 2px solid #ff7cb4;
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
`;

const Name = styled.span`
  color: #000000;
  text-align: center;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
`;
