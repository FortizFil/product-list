import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import * as path from "../constans/route";

const LoginPage = lazy(() => import("./LoginPage"));
const ProductPage = lazy(() => import("./ProductPage"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path={path.PRODUCT_PAGE} element={<ProductPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
