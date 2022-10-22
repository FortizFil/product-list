import React, { useState, forwardRef } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { changeFilters } from "../../redux/filters";

const BlockWrap = styled(Box)(() => ({
  width: "1200px",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "15px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "end",
  boxSizing: "border-box",
  textAlign: "center",
}));

const SubWrap = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  gap: "10px",
}));

const Title = styled(Typography)(() => ({
  fontSize: "18px",
  fontWeight: "bold",
}));

const NameInput = styled(OutlinedInput)(() => ({
  width: "300px",

  "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    padding: "5px 10px",
  },
}));

const PriceInput = styled(OutlinedInput)(() => ({
  width: "150px",

  "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    padding: "5px 10px",
  },
}));

const DateInput = styled(OutlinedInput)(() => ({
  width: "150px",

  "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
    padding: "5px 5px",
  },
}));

const StyledButton = styled(Button)(() => ({
  padding: "4px",
}));

const ManageBlock = ({ refetch }) => {
  const [title, setTitle] = useState("");
  const [priceFrom, setPriceFrom] = useState("");
  const [priceTo, setPriceTo] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(
      changeFilters({
        title,
        priceFrom,
        priceTo,
        startDate: startDate ? moment(startDate).format("YYYY-MM-DD") : "",
        endDate: endDate ? moment(endDate).format("YYYY-MM-DD") : "",
      })
    );
  };

  const handleResetClick = () => {
    setTitle("");
    setPriceFrom("");
    setPriceTo("");
    setStartDate(null);
    setEndDate(null);
    dispatch(
      changeFilters({
        title: "",
        priceFrom: "",
        priceTo: "",
        startDate: "",
        endDate: "",
      })
    );
  };

  const showResetButton = () => {
    return (
      title.length > 0 ||
      priceFrom.length > priceTo.length > 0 ||
      startDate ||
      endDate
    );
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
    <BlockWrap>
      <Box>
        <Title>Title</Title>
        <NameInput
          id="name"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder={"Enter product name"}
        />
      </Box>
      <Box>
        <Title>Price</Title>
        <SubWrap>
          <PriceInput
            id="priceFrom"
            type="number"
            value={priceFrom}
            onChange={(e) => setPriceFrom(e.target.value)}
            placeholder={"Price from"}
          />
          <PriceInput
            id="priceTo"
            type="number"
            value={priceTo}
            onChange={(e) => setPriceTo(e.target.value)}
            placeholder={"Price to"}
          />
        </SubWrap>
      </Box>
      <Box>
        <Title>Date</Title>
        <SubWrap>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            maxDate={new Date()}
            placeholderText="Date from"
            customInput={<DateCustomInput />}
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            minDate={startDate}
            maxDate={new Date()}
            placeholderText="Date to"
            customInput={<DateCustomInput />}
          />
        </SubWrap>
      </Box>
      <SubWrap>
        <StyledButton type="button" variant="contained" onClick={handleSubmit}>
          Apply
        </StyledButton>
        {showResetButton() && (
          <StyledButton
            type="button"
            variant="contained"
            onClick={handleResetClick}
          >
            Reset
          </StyledButton>
        )}
      </SubWrap>
    </BlockWrap>
  );
};

export default ManageBlock;
