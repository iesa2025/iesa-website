
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Heart, GraduationCap, Calendar, Palette, Users, Code, BookOpen, DollarSign, FileText, Briefcase } from "lucide-react";

const DepartmentsPage = () => {
  const departments = [
    {
      id: 1,
      name: "Tarbiyah",
      subtitle: "Islamic Guidance",
      description: "Strengthening Imaan, character-building, and spiritual bonding through learning circles and reminders.",
      leads: "Muskaan & Ayesha",
      icon: Heart,
      color: "from-rose-500/10 to-pink-500/10",
      iconColor: "text-rose-500"
    },
    {
      id: 2,
      name: "Academics",
      subtitle: "Educational Excellence",
      description: "Providing mentorship, scholarships, notes, and academic support for engineering success.",
      leads: "Muqeet & Aliya",
      icon: GraduationCap,
      color: "from-blue-500/10 to-indigo-500/10",
      iconColor: "text-blue-500"
    },
    {
      id: 3,
      name: "Event Management",
      subtitle: "Program Organization",
      description: "Organizing programs, hackathons, visits, and IESA-wide gatherings for dynamic learning.",
      leads: "Taher & Asad",
      icon: Calendar,
      color: "from-green-500/10 to-emerald-500/10",
      iconColor: "text-green-500"
    },
    {
      id: 4,
      name: "Media & Design",
      subtitle: "Visual Communication",
      description: "Creating posters, videos, and social content to unify IESA's branding and visual da'wah.",
      leads: "Uzair & Maheeya",
      icon: Palette,
      color: "from-purple-500/10 to-violet-500/10",
      iconColor: "text-purple-500"
    },
    {
      id: 5,
      name: "HR & Drafting",
      subtitle: "Human Resources",
      description: "Recruiting college reps, maintaining discipline, and ensuring smooth internal communication.",
      leads: "Batool & Aliya",
      icon: Users,
      color: "from-orange-500/10 to-amber-500/10",
      iconColor: "text-orange-500"
    },
    {
      id: 6,
      name: "Tech & Research",
      subtitle: "Innovation Hub",
      description: "Building innovation through web dev, hackathons, and research aligned with Islamic values.",
      leads: "Sariah & Rafe",
      icon: Code,
      color: "from-cyan-500/10 to-teal-500/10",
      iconColor: "text-cyan-500"
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
                key={dept.id}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${dept.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <dept.icon className={`w-8 h-8 ${dept.iconColor}`} />
                </div>
                
                <h3 className="text-2xl font-display font-bold text-primary mb-2">
                  {dept.name}
                </h3>
                <p className="text-sm text-secondary font-semibold mb-4 uppercase tracking-wider">
                  {dept.subtitle}
                </p>
                
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {dept.description}
                </p>
                
                <div className="border-t border-border pt-4">
                  <p className="text-sm text-primary font-semibold">
                    Leads: {dept.leads}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Islamic Foundation Quote */}
          <div className="text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold text-primary mb-6">Islamic Foundation</h3>
            <blockquote className="text-lg text-muted-foreground italic leading-relaxed mb-4">
              "Whoever relieves a Muslim of a burden from the burdens of the world, Allah will relieve him of a burden from the burdens on the Day of Judgement..."
            </blockquote>
            <p className="text-sm text-muted-foreground">— Jami` at-Tirmidhi 1930</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default DepartmentsPage;
