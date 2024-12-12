const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-dark p-8">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold">
              Merhaba, Ben{" "}
              <span className="heading-gradient">Kudret Kırbıyık</span>
            </h1>
            <p className="text-xl md:text-2xl text-body-color">
              Full Stack Developer
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#portfolio" className="btn-primary">
                Portfolyo
              </a>
              <a href="#contact" className="btn-primary">
                İletişime Geç
              </a>
            </div>
          </div>
          <div className="hidden md:flex md:justify-center md:items-center">
            {/* Hero image or animation can be added here */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
