
const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/lovable-uploads/de185688-6a71-4f04-b4f3-a00f468dc4aa.png" 
                alt="IESA Logo" 
                className="h-8 w-8 brightness-0 invert"
              />
              <span className="font-display font-bold text-xl">IESA</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Initiative of Engineers for Service & Academics - Empowering Muslim engineers 
              with knowledge, faith, and service across Telangana.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-primary-foreground/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#departments" className="text-primary-foreground/80 hover:text-white transition-colors">Departments</a></li>
              <li><a href="#activities" className="text-primary-foreground/80 hover:text-white transition-colors">Activities</a></li>
              <li><a href="#membership" className="text-primary-foreground/80 hover:text-white transition-colors">Membership</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>Telangana, India</p>
              <p>contact@iesa.org</p>
              <p>+91 XXX XXX XXXX</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/80 mb-4 md:mb-0">
              © 2024 IESA. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Terms of Service</a>
              <a href="#contact" className="text-primary-foreground/80 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
