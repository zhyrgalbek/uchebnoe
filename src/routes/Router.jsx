import React from "react";
import { Route, Routes } from "react-router";
import { AboutPage } from "../containers/AboutPage";
import { StaticPage } from "../containers/StaticPage";
import { ClientLayout } from "../layouts/ClientLayout";

const Router = () => {
  return <Routes>
    <Route path="/" element={<ClientLayout />}>
      <Route path="/" element={<StaticPage />} replace />
      <Route path="about" element={<AboutPage />} replace />
    </Route>
  </Routes>
};

export default Router;
