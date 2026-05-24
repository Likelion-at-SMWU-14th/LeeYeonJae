import styled from "styled-components";
import Frame from "./components/Frame";

function App() {
  return (
    <Wrapper>
      <Frame></Frame>
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
