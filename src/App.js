import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import AppRoutes from "./pages";
import ErrorAlert from "./components/ErrorAlert";
import { useGetUserQuery } from "./services/API";
import { setUser } from "./redux/auth";
import Loader from "./components/Loader";

function App() {
  const error = useSelector((state) => state.error);
  const { data, isLoading } = useGetUserQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser(data));
  }, [data, dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <AppRoutes />
      {error.error && <ErrorAlert />}
    </>
  );
}

export default App;
