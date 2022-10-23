import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import { styled } from "@mui/material/styles";

import { setError } from "../../redux/error";

const ErrorWrap = styled(Box)(() => ({
  width: "400px",
  position: "absolute",
  bottom: 20,
  left: 565,
}));

const ErrorAlert = () => {
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const closeAlert = () => dispatch(setError(null));

  return (
    <ErrorWrap>
      <Alert severity="error" onClose={closeAlert}>
        {error.error}
      </Alert>
    </ErrorWrap>
  );
};

export default ErrorAlert;
