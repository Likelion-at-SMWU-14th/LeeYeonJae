import styled from "styled-components";
import Frame from "./components/Frame";
import Logo from "./components/Logo";
import LikeCard from "./components/LikeCard";

function App() {
  return (
    <Wrapper>
      <Frame>
        <Logo />
        <LikeCard />
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
