import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import TitleContext from "./contexts/TitleContext";
import { ThemeContextProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeContextProvider>
      <TitleContext.Provider value={"yeonjae의 영화관"}>
        <Header />
        <Outlet />
      </TitleContext.Provider>
    </ThemeContextProvider>
  );
}

export default App;
