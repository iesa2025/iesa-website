
import { Heart, BookOpen, Users, Award, Handshake } from "lucide-react";

const About = () => {
  const values = [
    { 
      icon: Heart, 
      title: "Ikhlaas", 
      description: "Sincerity in all our endeavors",
      color: "text-red-500"
    },
    { 
      icon: BookOpen, 
      title: "Ilm", 
      description: "Pursuit of knowledge and wisdom",
      color: "text-blue-500"
    },
    { 
      icon: Award, 
      title: "Akhlaaq", 
      description: "Excellence in character and conduct",
      color: "text-green-500"
    },
    { 
      icon: Users, 
      title: "Ukhuwwah", 
      description: "Brotherhood and unity",
      color: "text-purple-500"
    },
    { 
      icon: Handshake, 
      title: "Khidmat", 
      description: "Service to humanity",
      color: "text-orange-500"
    },
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title">About IESA</h2>
          <p className="section-subtitle">
            Building a future-ready generation of Muslim engineers grounded in Islamic values and equipped with global competencies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-display font-bold text-primary mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              To create a supportive ecosystem for Muslim engineering students across Telangana, 
              fostering academic excellence while strengthening Islamic identity and values.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We bridge the gap between modern education and Islamic principles, preparing 
              engineers who excel professionally while contributing meaningfully to society.
            </p>
          </div>
          
          <div className="relative">
            <div className="islamic-pattern-subtle absolute inset-0 rounded-2xl"></div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl relative">
              <h4 className="text-2xl font-display font-bold text-primary mb-4">Our Vision</h4>
              <p className="text-muted-foreground leading-relaxed">
                A thriving community of Muslim engineers who lead with integrity, 
                innovate with purpose, and serve with compassion, contributing to 
                both technological advancement and Islamic civilization.
              </p>
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
              className="card-department text-center group"
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
  );
};

export default About;
