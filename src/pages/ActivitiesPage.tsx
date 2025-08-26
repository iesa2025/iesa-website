
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Construction, Calendar, Users, BookOpen, Laptop } from "lucide-react";

const ActivitiesPage = () => {
  const upcomingActivities = [
    { icon: Laptop, title: "Web Development Courses", description: "Learn modern web technologies" },
    { icon: BookOpen, title: "Tafseer Circles", description: "Deep understanding of Quranic teachings" },
    { icon: Calendar, title: "Hackathons & Competitions", description: "Technical challenges and innovation" },
    { icon: Users, title: "Social Service Projects", description: "Community outreach programs" },
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
              Our Activities
            </h1>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto">
              Comprehensive programs for professional and spiritual growth
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-12 shadow-xl text-center max-w-4xl mx-auto">
              <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <Construction className="w-12 h-12 text-primary" />
              </div>
              
              <h2 className="text-4xl font-display font-bold text-primary mb-6">
                Coming Soon
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
                We're working on something amazing! Our activities page will showcase all the exciting 
                programs and events that make IESA a vibrant community.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {upcomingActivities.map((activity, index) => (
                  <div 
                    key={activity.title}
                    className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <activity.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-semibold text-primary mb-2">{activity.title}</h4>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-8 text-left mb-8">
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary text-lg">What's Coming:</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Web Development Courses</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Tafseer Circles</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Hackathons & Competitions</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Social Service Projects</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-primary text-lg">And More:</h4>
                  <ul className="text-muted-foreground space-y-2">
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>UPSC Mentorship</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Alumni Networking</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Monthly Meets</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span>Skill Development</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8">
                <a href="/contact" className="btn-hero">
                  Stay Updated
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ActivitiesPage;
