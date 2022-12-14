import React, { memo } from "react";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

const Card = styled(Box)(() => ({
  outline: "2px solid #1976d2",
  backgroundColor: "#1976d2",
  color: "white",
  textAlign: "center",
}));

const Price = styled(Typography)(() => ({
  fontSize: "12px",
}));

const ProductCard = memo(({ product }) => {
  return (
    <Card>
      <img
        src={product.thumbnail}
        alt={product.title}
        height="250px"
        width="250px"
      />
      <Box>
        <Typography>{product.title}</Typography>
        <Price>Price: {product.price}</Price>
      </Box>
    </Card>
  );
});

export default ProductCard;
