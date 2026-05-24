import styled from "styled-components";

function Frame({ children }) {
  return (
    <Phone>
      <Top>
        <Camera />
        <Speaker />
      </Top>
      <Screen>{children}</Screen>
      <Bottom>
        <HomeButton>
          <HomeIcon />
        </HomeButton>
      </Bottom>
    </Phone>
  );
}

export default Frame;

const Phone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 700px;
  border-radius: 50px;
  border: 20px solid #000000;
  background-color: #000000;
  box-sizing: border-box;
`;

const Top = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 10px 0 30px;
`;

const Camera = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #303030;
`;

const Speaker = styled.div`
  width: 88px;
  height: 14px;
  border-radius: 20px;
  background-color: #303030;
`;

const Screen = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 0;
  background: #ffeaf3;
  overflow: hidden;
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 30px 0 10px;
`;

const HomeButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 4px solid #303030;
`;

const HomeIcon = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 4px solid #303030;
`;
