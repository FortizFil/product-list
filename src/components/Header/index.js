import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LogoutIcon from "@mui/icons-material/Logout";
import { saveUserInfo } from "../../redux/auth";
import { clearFilters } from "../../redux/filters";
import { useLogOutMutation } from "../../services/API";

const MainWrap = styled(Box)(() => ({
  width: "100%",
  height: "70px",
  backgroundColor: "#1976d2",
}));

const SubWrap = styled(Box)(() => ({
  width: "1200px",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "15px",
  display: "flex",
  alignItems: "center",
  justifyContent: "end",
  gap: "40px",
}));

const LogOutButton = styled(IconButton)(() => ({
  color: "white",
}));

const UserInfoBlock = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
}));

const UserName = styled(Typography)(() => ({
  color: "white",
}));

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [logOut] = useLogOutMutation();

  const handleLogOut = useCallback(() => {
    try {
      logOut();
      localStorage.removeItem("token");
      dispatch(saveUserInfo({ access_token: null, user: null }));
      dispatch(clearFilters());
    } catch (error) {
      console.log(error);
    }
  }, [logOut, dispatch]);

  return (
    <MainWrap>
      <SubWrap>
        <UserInfoBlock>
          <Avatar alt={user.name} src={user.profile_image} />
          <UserName>{user.name}</UserName>
        </UserInfoBlock>
        <LogOutButton onClick={handleLogOut}>
          <LogoutIcon />
        </LogOutButton>
      </SubWrap>
    </MainWrap>
  );
};

export default Header;
