import * as S from "../styles/Button.Styled";

const Button = ({ type = "button", onClick, text }) => {
  return (
    <S.Button type={type} onClick={onClick}>
      {text}
    </S.Button>
  );
};

export default Button;
