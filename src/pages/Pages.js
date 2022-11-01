import React from "react";
import { Route, Routes } from "react-router-dom";
import DetailPage from "./DetailPage";
import MainPage from "./MainPage";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/:id" element={<DetailPage />} />
    </Routes>
  );
};

export default Pages;
