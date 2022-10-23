import React, { Suspense, lazy } from "react";
import { useSelector } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";

import * as path from "../constans/route";
import Loader from "../components/Loader";

const LoginPage = lazy(() => import("./LoginPage"));
const ProductPage = lazy(() => import("./ProductPage"));
const NotFound = lazy(() => import("./NotFound"));

const ProtectedRoute = ({ user, redirectPath = "/", children }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

const PublickRoute = ({ user, redirectPath, children }) => {
  if (user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children;
};

const AppRoutes = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Suspense fallback={<Loader />}>
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
        <Route path={"*"} element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
