import { AboutPageAsync } from "pages/AboutPage/AboutPageAsync";
import { MainPageAsync } from "pages/MainPage/MainPageAsync";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div className="app">
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
