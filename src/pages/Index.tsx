
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Books from "@/components/Books";
import Testimonials from "@/components/Testimonials";
import FreeResource from "@/components/FreeResource";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <Books />
      <Testimonials />
      <FreeResource />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
