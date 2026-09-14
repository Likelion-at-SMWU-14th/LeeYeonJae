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

export const SignupWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  gap: 8px;
  margin-top: 40px;
`;

export const SignupText = styled.span`
  color: #a0a0a0;
`;

export const SignupLink = styled.span`
  color: #e0e0e0;
  text-decoration: underline;
  cursor: pointer;
`;
