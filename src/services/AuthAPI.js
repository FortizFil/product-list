import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AuthAPI = createApi({
  reducerPath: "AuthAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://dummy-api.d0.acom.cloud",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token || localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Auth", "Products"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (values) => ({
        url: `/api/auth/login?email=${values.email}&password=${values.password}`,
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
    }),
    refreshToken: builder.mutation({
      query: () => ({
        url: `/api/auth/refresh`,
        method: "POST",
      }),
      invalidatesTags: ["Auth"],
    }),
    getUser: builder.query({
      query: () => "/api/auth/user-profile",
      providesTags: ["Auth"],
    }),
    getProducts: builder.query({
      query: (values) => `/api/products?page=${values.page}`,
      providesTags: ["Products"],
    }),
  }),
});

export const { useLoginMutation, useGetProductsQuery, useGetUserQuery, useRefreshTokenMutation } =
  AuthAPI;
