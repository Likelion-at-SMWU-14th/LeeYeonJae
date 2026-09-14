import { useState } from "react";
import { useSignUp } from "../hooks/useSignUp";

function SignUpForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { mutate } = useSignUp();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) return;

    mutate({ username, password });

    setUsername("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>회원가입</h2>

      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="username"
      />

      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />

      <button type="submit">가입하기</button>
    </form>
  );
}

export default SignUpForm;
