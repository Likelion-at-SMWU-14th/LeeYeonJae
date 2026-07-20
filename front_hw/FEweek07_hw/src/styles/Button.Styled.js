import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  max-width: 360px;
  height: 52px;
  font-size: 18px;
  font-weight: 500;
  border: none;
  border-radius: 8px;
  background-color: #ee7521;
  color: #e0e0e0;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.99);
  }
`;
