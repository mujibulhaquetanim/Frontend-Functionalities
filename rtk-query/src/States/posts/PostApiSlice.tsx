import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post } from "../../types/posts";

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
      getPosts: builder.query<Post[], { limit: number; offset: number }>({
        // Post[] is the return type of the query & {limit: number, offset: number} is the argument type of the query that will be sent to the API.
        query: ({ limit, offset }) =>
          `/posts?_limit=${limit}&_offset=${offset}`, // query is a function that returns an object that represents the API endpoint, /posts is the API endpoint of the baseUrl
      }),
      createPost: builder.mutation<Post, Omit<Post, "id">>({
        // Post is the return type of the mutation & Omit<Post, "id"> is the argument type of the mutation that will be sent to the API. omitting the id field will allow the API to generate an id for the post.
        query: (post) => ({
          url: "/posts",
          method: "POST",
          body: post,
        }),
      }),
    };
  },
});

export const { useGetPostsQuery, useCreatePostMutation } = postApiSlice;
