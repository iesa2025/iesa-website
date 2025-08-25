
import { 
  BookOpen, 
  GraduationCap, 
  Briefcase, 
  Code, 
  Microscope, 
  Calendar,
  Users,
  Palette,
  PenTool,
  DollarSign
} from "lucide-react";

const Departments = () => {
  const departments = [
    {
      name: "Tarbiyah",
      icon: BookOpen,
      description: "Faith & Islamic Guidance through spiritual development and character building",
      gradient: "from-green-400 to-green-600"
    },
    {
      name: "Academics",
      icon: GraduationCap,
      description: "Mentorship, Scholarships, and academic excellence support systems",
      gradient: "from-blue-400 to-blue-600"
    },
    {
      name: "Placements & Internships",
      icon: Briefcase,
      description: "Career Preparation & Alumni Connections for professional growth",
      gradient: "from-purple-400 to-purple-600"
    },
    {
      name: "Technology",
      icon: Code,
      description: "Web Development, Tech Mentorship, and innovation initiatives",
      gradient: "from-cyan-400 to-cyan-600"
    },
    {
      name: "Research",
      icon: Microscope,
      description: "Islamic & Engineering Innovation research and development",
      gradient: "from-orange-400 to-orange-600"
    },
    {
      name: "Events",
      icon: Calendar,
      description: "Hackathons, Educational Visits, and Monthly Community Meetings",
      gradient: "from-pink-400 to-pink-600"
    },
    {
      name: "After-BE Unit",
      icon: Users,
      description: "UPSC, GATE, Higher Studies preparation and Alumni Support",
      gradient: "from-indigo-400 to-indigo-600"
    },
    {
      name: "Media & Design",
      icon: Palette,
      description: "Branding, Social Media Management, and Creative Content",
      gradient: "from-red-400 to-red-600"
    },
    {
      name: "HR & Drafting",
      icon: PenTool,
      description: "Recruitment processes and Professional Content Writing",
      gradient: "from-yellow-400 to-yellow-600"
    },
    {
      name: "Finance",
      icon: DollarSign,
      description: "Fundraising initiatives and Treasury Management",
      gradient: "from-emerald-400 to-emerald-600"
    }
  ];

  return (
    <section id="departments" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title">Our Departments</h2>
          <p className="section-subtitle">
            Comprehensive support across all aspects of engineering education and Islamic development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <div 
              key={dept.name}
              className="card-department group cursor-pointer"
              style={{animationDelay: `${index * 0.05}s`}}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${dept.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                <dept.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-display font-semibold text-xl text-primary mb-3 text-center group-hover:text-primary/80 transition-colors">
                {dept.name}
              </h3>
              
              <p className="text-muted-foreground text-center leading-relaxed text-sm">
                {dept.description}
              </p>
              
              {/* Decorative bottom border */}
              <div className={`mt-4 h-1 bg-gradient-to-r ${dept.gradient} rounded-full mx-auto w-0 group-hover:w-full transition-all duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold text-primary mb-4">
              Ready to make an impact?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join one of our departments and contribute to the growth of Muslim engineering community in Telangana.
            </p>
            <a href="#contact" className="btn-hero">
              Get Involved Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Departments;
