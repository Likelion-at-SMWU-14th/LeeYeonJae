import styled from "styled-components";
import Frame from "./components/Frame";
import Logo from "./components/Logo";
import LikeCard from "./components/LikeCard";
import HateCard from "./components/HateCard";
import OrderButton from "./components/OrderButton";

function App() {
  return (
    <Wrapper>
      <Frame>
        <Logo />
        <LikeCard />
        <HateCard />
        <OrderButton />
      </Frame>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;
