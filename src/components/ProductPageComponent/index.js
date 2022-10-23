import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment/moment";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";

import ProductCard from "./ProductCard";
import ManageBlock from "./ManageBlock";
import { useGetProductsQuery } from "../../services/API";
import { changeCurrentPage } from "../../redux/filters";
import useDebounce from "../../utils/useDebounce";

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
  const [products, setProducts] = useState(null);

  const { currentPage, title, priceFrom, priceTo, startDate, endDate } =
    useSelector((state) => state.filters);

  const { data } = useGetProductsQuery({
    page: currentPage,
    title: useDebounce(title, 500),
    priceFrom: useDebounce(priceFrom, 500),
    priceTo: useDebounce(priceTo, 500),
    startDate: startDate,
    endDate: endDate ? moment(endDate).format("YYYY-MM-DD") : "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    if (data) {
      setPages(data.last_page);
      setProducts(data.data);
    }
  }, [data]);

  const handleChangePage = (event, value) => {
    dispatch(changeCurrentPage(value));
  };

  return (
    <PageWrap>
      <ManageBlock />
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
