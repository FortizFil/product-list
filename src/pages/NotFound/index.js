import React from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const MainWrap = styled(Box)(() => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#1976d2",
}));

const Text = styled(Typography)(() => ({
  fontSize: "45px",
  fontWeight: "bold",
  textTransform: "uppercase",
  color: "white",
}));

const GoHomeButton = styled(Button)(() => ({
  backgroundColor: "white",
  color: "#1976d2",

  "&:hover": {
    backgroundColor: "white",
  },
}));

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/");
  return (
    <MainWrap>
      <Text>Page not found =(</Text>
      <GoHomeButton variant="contained" onClick={handleClick}>
        Go home
      </GoHomeButton>
    </MainWrap>
  );
};

export default NotFound;
