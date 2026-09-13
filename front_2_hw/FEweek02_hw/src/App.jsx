import SignUpForm from "./components/SignUpForm";
import UpdateUserForm from "./components/UpdateUserForm";
import MyPage from "./components/MyPage";
import DeleteUser from "./components/DeleteUser";

function App() {
  const userId = 1;

  return (
    <div>
      <SignUpForm />
      <hr />
      <UpdateUserForm userId={userId} />
      <hr />
      <MyPage userId={userId} />
      <hr />
      <DeleteUser userId={userId} />
    </div>
  );
}

export default App;
