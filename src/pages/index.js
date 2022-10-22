import React from "react";
import { Routes, Route } from "react-router-dom";

import * as path from "../constans/route";
import LoginPage from "./LoginPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={path.LOGIN_PAGE} element={<LoginPage />} />
    </Routes>
  );
};

export default AppRoutes;
