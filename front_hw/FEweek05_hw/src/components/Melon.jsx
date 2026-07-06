import * as S from "../styles/Melon.Styled";
import searchIcon from "../assets/icon/search-icon.svg";

function Melon() {
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
    </S.Page>
  );
}

export default Melon;
