import { useState } from "react";
import { useUpdateUser } from "../hooks/useUpdateUser";

function UpdateUserForm({ userId }) {
  const [username, setUsername] = useState("");

  const { mutate } = useUpdateUser();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) return;

    mutate({ userId, username });

    setUsername("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>개인정보 수정</h2>

      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="new username"
      />

      <button type="submit">수정하기</button>
    </form>
  );
}

export default UpdateUserForm;
