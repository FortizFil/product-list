import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";

import ProductCard from "./ProductCard";
import ManageBlock from "./ManageBlock";
import { useGetProductsQuery } from "../../services/AuthAPI";

const PageWrap = styled(Box)(() => ({
  height: "100vh",
  padding: "20px",
}));

const CardsWrap = styled(Box)(() => ({
  width: "800px",
  display: "flex",
  flexWrap: "wrap",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "10px",
  gap: "15px",
  boxSizing: "border-box",
}));

const StuledPagination = styled(Pagination)(() => ({
  marginTop: "20px",
  marginLeft: "auto",
  marginRight: "auto",
}));

const ProductPageComponent = () => {
  const [pages, setPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState(null);
  const state = useSelector((state) => state.filters);
  const { data,refetch } = useGetProductsQuery({ page: currentPage, ...state });

  useEffect(() => {
    if (data) {
      setPages(data.last_page);
      setProducts(data.data);
    }
  }, [data]);

  const handleChangePage = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <PageWrap>
      <ManageBlock refetch={refetch} />
      {products && (
        <>
          <CardsWrap>
            {products.map((el) => (
              <ProductCard key={el.id} product={el} />
            ))}
            <StuledPagination
              count={pages}
              page={currentPage}
              onChange={handleChangePage}
              color="primary"
            />
          </CardsWrap>
        </>
      )}
    </PageWrap>
  );
};

export default ProductPageComponent;
