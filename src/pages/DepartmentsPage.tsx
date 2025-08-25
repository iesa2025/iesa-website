
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { 
  BookOpen, 
  GraduationCap, 
  Calendar,
  Palette,
  PenTool,
  Code
} from "lucide-react";

const DepartmentsPage = () => {
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
              Departments
            </h1>
            <p className="text-2xl text-primary/80 mb-6 italic">
              "Engineers by profession. Servants of Deen by purpose."
            </p>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-16 bg-section-bg">
        <div className="container mx-auto px-4">
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
      
      <Footer />
    </div>
  );
};

export default DepartmentsPage;
