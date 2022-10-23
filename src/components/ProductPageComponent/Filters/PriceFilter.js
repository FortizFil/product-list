import React, { useCallback, memo } from "react";
import { useDispatch, useSelector } from "react-redux";

import { styled } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";

import { changePriceFrom, changePriceTo } from "../../../redux/filters";

const PriceInput = styled(OutlinedInput)(() => ({
  width: "150px",

  "& input": {
    padding: "5px 10px !important",
  },
}));

const PriceFilter = memo(({ itsFrom }) => {
  const { priceFrom, priceTo } = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  const handleChange = useCallback(
    (e) => {
      itsFrom
        ? dispatch(changePriceFrom(e.target.value))
        : dispatch(changePriceTo(e.target.value));
    },
    [itsFrom, dispatch]
  );

  return (
    <PriceInput
      id={itsFrom ? "priceFrom" : "priceTo"}
      type="number"
      value={itsFrom ? priceFrom : priceTo}
      onChange={handleChange}
      placeholder={itsFrom ? "Price from" : "Price to"}
    />
  );
});
export default PriceFilter;
