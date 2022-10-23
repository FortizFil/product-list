import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import AppRoutes from "./pages";
import ErrorAlert from "./components/ErrorAlert";
import { useGetUserQuery } from "./services/AuthAPI";
import { setUser } from "./redux/auth";

function App() {
  const error = useSelector((state) => state.error);
  const { data } = useGetUserQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser(data));
  }, [data, dispatch]);

  return (
    <>
      <AppRoutes />
      {error.error && <ErrorAlert />}
    </>
  );
}

export default App;
