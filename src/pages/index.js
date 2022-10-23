import React, { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import * as path from "../constans/route";

const LoginPage = lazy(() => import("./LoginPage"));
const ProductPage = lazy(() => import("./ProductPage"));

const ProtectedRoute = ({ user, redirectPath = "/", children }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

const PublickRoute = ({ user, redirectPath, children }) => {
  console.log(redirectPath);
  if (user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

const AppRoutes = () => {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route
          path="/"
          element={
            <PublickRoute user={user} redirectPath={path.PRODUCT_PAGE}>
              <LoginPage />
            </PublickRoute>
          }
        />
        <Route
          path={path.PRODUCT_PAGE}
          element={
            <ProtectedRoute user={user}>
              <ProductPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
