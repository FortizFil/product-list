import React from "react";
import { useSelector } from "react-redux";

import AppRoutes from "./pages";
import ErrorAlert from "./components/ErrorAlert";

function App() {
  const error = useSelector((state) => state.error);
  return (
    <>
      <AppRoutes />
      {error.error && <ErrorAlert />}
    </>
  );
}

export default App;
