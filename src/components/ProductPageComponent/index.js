import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment/moment";

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";

import ProductCard from "./ProductCard";
import ManageBlock from "./ManageBlock";
import useDebounce from "../../utils/useDebounce";
import { useGetProductsQuery } from "../../services/API";
import { changeCurrentPage } from "../../redux/filters";
import Loader from "../Loader";

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

  const { currentPage, title, priceFrom, priceTo, startDate, endDate } =
    useSelector((state) => state.filters);

  const { data, isLoading } = useGetProductsQuery({
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
