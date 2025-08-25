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
          <h1 className="font-display text-5xl md:text-7xl font-bold text-primary mb-4">
            Welcome to IESA
          </h1>
          <h2 className="text-2xl md:text-3xl font-display font-semibold text-secondary mb-6">
            Initiative of Engineers for Service and Academics
          </h2>
          <p className="text-xl md:text-2xl text-primary/80 max-w-4xl mx-auto mb-8 leading-relaxed">
            Empowering <strong>Muslim engineering students</strong> across <strong>Telangana</strong> through 
            <strong> academic excellence</strong>, <strong>faith-based learning</strong>, 
            <strong> skill development</strong>, and <strong>impactful community service</strong>. 
            Building a future-ready generation grounded in <strong>Islamic values</strong> and equipped with <strong>global competencies</strong>.
          </p>
          
          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="font-semibold text-primary text-lg mb-2">Muslim Engineering Community</h3>
              <p className="text-primary/80">Connect with like-minded Muslim engineers across Telangana</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="font-semibold text-primary text-lg mb-2">Academic Excellence</h3>
              <p className="text-primary/80">Mentorship, scholarships, and engineering career support</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="font-semibold text-primary text-lg mb-2">Islamic Values</h3>
              <p className="text-primary/80">Faith-based learning and character development</p>
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
