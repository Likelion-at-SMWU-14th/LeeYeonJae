import { useDeleteUser } from "../hooks/useDeleteUser";

function DeleteUser({ userId }) {
  const { mutate } = useDeleteUser();

  return (
    <div>
      <h2>회원 탈퇴</h2>

      <button type="button" onClick={() => mutate(userId)}>
        탈퇴하기
      </button>
    </div>
  );
}

export default DeleteUser;
