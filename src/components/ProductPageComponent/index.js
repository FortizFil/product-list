import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

import ProductCard from "./ProductCard";
import { useGetProductsQuery } from "../../services/AuthAPI";

const PageWrap = styled(Box)(() => ({
  height: "100vh",
}));

const CardsWrap = styled(Box)(() => ({
  width: "850px",
  display: "flex",
  flexWrap: "wrap",
  marginLeft: "auto",
  marginRight: "auto",
  padding:"10px",
  gap: "15px",
}));

const ProductPageComponent = () => {
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState(null);
  const { data } = useGetProductsQuery(currentPage);

  useEffect(() => {
    if (data) {
      setPages(data.last_page);
      setProducts(data.data);
    }
  }, [data]);

  return (
    <PageWrap>
      {products && (
        <CardsWrap>
          {products.map((el) => (
            <ProductCard key={el.id} product={el} />
          ))}
        </CardsWrap>
      )}
    </PageWrap>
  );
};

export default ProductPageComponent;
