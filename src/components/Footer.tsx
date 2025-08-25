import { Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/iesa_team/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/iesateam", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <img 
                src="/iesalogo.png" 
                alt="IESA Logo" 
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-xl font-display font-bold">IESA</h3>
                <p className="text-primary-foreground/80">Initiative of Engineers for Service and Academics</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Empowering Muslim engineering students across Telangana through academic excellence, 
              faith-based learning, and community service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-primary-foreground/80 hover:text-white transition-colors">About</a></li>
              <li><a href="#departments" className="text-primary-foreground/80 hover:text-white transition-colors">Departments</a></li>
              <li><a href="#activities" className="text-primary-foreground/80 hover:text-white transition-colors">Activities</a></li>
              <li><a href="#membership" className="text-primary-foreground/80 hover:text-white transition-colors">Membership</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Info</h4>
            <p className="mb-2">iesa.queries@gmail.com</p>
            <p>+91 82475 79990</p>
            <p>+91 74165 91592</p>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/80 mb-2">
            Made with ❤️ for Engineers by Engineers
          </p>
          <p className="text-primary-foreground/60">
            © 2025 IESA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
