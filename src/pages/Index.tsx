
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Departments from "@/components/Departments";
import Activities from "@/components/Activities";
import Membership from "@/components/Membership";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Departments />
      <Activities />
      <Membership />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
