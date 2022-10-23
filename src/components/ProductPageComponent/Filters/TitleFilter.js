import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import { styled } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";

import { changeTitle } from "../../../redux/filters";

const NameInput = styled(OutlinedInput)(() => ({
  width: "300px",

  "& input": {
    padding: "5px 10px !important",
  },
}));

const TitleFilter = () => {
  const { title } = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  const handleChange = useCallback(
    (e) => {
      dispatch(changeTitle(e.target.value));
    },
    [dispatch]
  );

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
