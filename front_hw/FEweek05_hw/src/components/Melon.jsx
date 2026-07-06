import * as S from "../styles/Melon.Styled";
import searchIcon from "../assets/icon/search-icon.svg";
import MenuTab from "./MenuTab";

function Melon() {
  const menuList = [
    "멜론차트",
    "최신음악",
    "장르음악",
    "멜론DJ",
    "멜론TV",
    "스타포스트",
    "매거진",
    "뮤직어워드",
    "뮤직웨이브",
  ];

  return (
    <S.Page>
      <S.Header>
        <S.Logo>Melon</S.Logo>

        <S.SearchContainer>
          <S.SearchInput
            type="text"
            placeholder="[멜론티켓] 새로운 공연 소식을 확인하세요!"
          />
          <S.SearchButton>
            <S.SearchIcon src={searchIcon} alt="검색" />
          </S.SearchButton>
        </S.SearchContainer>
      </S.Header>

      <S.MenuNav>
        {menuList.map((menu, index) => (
          <MenuTab key={menu} title={menu} active={index === 0} />
        ))}
      </S.MenuNav>
    </S.Page>
  );
}

export default Melon;
