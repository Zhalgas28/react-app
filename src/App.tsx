import { AboutPageAsync } from "pages/AboutPage/AboutPageAsync";
import { MainPageAsync } from "pages/MainPage/MainPageAsync";
import { Suspense} from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { useTheme } from "theme/useTheme";

export const App = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About us</Link>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
