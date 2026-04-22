import { classNames } from "shared/lib/classNames";
import { Suspense} from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { useTheme } from "app/providers/ThemeProvider";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";

export const App = () => {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className={classNames('app', {hovered: false, selected: true}, [theme, 'cls2', 'cls3'])}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About us</Link>
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
