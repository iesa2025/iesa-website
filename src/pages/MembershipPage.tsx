
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Target, Award, Star } from "lucide-react";
import { Link } from "react-router-dom";

const MembershipPage = () => {
  const benefits = [
    {
      icon: Users,
      title: "Community",
      description: "Connect with like-minded Muslim engineering students across Telangana."
    },
    {
      icon: Target,
      title: "Growth",
      description: "Develop leadership skills and professional competencies."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Access to mentorship, scholarships, and academic support."
    },
    {
      icon: Star,
      title: "Impact",
      description: "Make a difference through community service and da'wah."
    }
  ];

  return (
    <div className="min-h-screen bg-hero-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="animate-fade-in-up">
            <img 
              src="/iesalogo.png" 
              alt="IESA Logo" 
              className="w-24 h-24 mx-auto mb-6 drop-shadow-2xl"
            />
            <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-4">
              Join Our Community
            </h1>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto">
              Be part of a movement that empowers Muslim engineering students to excel academically and serve their community.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="text-center animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="font-display font-semibold text-xl text-primary mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center animate-fade-in-up">
            <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white">
              <h3 className="text-3xl font-display font-bold mb-4">
                Ready to Join IESA?
              </h3>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Take the first step towards academic excellence and community service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://shorturl.at/PNLAF" target="_blank" rel="noopener noreferrer" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  Register Now
                </a>
                <Link to="/departments" className="border-2 border-white text-white hover:bg-white hover:text-primary px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                  Explore Departments
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default MembershipPage;
