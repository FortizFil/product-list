import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { styled } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";

import { changePriceFrom } from "../../../redux/filters";

const PriceInput = styled(OutlinedInput)(() => ({
  width: "150px",

  "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    padding: "5px 10px",
  },
}));

const PriceFromFilter = () => {
  const { priceFrom } = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changePriceFrom(e.target.value));
    sessionStorage.setItem("price-from", e.target.value);
  };

  return (
    <PriceInput
      id="priceFrom"
      type="number"
      value={priceFrom}
      onChange={handleChange}
      placeholder={"Price from"}
    />
  );
};
export default PriceFromFilter;
