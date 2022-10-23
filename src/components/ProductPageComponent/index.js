import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment/moment";
import qs from "qs";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";

import Loader from "../Loader";
import { PRODUCT_PAGE } from "../../constans/route";
import ProductCard from "./ProductCard";
import ManageBlock from "./ManageBlock";
import useDebounce from "../../utils/useDebounce";
import { useGetProductsQuery } from "../../services/API";
import { changeCurrentPage } from "../../redux/filters";

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

const PaginationWrap = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "20px",
}));

const NoDataWrap = styled(Box)(() => ({
  width: "100%",
  marginTop: "30px",
  textAlign: "center",
}));

const NoDataText = styled(Typography)(() => ({
  fontSize: "30px",
  fontWeight: "bold",
  color: "gainsboro",
}));

const ProductPageComponent = () => {
  const [pages, setPages] = useState(1);
  const [products, setProducts] = useState(null);

  const navigate = useNavigate();

  const { currentPage, title, priceFrom, priceTo, startDate, endDate } =
    useSelector((state) => state.filters);

  const { data, isLoading } = useGetProductsQuery({
    page: currentPage,
    title: useDebounce(title, 500),
    priceFrom: useDebounce(priceFrom, 500),
    priceTo: useDebounce(priceTo, 500),
    startDate: startDate ? moment(startDate).format("YYYY-MM-DD") : "",
    endDate: endDate ? moment(endDate).format("YYYY-MM-DD") : "",
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const params = qs.stringify({
      title,
      priceFrom,
      priceTo,
      startDate,
      endDate,
    });
    navigate(`${PRODUCT_PAGE}/?${params}`);
  }, [currentPage, title, priceFrom, priceTo, startDate, endDate, navigate]);

  useEffect(() => {
    if (data) {
      setPages(data.last_page);
      setProducts(data.data);
    }
  }, [data]);

  const handleChangePage = useCallback(
    (event, value) => {
      dispatch(changeCurrentPage(value));
    },
    [dispatch]
  );

  if (isLoading) {
    return <Loader />;
  }

  return (
    <PageWrap>
      <ManageBlock />
      {products && (
        <>
          {products.length > 0 ? (
            <>
              <CardsWrap>
                {products.map((el) => (
                  <ProductCard key={el.id} product={el} />
                ))}
              </CardsWrap>
              <PaginationWrap>
                <Pagination
                  count={pages}
                  page={currentPage}
                  onChange={handleChangePage}
                  color="primary"
                />
              </PaginationWrap>
            </>
          ) : (
            <NoDataWrap>
              <NoDataText>No data:(</NoDataText>
            </NoDataWrap>
          )}
        </>
      )}
    </PageWrap>
  );
};

export default ProductPageComponent;
