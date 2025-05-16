import { useParams } from "react-router-dom";
import { useGetBlogBySlugQuery } from "../services/blogApi";
import { Helmet } from "react-helmet-async";

const API_URL = import.meta.env.VITE_IMG_URL;

const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function BlogDetail() {
  const { slug } = useParams();
  console.log("blog detail,", slug);
  const { data: blog, isLoading, isError } = useGetBlogBySlugQuery(slug);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark text-white flex justify-center items-center">
        <p>Yükleniyor...</p>
      </div>
    );
  }

  if (isError || !blog) {
    return (
      <div className="min-h-screen bg-dark text-white flex justify-center items-center">
        <p>Blog bulunamadı.</p>
      </div>
    );
  }

  return (
    <section className="bg-dark py-20">
      <Helmet>
        <title>{`${blog.title} | Kudret Kırbıyık`}</title>
        <meta name="description" content={blog.content?.slice(0, 150)} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.content?.slice(0, 150)} />
        <meta property="og:image" content={`${API_URL}${blog.image}`} />
      </Helmet>

      <div className="container max-w-3xl mx-auto px-6">
        <img
          src={`${API_URL}${blog.image}`}
          alt={blog.title}
          className="rounded-lg mb-8 w-full h-64 object-cover"
        />
        <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
          {blog.title}
        </h1>
        <p className="text-body-color text-sm mb-6">
          Yayın Tarihi: {formatDate(blog.publishedAt)}
        </p>
        <div className="text-gray-300 leading-relaxed whitespace-pre-line">
          {blog.content}
        </div>
      </div>
    </section>
  );
}
