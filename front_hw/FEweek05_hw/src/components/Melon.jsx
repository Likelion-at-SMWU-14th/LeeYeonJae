import * as S from "../styles/Melon.Styled";
import searchIcon from "../assets/icon/search-icon.svg";
import MenuTab from "./MenuTab";
import ActionButton from "./ActionButton";
import MusicChart from "./MusicChart";

function Melon() {
  const menuList = [
    { id: 1, title: "멜론차트" },
    { id: 2, title: "최신음악" },
    { id: 3, title: "장르음악" },
    { id: 4, title: "멜론DJ" },
    { id: 5, title: "멜론TV" },
    { id: 6, title: "스타포스트" },
    { id: 7, title: "매거진" },
    { id: 8, title: "뮤직어워드" },
    { id: 9, title: "뮤직웨이브" },
  ];

  const actionList = [
    { id: 1, label: "셔플듣기" },
    { id: 2, label: "전체듣기" },
    { id: 3, label: "듣기" },
    { id: 4, label: "담기" },
    { id: 5, label: "다운" },
    { id: 6, label: "FLAC" },
    { id: 7, label: "선물" },
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
          <MenuTab key={menu.id} title={menu.title} active={index === 0} />
        ))}
      </S.MenuNav>

      <S.Content>
        <S.ChartTitle>TOP100</S.ChartTitle>

        <S.ActionButtonContainer>
          {actionList.map((button) => (
            <ActionButton key={button.id} label={button.label} />
          ))}
        </S.ActionButtonContainer>

        <MusicChart />
      </S.Content>
    </S.Page>
  );
}

export default Melon;
