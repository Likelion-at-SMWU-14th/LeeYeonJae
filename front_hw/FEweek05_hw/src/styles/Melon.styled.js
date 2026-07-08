import styled from "styled-components";

export const Page = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;
  border-top: 3px solid #00d10b;
  padding-bottom: 4rem;
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
  gap: 1.5rem;
  padding: 0 4rem;
`;

export const MenuItem = styled.button`
  font-size: 1.1rem;
  font-weight: 600;
  white-space: nowrap;
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

export const Content = styled.div`
  width: 100%;
  margin-top: 2rem;
  padding: 0 4rem;
`;

export const ChartTitle = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
`;

export const ActionButtonContainer = styled.div`
  display: flex;
  gap: 0.6rem;
  margin: 1rem 0;
`;

export const ActionButton = styled.button`
  font-size: 0.8rem;
  white-space: nowrap;
  background-color: #ffffff;
  color: #404040;
  border: 1px solid #b8b8b8;
  border-radius: 999px;
  padding: 0.4rem 0.8rem;
  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    background-color: #f5f5f5;
  }
`;

export const ChartContainer = styled.div`
  width: 100%;
`;

export const ChartHeader = styled.div`
  height: 3rem;
  display: grid;
  grid-template-columns: 20px 60px 100px 240px 200px 120px 60px 60px 60px 60px;
  align-items: center;
  border-top: 1px solid #e0e0e0;
  border-bottom: 1px solid #e0e0e0;
  color: #606060;
  font-size: 0.8rem;
`;

export const MusicItem = styled.div`
  height: 6rem;
  display: grid;
  grid-template-columns: 20px 60px 100px 240px 200px 120px 60px 60px 60px 60px;
  align-items: center;
  border-bottom: 1px solid #efefef;
`;

export const CheckBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CheckBox = styled.input`
  width: 0.9rem;
  height: 0.9rem;
  cursor: pointer;
`;

export const HeaderText = styled.p`
  text-align: center;

  &:nth-child(4),
  &:nth-child(5) {
    text-align: left;
  }
`;

export const Rank = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #202020;
`;

export const AlbumImage = styled.img`
  width: 3.8rem;
  height: 3.8rem;
  object-fit: cover;
  justify-self: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.3rem;
`;

export const Title = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  color: #202020;
`;

export const Artist = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  color: #808080;
`;

export const AlbumName = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  color: #808080;
`;

export const LikeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
`;

export const HeartIcon = styled.img`
  width: 0.9rem;
  height: 0.9rem;
`;

export const LikeCount = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  color: #808080;
`;

export const IconButton = styled.button`
  justify-self: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 1.4rem;
  height: 1.4rem;
`;
