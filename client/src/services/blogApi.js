import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL + "/blogs",
  }),
  tagTypes: ["Blogs"],
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => "/",
      providesTags: ["Blogs"],
    }),
    getBlogById: builder.query({
      query: (id) => `/${id}`,
    }),
    addBlog: builder.mutation({
      query: (blogData) => ({
        url: "/",
        method: "POST",
        body: blogData,
      }),
      invalidatesTags: ["Blogs"],
    }),
  }),
});

export const { useGetAllBlogsQuery, useGetBlogByIdQuery, useAddBlogMutation } =
  blogApi;
