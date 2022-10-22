import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { PRODUCT_PAGE } from "../../constans/route";
import LoginPageComponent from "../../components/LoginPageComponent";
import { useGetUserQuery } from "../../services/AuthAPI";

const LoginPage = () => {
  const { data } = useGetUserQuery();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      navigate(PRODUCT_PAGE);
    }
  }, [data, navigate]);

  return <LoginPageComponent />;
};

export default LoginPage;
