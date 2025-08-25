
import { 
  BookOpen, 
  GraduationCap, 
  Calendar,
  Palette,
  PenTool,
  Code
} from "lucide-react";

const Departments = () => {
  const departments = [
    {
      name: "Tarbiyah (Islamic Guidance)",
      icon: BookOpen,
      description: "Strengthening Imaan and character through learning circles and reminders.",
      leads: "Muskaan & Ayesha",
      gradient: "from-green-400 to-green-600"
    },
    {
      name: "Academics",
      icon: GraduationCap,
      description: "Mentorship, scholarships, and academic support for engineering success.",
      leads: "Muqeet & Aliya",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      name: "Event Management",
      icon: Calendar,
      description: "Organizing programs, hackathons, and IESA-wide gatherings.",
      leads: "Taher & Asad",
      gradient: "from-pink-400 to-pink-600"
    },
    {
      name: "Media & Design",
      icon: Palette,
      description: "Creating posters, videos, and social content for branding and da'wah.",
      leads: "Uzair & Maheeya",
      gradient: "from-red-400 to-red-600"
    },
    {
      name: "HR & Drafting",
      icon: PenTool,
      description: "Recruiting college reps and maintaining internal communication.",
      leads: "Batool & Aliya",
      gradient: "from-yellow-400 to-yellow-600"
    },
    {
      name: "Tech & Research",
      icon: Code,
      description: "Building innovation through web development and hackathons.",
      leads: "Sariah & Rafe",
      gradient: "from-cyan-400 to-cyan-600"
    }
  ];

  return (
    <section id="departments" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title">Departments</h2>
          <p className="section-subtitle mb-4">
            "Engineers by profession. Servants of Deen by purpose."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {departments.map((dept, index) => (
            <div 
              key={dept.name}
              className="card-department group cursor-pointer"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${dept.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                <dept.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-display font-semibold text-xl text-primary mb-3 text-center group-hover:text-primary/80 transition-colors">
                {dept.name}
              </h3>
              
              <p className="text-muted-foreground text-center leading-relaxed text-sm mb-4">
                {dept.description}
              </p>

              <div className="text-center">
                <p className="text-xs font-medium text-primary/70">
                  Leads: {dept.leads}
                </p>
              </div>
              
              {/* Decorative bottom border */}
              <div className={`mt-4 h-1 bg-gradient-to-r ${dept.gradient} rounded-full mx-auto w-0 group-hover:w-full transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center animate-fade-in-up">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold text-primary mb-4">
              Ready to make an impact?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join one of our departments and contribute to the growth of Muslim engineering community in Telangana.
            </p>
            <a href="https://shorturl.at/PNLAF" target="_blank" rel="noopener noreferrer" className="btn-hero">
              Join IESA Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Departments;
