import styled from "styled-components";

export const Page = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;
  border-top: 3px solid #00d10b;
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 4rem;
`;

export const Logo = styled.p`
  font-size: 3rem;
  font-weight: 600;
  color: #00d10b;
  cursor: default;
`;

export const SearchContainer = styled.div`
  width: 20rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.4rem 1rem;
  border: 2px solid #00d10b;
  border-radius: 999px;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 0.8rem;

  &::placeholder {
    color: #9f9f9f;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const SearchIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const MenuNav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #b8b8b8;
  gap: 2rem;
  padding: 0 4rem;
`;

export const MenuItem = styled.button`
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-bottom: 3px solid
    ${({ active }) => (active ? "#00d10b" : "transparent")};
  color: ${({ active }) => (active ? "#00d10b" : "#202020")};
  background: transparent;
  padding: 0.8rem 0.2rem;
  cursor: pointer;

  &:hover {
    color: #00d10b;
    border-bottom: 3px solid #00d10b;
  }
`;
