import React from "react";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";

const LoaderWrap = styled(Box)(() => ({
  display: "flex",
  position: "absolute",
  left: "50%",
  top: "50%",
}));

const Loader = () => {
  return (
    <LoaderWrap>
      <CircularProgress />
    </LoaderWrap>
  );
};

export default Loader;
