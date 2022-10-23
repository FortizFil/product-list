import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { styled } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";

import { changeTitle } from "../../../redux/filters";

const NameInput = styled(OutlinedInput)(() => ({
  width: "300px",

  "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    padding: "5px 10px",
  },
}));

const TitleFilter = () => {
  const { title } = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeTitle(e.target.value));
    sessionStorage.setItem("title", e.target.value);
  };

  return (
    <NameInput
      id="name"
      type="text"
      value={title}
      onChange={handleChange}
      placeholder={"Enter product name"}
    />
  );
};
export default TitleFilter;
