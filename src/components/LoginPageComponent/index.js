import React from "react";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import LoginForm from "../Forms/LoginForm";

const PageWrap = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
}));

const LoginPageComponent = () => {
  return (
    <PageWrap>
      <LoginForm />
    </PageWrap>
  );
};

export default LoginPageComponent;
