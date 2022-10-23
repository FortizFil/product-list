import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { styled } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";

import { changePriceFrom, changePriceTo } from "../../../redux/filters";

const PriceInput = styled(OutlinedInput)(() => ({
  width: "150px",

  "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    padding: "5px 10px",
  },
}));

const PriceFilter = ({ itsFrom }) => {
  const { priceFrom, priceTo } = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    itsFrom
      ? dispatch(changePriceFrom(e.target.value))
      : dispatch(changePriceTo(e.target.value));
    itsFrom
      ? sessionStorage.setItem("price-from", e.target.value)
      : sessionStorage.setItem("price-to", e.target.value);
  };

  return (
    <PriceInput
      id={itsFrom ? "priceFrom" : "priceTo"}
      type="number"
      value={itsFrom ? priceFrom : priceTo}
      onChange={handleChange}
      placeholder={itsFrom ? "Price from" : "Price to"}
    />
  );
};
export default PriceFilter;
