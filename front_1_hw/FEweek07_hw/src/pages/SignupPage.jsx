import * as S from "../styles/SignupPage.Styled";
import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import InputField from "../components/InputField";
import Button from "../components/Button";
import lionIcon from "../assets/lion.svg";

const ID_REGEX = /^[A-Za-z0-9]+$/;
const EMAIL_REGEX = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const PHONE_REGEX = /^01[016789]-?\d{3,4}-?\d{4}$/;

const SignupPage = () => {
  const navigate = useNavigate();

  const id = useInput("");
  const password = useInput("");
  const passwordConfirm = useInput("");
  const nickname = useInput("");
  const email = useInput("");
  const phone = useInput("");
  const [agree, setAgree] = useState(false);

  // 아이디 검증
  const idError = useMemo(() => {
    if (!id.value) return "";

    if (id.value.length < 4 || id.value.length > 10) {
      return "4~10자로 입력해주세요.";
    }

    if (!ID_REGEX.test(id.value)) {
      return "영문과 숫자 조합으로만 입력해주세요.";
    }

    return "";
  }, [id.value]);

  // 비밀번호 검증
  const passwordError = useMemo(() => {
    if (!password.value) return "";

    if (password.value.length < 8) {
      return "8자 이상 입력해주세요.";
    }

    return "";
  }, [password.value]);

  // 비밀번호 확인 검증
  const passwordConfirmError = useMemo(() => {
    if (!passwordConfirm.value) return "";

    if (passwordConfirm.value.length < 8) {
      return "8자 이상 입력해주세요.";
    }

    if (password.value !== passwordConfirm.value) {
      return "비밀번호가 일치하지 않습니다.";
    }

    return "";
  }, [password.value, passwordConfirm.value]);

  // 이메일 검증
  const emailError = useMemo(() => {
    if (!email.value) return "";

    if (!EMAIL_REGEX.test(email.value)) {
      return "올바른 이메일 형식을 입력해주세요.";
    }

    return "";
  }, [email.value]);

  // 전화번호 검증
  const phoneError = useMemo(() => {
    if (!phone.value) return "";

    if (!PHONE_REGEX.test(phone.value)) {
      return "올바른 전화번호 형식을 입력해주세요.";
    }

    return "";
  }, [phone.value]);

  // 회원가입
  const handleSignup = () => {
    if (
      !id.value ||
      !password.value ||
      !passwordConfirm.value ||
      !nickname.value ||
      !email.value ||
      !phone.value
    ) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    if (
      idError ||
      passwordError ||
      passwordConfirmError ||
      emailError ||
      phoneError
    ) {
      alert("입력값을 다시 확인해주세요.");
      return;
    }

    if (!agree) {
      alert("개인정보 활용 동의가 필요합니다.");
      return;
    }

    navigate("/");
  };

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
        {idError && <S.ErrorMessage>{idError}</S.ErrorMessage>}

        <InputField
          type="password"
          placeholder="비밀번호"
          value={password.value}
          onChange={password.handleChange}
        />
        {passwordError && <S.ErrorMessage>{passwordError}</S.ErrorMessage>}

        <InputField
          type="password"
          placeholder="비밀번호 확인"
          value={passwordConfirm.value}
          onChange={passwordConfirm.handleChange}
        />
        {passwordConfirmError && (
          <S.ErrorMessage>{passwordConfirmError}</S.ErrorMessage>
        )}

        <InputField
          placeholder="닉네임"
          value={nickname.value}
          onChange={nickname.handleChange}
        />

        <InputField
          type="email"
          placeholder="이메일"
          value={email.value}
          onChange={email.handleChange}
        />
        {emailError && <S.ErrorMessage>{emailError}</S.ErrorMessage>}

        <InputField
          type="tel"
          placeholder="전화번호"
          value={phone.value}
          onChange={phone.handleChange}
        />
        {phoneError && <S.ErrorMessage>{phoneError}</S.ErrorMessage>}

        <S.CheckboxLabel>
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          개인정보 활용에 동의합니다.
        </S.CheckboxLabel>
      </S.InputWrapper>

      <Button text="회원가입" onClick={handleSignup} />
    </S.Container>
  );
};

export default SignupPage;
