
import { Construction } from "lucide-react";

const Activities = () => {
  return (
    <section id="activities" className="py-20 bg-section-bg relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 islamic-pattern-subtle"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="section-title">Our Activities</h2>
          <p className="section-subtitle">
            Comprehensive programs for professional and spiritual growth
          </p>
        </div>

        {/* Coming Soon Section */}
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-xl text-center max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Construction className="w-12 h-12 text-primary" />
            </div>
            
            <h3 className="text-3xl font-display font-bold text-primary mb-4">
              Coming Soon
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              We're working on something amazing! Our activities page will showcase all the exciting 
              programs and events that make IESA a vibrant community.
            </p>

            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">What's Coming:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Web Development Courses</li>
                  <li>• Tafseer Circles</li>
                  <li>• Hackathons & Competitions</li>
                  <li>• Social Service Projects</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-primary">And More:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• UPSC Mentorship</li>
                  <li>• Alumni Networking</li>
                  <li>• Monthly Meets</li>
                  <li>• Skill Development</li>
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <a href="#contact" className="btn-hero">
                Stay Updated
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
