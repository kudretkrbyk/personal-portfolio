const Blog = () => {
  const blogPosts = [
    {
      title: 'Modern Web Geliştirme Trendleri',
      description: 'Web geliştirme dünyasındaki son trendler ve yenilikler hakkında detaylı bir inceleme.',
      date: '10 Aralık 2023',
      image: '/blog1.jpg',
    },
    {
      title: 'React Performans Optimizasyonu',
      description: 'React uygulamalarında performansı artırmak için kullanabileceğiniz teknikler ve best practice\'ler.',
      date: '5 Aralık 2023',
      image: '/blog2.jpg',
    },
    {
      title: 'Backend Mimarileri',
      description: 'Modern backend mimarilerinin karşılaştırmalı analizi ve kullanım senaryoları.',
      date: '1 Aralık 2023',
      image: '/blog3.jpg',
    },
  ];

  return (
    <section id="blog" className="section bg-dark">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Son <span className="heading-gradient">Blog</span> Yazılarım
          </h2>
          <p className="text-body-color max-w-2xl mx-auto">
            Teknoloji ve yazılım dünyasındaki deneyimlerimi ve öğrendiklerimi paylaştığım blog yazılarım
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="card group">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <span className="text-primary text-sm font-medium mb-2 block">
                  {post.date}
                </span>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-body-color mb-4">
                  {post.description}
                </p>
                <a
                  href="#"
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
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
