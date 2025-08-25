
import { Users, GraduationCap, Heart, Star } from "lucide-react";

const Membership = () => {
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
    <section id="membership" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title">Join Our Community</h2>
          <p className="section-subtitle">
            Open to all Muslim engineering students across Telangana with dedicated representation for both boys and girls from every college
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-up">
            <h3 className="text-3xl font-display font-bold text-primary mb-6">
              Inclusive & Welcoming
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              IESA believes in the power of diversity and inclusion. We welcome all Muslim engineering 
              students regardless of their background, specialization, or level of Islamic knowledge.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-muted-foreground">Boys & Girls representatives from each college</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-muted-foreground">All engineering disciplines welcome</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-muted-foreground">Free membership for students</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/10 rounded-2xl p-8">
            <h4 className="text-2xl font-display font-bold text-primary mb-6 text-center">
              Membership Benefits
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.title}
                  className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{animationDelay: `${index * 0.1}s`}}
                >
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-3">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h5 className="font-semibold text-primary mb-2">{benefit.title}</h5>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Ready to Transform Your Engineering Journey?
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Join hundreds of Muslim engineering students who are building their careers 
              while strengthening their faith and serving their community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-white text-primary hover:bg-white/90 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Apply for Membership
              </a>
              <a href="#departments" className="border-2 border-white text-white hover:bg-white hover:text-primary px-6 py-3 rounded-xl font-semibold transition-all duration-300">
                Explore Departments
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Membership;
