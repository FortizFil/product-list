import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AuthAPI = createApi({
  reducerPath: "AuthAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://dummy-api.d0.acom.cloud",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      // If we have a token set in state, let's assume that we should be passing it.
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Auth"],
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (values) => ({
        url: `/api/auth/login?email=${values.email}&password=${values.password}`,
        method: "POST",
      }),
    }),
    providesTags: ["Auth"],
  }),
});

export const { useLoginMutation } = AuthAPI;
