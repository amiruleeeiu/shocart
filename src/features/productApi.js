import { apiSlice } from "./app/appSlice";

export const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (str) => `/products${str}`,
    }),
  
  }),
});

export const {
  useGetProductsQuery,

} = productApi;
