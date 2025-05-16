import { useGetAllBlogsQuery } from "../services/blogApi";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
const API_URL = import.meta.env.VITE_IMG_URL;

const formatDate = (dateStr) =>
  new Date(dateStr).toLocaleDateString("tr-TR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

export default function Blog() {
  const { data: blogs = [], isLoading, isError } = useGetAllBlogsQuery();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark text-white flex justify-center items-center">
        <p>Yükleniyor...</p>
      </div>
    );
  }

  return (
    <section id="blog" className="section bg-dark">
      <Helmet>
        <title>Blog Yazıları | Kudret Kırbıyık</title>
        <meta
          name="description"
          content="Kudret Kırbıyık'ın yazılım, web geliştirme ve teknoloji üzerine yazdığı güncel blog yazılarını keşfedin."
        />
        <meta property="og:title" content="Blog Yazıları | Kudret Kırbıyık" />
        <meta
          property="og:description"
          content="Geliştirme deneyimleri, teknik ipuçları ve güncel teknolojiler hakkında içerikler."
        />
        <meta property="og:image" content="/seo-blog-thumbnail.jpg" />
      </Helmet>

      <div className="container">
        <div className="flex flex-col items-center pb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-white pb-4">
            Son <span className="heading-gradient">Blog</span> Yazılarım
          </h1>
          <p className="text-body-color max-w-2xl text-center">
            Teknoloji ve yazılım dünyasındaki deneyimlerimi ve öğrendiklerimi
            paylaştığım blog yazılarım
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((post, index) => (
            <article key={index} className="card flex flex-col group">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={`${API_URL}${post.image}`}
                  alt={post.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col space-y-2">
                <span className="text-primary text-sm font-medium">
                  {formatDate(post.publishedAt)}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-body-color line-clamp-3">
                  {post.content?.slice(0, 120)}...
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary hover:text-white transition-colors"
                >
                  Devamını Oku
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
