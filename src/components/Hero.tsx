import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-bg">
      {/* Islamic Pattern Background */}
      <div className="absolute inset-0 islamic-pattern"></div>

      <div className="container mx-auto px-4 text-center relative z-10 pt-20">
        <div className="animate-fade-in-up">
          <img 
            src="/iesalogo.png" 
            alt="IESA Logo - Initiative of Engineers for Service and Academics" 
            className="w-24 h-24 mx-auto mb-6 drop-shadow-2xl"
          />
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary mb-8">
            Empowering Engineers with
          </h1>
          
          {/* Three Pill Capsules */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
            <div className="px-6 py-3 bg-blue-100 text-primary rounded-full font-semibold text-lg shadow-md">
              Knowledge
            </div>
            <div className="px-6 py-3 bg-yellow-100 text-primary rounded-full font-semibold text-lg shadow-md">
              Faith
            </div>
            <div className="px-6 py-3 bg-blue-100 text-primary rounded-full font-semibold text-lg shadow-md">
              Service
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/about" className="bg-primary text-white hover:bg-primary/90 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Discover Our Mission
            </Link>
            <a href="https://shorturl.at/PNLAF" target="_blank" rel="noopener noreferrer" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
              Join IESA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
