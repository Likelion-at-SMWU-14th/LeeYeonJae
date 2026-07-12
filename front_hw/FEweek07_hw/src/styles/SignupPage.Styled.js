import styled from "styled-components";

export const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

export const Title = styled.p`
  color: #ee7521;
  font-size: 32px;
  font-weight: 500;
`;

export const InputWrapper = styled.div`
  width: 100%;
  max-width: 360px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0 40px;
`;

export const ErrorMessage = styled.p`
  color: #cc7032;
  font-size: 12px;
  margin-top: -10px;
  margin-bottom: 0;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #aaaaaa;
  font-size: 14px;
  cursor: pointer;

  input {
    width: 18px;
    height: 18px;
    appearance: none;
    border: 1px solid #ee7521;
    border-radius: 4px;
    background: transparent;
    cursor: pointer;

    &:checked {
      background: #ee7521;
    }
  }
`;
