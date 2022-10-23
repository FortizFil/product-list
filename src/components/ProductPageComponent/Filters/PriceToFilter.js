import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { styled } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";

import { changePriceTo } from "../../../redux/filters";

const PriceInput = styled(OutlinedInput)(() => ({
  width: "150px",

  "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    padding: "5px 10px",
  },
}));

const PriceToFilter = () => {
  const { priceTo } = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changePriceTo(e.target.value));
    sessionStorage.setItem("price-to", e.target.value);
  };

  return (
    <PriceInput
      id="priceTo"
      type="number"
      value={priceTo}
      onChange={handleChange}
      placeholder={"Price to"}
    />
  );
};
export default PriceToFilter;
