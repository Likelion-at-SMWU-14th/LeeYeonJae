import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  padding: 20px 14px 14px;
  font-size: 14px;
  color: #ee7521;
  background: transparent;
  outline: none;
  border: none;
  box-sizing: border-box;
`;

export const Fieldset = styled.fieldset`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0 10px;
  pointer-events: none;
  border: 1px solid #808080;
  border-radius: 8px;
  transition: border-color 0.2s ease;
  border-color: ${({ $isFocused }) => ($isFocused ? "#EE7521" : "#808080")};
`;

export const Legend = styled.legend`
  max-width: ${({ $active }) => ($active ? "100%" : "0px")};
  padding: ${({ $active }) => ($active ? "0 8px" : "0 0px")};
  font-size: 12px;
  visibility: hidden;
  white-space: nowrap;
  transition: all 0.2s ease;
`;

export const Label = styled.label`
  position: absolute;
  left: 10px;
  padding: 0 6px;
  pointer-events: none;
  font-size: ${({ $active }) => ($active ? "14px" : "16px")};
  font-weight: ${({ $active }) => ($active ? "600" : "400")};
  color: ${({ $active }) => ($active ? "#EE7521" : "#808080")};
  top: ${({ $active }) => ($active ? "6px" : "55%")};
  transform: ${({ $active }) =>
    $active ? "translateY(-50%)" : "translateY(-50%)"};
  transition: all 0.2s ease-in-out;
`;
