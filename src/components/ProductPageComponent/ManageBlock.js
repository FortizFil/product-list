import React from "react";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import PriceFilter from "./Filters/PriceFilter";
import DateFilter from "./Filters/DateFilter";
import TitleFilter from "./Filters/TitleFilter";

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
          <PriceFilter itsFrom={true} />
          <PriceFilter itsFrom={false} />
        </SubWrap>
      </Box>
      <Box>
        <Title>Date</Title>
        <SubWrap>
          <DateFilter itsFrom={true} />
          <DateFilter itsFrom={false} />
        </SubWrap>
      </Box>
    </BlockWrap>
  );
};

export default ManageBlock;
