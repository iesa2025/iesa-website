
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, BookOpen, Users, Award, Handshake } from "lucide-react";

const AboutPage = () => {
  const values = [
    { 
      icon: Heart, 
      title: "Ikhlaas", 
      description: "Sincerity in all endeavors",
      color: "text-red-500"
    },
    { 
      icon: BookOpen, 
      title: "Ilm", 
      description: "Pursuit of knowledge",
      color: "text-blue-500"
    },
    { 
      icon: Award, 
      title: "Akhlaaq", 
      description: "Excellence in character",
      color: "text-green-500"
    },
    { 
      icon: Users, 
      title: "Ukhuwwah", 
      description: "Brotherhood & unity",
      color: "text-purple-500"
    },
    { 
      icon: Handshake, 
      title: "Khidmat", 
      description: "Service to humanity",
      color: "text-orange-500"
    },
  ];

  const services = [
    "Islamic values through reminders & circles",
    "Academic support & mentorship",
    "Technology projects & development",
    "Hackathons & workshops",
    "Career guidance for UPSC, GATE, Masters",
    "Internships & placements support"
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
              About IESA
            </h1>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto">
              IESA (Initiative of Engineers for Service and Academics) is a student-led platform committed to empowering Muslim engineering students across Telangana through academic excellence, faith-based learning, skill development, and impactful community service. We aim to build a future-ready generation grounded in Islamic values and equipped with global competencies.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="relative">
              <div className="islamic-pattern-subtle absolute inset-0 rounded-2xl"></div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl relative h-full">
                <h3 className="text-2xl font-display font-bold text-primary mb-6">Our Mission</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Building a future-ready generation grounded in Islamic values and equipped with global competencies.
                </p>
                
                <h4 className="text-xl font-display font-semibold text-primary mb-4">Why Join IESA?</h4>
                <div className="grid gap-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">📚 Scholarships, notes & academic mentorship</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">🎯 Career guidance for GATE, UPSC & Masters</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">💻 Web development & tech projects</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">🌐 Islamic websites & social work</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">🤝 Network with students across Telangana</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">🕌 Spiritual growth & Islamic guidance</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="islamic-pattern-subtle absolute inset-0 rounded-2xl"></div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl relative h-full">
                <h3 className="text-2xl font-display font-bold text-primary mb-6">Our Services</h3>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-muted-foreground leading-relaxed">{service}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-display font-bold text-primary mb-8">Our Core Values</h3>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-16 h-16 ${value.color} bg-current/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className={`w-8 h-8 ${value.color}`} />
                </div>
                <h4 className="font-display font-semibold text-xl text-primary mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
