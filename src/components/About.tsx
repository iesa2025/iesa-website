
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

  const services = [
    "Strengthen Islamic values through reminders & circles",
    "Academic support – scholarships, mentorship, and notes",
    "Technology projects – web development & real-world applications",
    "Events – hackathons, workshops, monthly meets",
    "After-BE Unit – career prep for UPSC, GATE, Masters",
    "Internships & Placements – latest openings, deadlines, and alumni connect"
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title">About IESA</h2>
          <p className="section-subtitle">
            Initiative of Engineers for Service and Academics - A student-led platform empowering Muslim engineering students across Telangana
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-display font-bold text-primary mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              IESA is committed to empowering Muslim engineering students across Telangana through 
              academic excellence, faith-based learning, skill development, and impactful community service.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We aim to build a future-ready generation grounded in Islamic values and equipped with global competencies.
            </p>
            
            <div className="mt-8">
              <h4 className="text-xl font-display font-semibold text-primary mb-4">Why Join IESA?</h4>
              <div className="grid gap-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">📚 Access scholarships, notes, and academic mentorship</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">🎯 Get career guidance for Internships, GATE, UPSC & Masters</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">💻 Learn Web Development, join tech mentor circles, and lead real projects</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">🌐 Contribute to Islamic websites, social work, and donation programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">🤝 Connect with like-minded students from colleges across Telangana</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">🕌 Grow spiritually with Islamic reminders, circles, and guidance</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="islamic-pattern-subtle absolute inset-0 rounded-2xl"></div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl relative">
              <h4 className="text-2xl font-display font-bold text-primary mb-6">Our Services</h4>
              <div className="space-y-3">
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

        {/* Quranic Verse Section */}
        <div className="text-center mb-12 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
          <div className="text-2xl font-display text-primary mb-4 leading-relaxed">
            وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ
          </div>
          <p className="text-lg text-muted-foreground italic mb-2">
            "And cooperate with one another in righteousness and piety, but do not cooperate in sin and aggression."
          </p>
          <p className="text-sm text-muted-foreground">— Surah Al-Ma'idah (5:2)</p>
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
