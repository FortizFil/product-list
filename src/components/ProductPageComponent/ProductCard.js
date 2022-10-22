import React from "react";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const Card = styled(Box)(() => ({
  outline: "1px solid #1976d2",
  borderRadius: "4px",
  backgroundColor: "#1976d2",
  color: "white",
  textAlign: "center",
}));

const Price = styled(Typography)(() => ({
  fontSize: "12px",
}));

const ProductCard = ({ product }) => {
  return (
    <Card>
      <img
        src={product.thumbnail}
        alt={product.title}
        height="250px"
        width="250px"
      />
      <Box sx={{}}>
        <Typography>{product.title}</Typography>
        <Price>Price: {product.price}</Price>
      </Box>
    </Card>
  );
};

export default ProductCard;
