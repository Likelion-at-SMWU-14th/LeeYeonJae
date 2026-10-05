import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #f5f5f5;
    color: #171717;
  }
`;

// App
export const Page = styled.main`
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 28px;
  margin: 0 0 8px;
`;

export const SubTitle = styled.p`
  font-size: 18px;
  color: #808080;
  margin: 0 0 20px;
`;

export const Content = styled.div`
  margin-top: 28px;
`;

export const Message = styled.p<{ $error?: boolean }>`
  font-size: 16px;
  text-align: center;
  padding: 40px;
  color: ${({ $error }) => ($error ? "#FF4848" : "#808080")};
`;

// FilterButton
export const FilterButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

export const BrandFilter = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

export const BrandButton = styled.button<{ $active: boolean }>`
  padding: 8px 16px;
  border-radius: 100px;
  font-size: 14px;
  border: 1px solid ${({ $active }) => ($active ? "#171717" : "#d0d0d0")};
  background: ${({ $active }) => ($active ? "#171717" : "#ffffff")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#171717")};
  cursor: pointer;
  transition:
    background 0.2s,
    border-color 0.2s;

  &:hover {
    border-color: #171717;
  }
`;

export const YearFilter = styled.select`
  flex-shrink: 0;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid #d0d0d0;
  background: #ffffff;
  font-size: 14px;

  &:focus {
    outline: none;
  }
`;

// ModelGrid
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 16px;
`;

// ModelCard
export const CardContainer = styled.div`
  perspective: 1000px;
  cursor: pointer;
`;

export const CardContent = styled.div<{ $flipped: boolean }>`
  position: relative;
  width: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  transform: ${({ $flipped }) => ($flipped ? "rotateY(-180deg)" : "none")};
`;

const Side = styled.div`
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 12px;
  background: #ffffff;
  border: 1px solid #d0d0d0;
  overflow: hidden;
`;

export const Front = styled(Side)`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const Back = styled(Side)`
  position: absolute;
  inset: 0;
  transform: rotateY(-180deg);
  padding: 16px;
  overflow-y: auto;
`;

export const Image = styled.div`
  position: relative;
  aspect-ratio: 5 / 3;
  width: 100%;
  flex-shrink: 0;
  overflow: hidden;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #808080;
  font-size: 14px;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Caption = styled.div`
  padding: 12px 16px;
`;

export const Label = styled.p`
  color: #606060;
  font-size: 14px;
  margin: 0;
`;

export const Value = styled.p`
  color: #171717;
  font-size: 18px;
  margin: 4px 0 0;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Rows = styled.dl`
  margin: 0 0 12px;
  font-size: 13px;

  div {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    padding: 6px 0;
    border-bottom: 1px solid #f0f0f0;
  }
  dt {
    color: #606060;
  }
  dd {
    text-align: right;
    margin: 0;
  }
`;

export const Desc = styled.p`
  margin: 0;
  font-size: 14px;
  color: #606060;
`;
