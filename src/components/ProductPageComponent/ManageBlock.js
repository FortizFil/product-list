import React from "react";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import TitleFilter from "./Filters/TitleFilter";
import DateToFilter from "./Filters/DateToFilter";
import PriceToFilter from "./Filters/PriceToFilter";
import DateFromFilter from "./Filters/DateFromFilter";
import PriceFromFilter from "./Filters/PriceFromFilter";

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
  gap: "15px",
}));

const Title = styled(Typography)(() => ({
  fontSize: "18px",
  fontWeight: "bold",
}));

const ManageBlock = () => {
  return (
    <BlockWrap>
      <Box>
        <Title>Title</Title>
        <TitleFilter />
      </Box>
      <Box>
        <Title>Price</Title>
        <SubWrap>
          <PriceFromFilter />
          <PriceToFilter />
        </SubWrap>
      </Box>
      <Box>
        <Title>Date</Title>
        <SubWrap>
          <DateFromFilter />
          <DateToFilter />
        </SubWrap>
      </Box>
    </BlockWrap>
  );
};

export default ManageBlock;
