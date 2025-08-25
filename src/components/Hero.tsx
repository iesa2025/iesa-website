
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-hero-bg">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 islamic-pattern"></div>
      
      {/* Floating Geometric Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary/20 rotate-45 animate-float"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-secondary/20 rotate-12 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 border-2 border-gold-accent/30 rounded-full animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10 pt-20">
        <div className="animate-fade-in-up">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/de185688-6a71-4f04-b4f3-a00f468dc4aa.png" 
              alt="IESA Logo" 
              className="w-32 h-32 mx-auto mb-6 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
            />
            <h1 className="font-display text-5xl md:text-7xl font-bold text-primary mb-4">
              IESA
            </h1>
            <p className="text-xl md:text-2xl text-primary/80 font-medium mb-2">
              Initiative of Engineers for Service & Academics
            </p>
          </div>

          {/* Tagline */}
          <div className="mb-12">
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold-accent to-transparent mx-auto mb-8"></div>
            <h2 className="text-2xl md:text-4xl font-display font-semibold text-primary mb-6">
              Empowering Engineers with
            </h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-xl md:text-2xl font-semibold">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full">Knowledge</span>
              <span className="px-4 py-2 bg-secondary/20 text-primary rounded-full">Faith</span>
              <span className="px-4 py-2 bg-accent text-primary rounded-full">Service</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/about" className="bg-primary text-white hover:bg-primary/90 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Discover Our Mission
            </a>
            <a href="/membership" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
              Join IESA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
