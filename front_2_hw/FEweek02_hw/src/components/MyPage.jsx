import { useMyPage } from "../hooks/useMyPage";

function MyPage({ userId }) {
  const { data, isPending, isError } = useMyPage(userId);

  if (isPending) return <p>로딩 중...</p>;
  if (isError) return <p>에러 발생!</p>;

  return (
    <div>
      <h2>마이페이지 조회</h2>

      <p>id: {data?.id}</p>
      <p>username: {data?.username}</p>
    </div>
  );
}

export default MyPage;
