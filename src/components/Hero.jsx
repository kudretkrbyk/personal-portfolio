const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-dark p-8 w-full"
    >
      <div className="container flex w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center w-full">
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
        <div>
          <div className="w-full ">
            <img
              className="w-[600px] h-full object-cover object-center animate-border-morph"
              src="/assets/kudret_kırbıyık.png"
              alt="Morphing Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
