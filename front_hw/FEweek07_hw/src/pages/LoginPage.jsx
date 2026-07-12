import InputField from "../components/InputField";
import useInput from "../hooks/useInput";

const LoginPage = () => {
  const id = useInput("");
  const password = useInput("");

  return (
    <div>
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
    </div>
  );
};

export default LoginPage;
