import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Form, Formik } from "formik";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormControlLabel from "@mui/material/FormControlLabel";

import { loginSchema } from "./validation";
import { useLoginMutation } from "../../../services/AuthAPI";
import { saveUserInfo } from "../../../redux/auth";

const FormWrap = styled(Box)(() => ({
  width: "400px",
  padding: "20px",
  boxSizing: "border-box",
  border: "1px solid #1976d2",
  borderRadius: "6px",
}));

const FormField = styled(Box)(() => ({
  width: "100%",
  marginBottom: "10px",
}));

const Label = styled(InputLabel)(() => ({
  marginBottom: "5px",
  color: "black",
  fontSize: "16px",
  fontWeight: "bold",
}));

const Input = styled(OutlinedInput)(() => ({
  width: "100%",

  "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    padding: "5px 10px",
  },
  "& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input": {
    padding: "5px 10px",
  },
}));

const StyledCheckbox = styled(Checkbox)(() => ({
  padding: 0,
  marginRight: "5px",
}));

const StyledFormControlLabel = styled(FormControlLabel)(() => ({
  marginLeft: 0,
}));

const ManageBlock = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
}));

const HelperText = styled(Typography)(() => ({
  fontSize: "10px",
  color: "red",
}));

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [login] = useLoginMutation();
  const dispatch = useDispatch();
  const handleMouseDownPassword = (e) => {
    e.preventDefault();
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const submitForm = async (values) => {
    try {
      const response = await login(values);
      dispatch(saveUserInfo(response.data));
      if (values.rememberMe) {
        localStorage.setItem("token", response.data.access_token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormWrap>
      <Formik
        initialValues={{
          email: "",
          password: "",
          rememberMe: true,
        }}
        validationSchema={loginSchema}
        onSubmit={submitForm}
      >
        {({
          values: { email, password, rememberMe },
          setFieldValue,
          errors,
          touched,
        }) => (
          <Form>
            <FormField>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="text"
                error={errors.email && touched.email}
                value={email}
                placeholder={"Enter your email"}
                onChange={(e) => setFieldValue("email", e.target.value)}
              />
              {errors.email && touched.email ? (
                <HelperText>{errors.email}</HelperText>
              ) : null}
            </FormField>
            <FormField>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                error={errors.password && touched.password}
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder={"Enter your email"}
                onChange={(e) => setFieldValue("password", e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {errors.password && touched.password ? (
                <HelperText>{errors.password}</HelperText>
              ) : null}
            </FormField>
            <ManageBlock>
              <StyledFormControlLabel
                control={
                  <StyledCheckbox
                    size="small"
                    checked={rememberMe}
                    onChange={() => setFieldValue("rememberMe", !rememberMe)}
                  />
                }
                label="Remember me"
              />
              <Button type="submit" variant="contained">
                Login
              </Button>
            </ManageBlock>
          </Form>
        )}
      </Formik>
    </FormWrap>
  );
};

export default LoginForm;
