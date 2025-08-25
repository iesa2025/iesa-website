
import { 
  Code2, 
  BookOpen, 
  Trophy, 
  HeartHandshake, 
  Award, 
  Users, 
  Network 
} from "lucide-react";

const Activities = () => {
  const activities = [
    {
      icon: Code2,
      title: "Web Development Courses",
      description: "Comprehensive coding bootcamps and technical skill development",
      color: "text-blue-500"
    },
    {
      icon: BookOpen,
      title: "Tafseer Circles",
      description: "Weekly Quranic study sessions and Islamic knowledge sharing",
      color: "text-green-500"
    },
    {
      icon: Trophy,
      title: "Hackathons",
      description: "Innovation challenges and competitive programming events",
      color: "text-purple-500"
    },
    {
      icon: HeartHandshake,
      title: "Social Service",
      description: "Community outreach programs and humanitarian initiatives",
      color: "text-red-500"
    },
    {
      icon: Award,
      title: "Scholarships",
      description: "Financial assistance and merit-based educational support",
      color: "text-orange-500"
    },
    {
      icon: Users,
      title: "UPSC Mentorship",
      description: "Civil services preparation and career guidance programs",
      color: "text-indigo-500"
    },
    {
      icon: Network,
      title: "Alumni Connect",
      description: "Professional networking and industry mentorship opportunities",
      color: "text-cyan-500"
    }
  ];

  return (
    <section id="activities" className="py-20 bg-section-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 islamic-pattern-subtle"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title">Our Activities</h2>
          <p className="section-subtitle">
            Holistic development through diverse programs that nurture both professional and spiritual growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {activities.map((activity, index) => (
            <div 
              key={activity.title}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 group hover:scale-105"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`w-16 h-16 ${activity.color} bg-current/10 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <activity.icon className={`w-8 h-8 ${activity.color}`} />
              </div>
              
              <h3 className="font-display font-semibold text-xl text-primary mb-3 group-hover:text-primary/80 transition-colors">
                {activity.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {activity.description}
              </p>
              
              {/* Animated underline */}
              <div className={`mt-4 h-0.5 ${activity.color.replace('text-', 'bg-')} rounded-full w-0 group-hover:w-full transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {[
            { number: "500+", label: "Active Members" },
            { number: "25+", label: "Partner Colleges" },
            { number: "100+", label: "Events Conducted" },
            { number: "50+", label: "Scholarships Awarded" }
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
