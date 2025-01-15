import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form gönderme işlemi burada yapılacak
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: "📱",
      title: "Telefon",
      content: "+90 553 534 25 34",
      link: "tel:+905535342534", // Telefon numarası için `tel:` protokolü
    },
    {
      icon: "📧",
      title: "Email",
      content: "kudretkrbyk@gmail.com",
      link: "mailto:kudretkrbyk@gmail.com", // E-posta için `mailto:` protokolü
    },
    {
      icon: "📍",
      title: "Konum",
      content: "Kocaeli, Türkiye",
      link: "#", // Konum için tıklanabilir bir özellik gerekmeyebilir
    },
  ];

  return (
    <section id="contact" className="section bg-dark">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Benimle <span className="heading-gradient">İletişime Geçin</span>
          </h2>
          <p className="text-body-color max-w-2xl mx-auto">
            Projeleriniz için benimle iletişime geçebilirsiniz
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="card flex items-center p-6">
                  <div className="text-4xl mr-4">{info.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {info.title}
                    </h3>
                    <p className="text-body-color">
                      {/* Tıklanabilir link */}
                      <a
                        href={info.link}
                        target={
                          info.link.startsWith("http") ? "_blank" : "_self"
                        }
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        {info.content}
                      </a>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="card">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="İsminiz"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-dark border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Adresiniz"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-dark border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
                    required
                  />
                </div>
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Konu"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-dark border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Mesajınız"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full bg-dark border border-border-color rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary resize-none"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-primary w-full text-center">
                Mesaj Gönder
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
