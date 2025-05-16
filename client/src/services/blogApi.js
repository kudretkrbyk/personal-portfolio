import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const blogApi = createApi({
  reducerPath: "blogApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL + "/blogs",
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth?.user?.token;
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ["Blogs"],
  endpoints: (builder) => ({
    // TÜM BLOGLARI GETİR
    getAllBlogs: builder.query({
      query: () => "/",
      providesTags: ["Blogs"],
    }),

    // SLUG İLE TEK BLOG GETİR
    getBlogBySlug: builder.query({
      query: (slug) => `/slug/${slug}`,
    }),

    // ID İLE TEK BLOG GETİR (admin paneli için)
    getBlogById: builder.query({
      query: (id) => `/${id}`,
    }),

    // BLOG EKLE (multipart destekli)
    addBlog: builder.mutation({
      query: (formData) => ({
        url: "/",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Blogs"],
    }),

    // BLOG GÜNCELLE (id parametresi dışında formData gerekir)
    updateBlog: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/${id}`,
        method: "PUT",
        body: formData,
      }),
      invalidatesTags: ["Blogs"],
    }),

    // BLOG SİL
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Blogs"],
    }),
  }),
});

export const {
  useGetAllBlogsQuery,
  useGetBlogBySlugQuery,
  useGetBlogByIdQuery,
  useAddBlogMutation,
  useUpdateBlogMutation,
  useDeleteBlogMutation,
} = blogApi;
