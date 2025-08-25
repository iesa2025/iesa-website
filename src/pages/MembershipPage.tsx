
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, GraduationCap, Heart, Star, Mail, Phone, UserPlus } from "lucide-react";

const MembershipPage = () => {
  const benefits = [
    {
      icon: GraduationCap,
      title: "Academic Support",
      description: "Access to study materials, mentorship, and scholarship opportunities"
    },
    {
      icon: Users,
      title: "Community Network",
      description: "Connect with like-minded Muslim engineers across Telangana"
    },
    {
      icon: Heart,
      title: "Spiritual Growth",
      description: "Regular Islamic programs and character development sessions"
    },
    {
      icon: Star,
      title: "Career Development",
      description: "Placement assistance, internships, and professional guidance"
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
              src="/lovable-uploads/de185688-6a71-4f04-b4f3-a00f468dc4aa.png" 
              alt="IESA Logo" 
              className="w-24 h-24 mx-auto mb-6 drop-shadow-2xl"
            />
            <h1 className="text-5xl md:text-6xl font-display font-bold text-primary mb-4">
              Join Our Community
            </h1>
            <p className="text-xl text-primary/80 max-w-3xl mx-auto">
              Open to all Muslim engineering students across Telangana - completely free membership
            </p>
          </div>
        </div>
      </section>

      {/* Membership Content */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-display font-bold text-primary mb-6">
                Membership Details
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                IESA believes in the power of unity and inclusion. We welcome all Muslim engineering 
                students regardless of their background, specialization, or level of Islamic knowledge.
              </p>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl mb-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <UserPlus className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Who can join?</h4>
                      <p className="text-muted-foreground">All Muslim Engineering Students in Telangana</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Colleges</h4>
                      <p className="text-muted-foreground">Open to all colleges across Telangana</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary">Fees</h4>
                      <p className="text-muted-foreground">No fees – completely free</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-6">
                <h4 className="font-display font-semibold text-primary mb-4">Contact Us</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">iesa.queries@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div className="text-muted-foreground">
                      <div>+91 82475 79990</div>
                      <div>+91 74165 91592</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
              <h3 className="text-3xl font-display font-bold text-primary mb-8 text-center">
                Membership Benefits
              </h3>
              <div className="grid gap-6">
                {benefits.map((benefit, index) => (
                  <div 
                    key={benefit.title}
                    className="bg-gradient-to-r from-primary/5 to-secondary/10 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:scale-105"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-primary mb-2">{benefit.title}</h5>
                        <p className="text-sm text-muted-foreground">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center animate-fade-in-up">
            <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-12 text-white shadow-2xl max-w-4xl mx-auto">
              <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Ready to Transform Your Engineering Journey?
              </h3>
              <p className="text-primary-foreground/90 mb-6 max-w-3xl mx-auto text-lg">
                Join hundreds of Muslim engineering students who are building their careers 
                while strengthening their faith and serving their community.
              </p>
              <p className="text-primary-foreground/90 mb-8 font-medium text-lg">
                ✨ Friendly team, spiritual growth, and career support – all in one!
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="/contact" className="bg-white text-primary hover:bg-white/90 px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                  Register Now
                </a>
                <a href="/departments" className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                  Explore Departments
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

export default MembershipPage;
