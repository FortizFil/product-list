import React, { forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import CancelIcon from "@mui/icons-material/Cancel";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { changeStartDate } from "../../../redux/filters";

const MainWrap = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  position: "relative",
}));

const DateInput = styled(OutlinedInput)(() => ({
  width: "150px",

  "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    padding: "5px 5px",
  },
}));

const CancelButton = styled(IconButton)(() => ({
  position: "absolute",
  right: 0,
}));

const DateFromFilter = () => {
  const { startDate } = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  const handleChange = (date) => {
    dispatch(changeStartDate(moment(date).format("YYYY-MM-DD")));
    sessionStorage.setItem("date-from", moment(date).format("YYYY-MM-DD"));
  };

  const handleResetDate = () => {
    dispatch(changeStartDate(""));
    sessionStorage.setItem("date-from", "");
  };

  const DateCustomInput = forwardRef(({ value, onClick, placeholder }, ref) => (
    <DateInput
      onClick={onClick}
      ref={ref}
      value={value}
      placeholder={placeholder}
    />
  ));

  return (
    <MainWrap>
      <DatePicker
        selected={startDate ? new Date(startDate) : startDate}
        onChange={handleChange}
        maxDate={new Date()}
        placeholderText="Date from"
        customInput={<DateCustomInput />}
      />
      {startDate && (
        <CancelButton color="primary" onClick={handleResetDate}>
          <CancelIcon />
        </CancelButton>
      )}
    </MainWrap>
  );
};
export default DateFromFilter;
