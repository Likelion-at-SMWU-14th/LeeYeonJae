import * as S from "../styles/LoginPage.Styled";
import { Link } from "react-router-dom";
import useInput from "../hooks/useInput";
import InputField from "../components/InputField";
import Button from "../components/Button";
import lionIcon from "../assets/lion.svg";

const LoginPage = () => {
  const id = useInput("");
  const password = useInput("");

  return (
    <S.Container>
      <S.Logo src={lionIcon} alt="likelion" />
      <S.Title>LIKELION</S.Title>

      <S.InputWrapper>
        <InputField
          placeholder="아이디"
          value={id.value}
          onChange={id.handleChange}
        />

        <InputField
          type="password"
          placeholder="비밀번호"
          value={password.value}
          onChange={password.handleChange}
        />
      </S.InputWrapper>

      <Button text="로그인" />

      <S.SignupWrapper>
        <S.SignupText>아직 계정이 없으신가요?</S.SignupText>
        <S.SignupLink as={Link} to="/signup">
          회원가입하기
        </S.SignupLink>
      </S.SignupWrapper>
    </S.Container>
  );
};

export default LoginPage;
