import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

// createApi is a function that takes in 3 arguments:
// 1. reducerPath: a string that represents the name of the slice in the store
// 2. baseQuery: a function that takes in 2 arguments:
// 2.1. baseUrl: a string that represents the base URL of the API endpoint
// 2.2. prepareHeaders: a function that takes in 1 argument:
// 3. endpoints: a function that takes in 1 argument:
// 3.1. query: a function that returns an object that represents the API endpoint
// 3.2. mutation: a function that returns an object that represents the API endpoint

export const postApiSlice = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => {
    return {
      getPosts: builder.query({
        query: () => "/posts", // query is a function that returns an object that represents the API endpoint, /posts is the API endpoint of the baseUrl
      }),
    };
  },
});
