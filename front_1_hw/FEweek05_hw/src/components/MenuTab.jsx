import * as S from "../styles/Melon.Styled";

function MenuTab({ title, active }) {
  return <S.MenuItem active={active}>{title}</S.MenuItem>;
}

export default MenuTab;
