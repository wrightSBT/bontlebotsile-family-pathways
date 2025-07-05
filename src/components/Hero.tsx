
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleBookConsultation = () => {
    // Scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleOrderWhatsApp = () => {
    const message = "Hi! I'm interested in ordering a book from Bontlebotsile Wellness Consults. Could you please share more details?";
    window.open(`https://wa.me/26777123456?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-soft-cream to-white px-4 py-16">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-deep-teal">Empowering Parents.</span>
                <br />
                <span className="text-warm-orange">Nurturing Families.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Supporting African parents through faith-centered wellness, child development guidance, 
                and culturally-rooted parenting wisdom.
              </p>
              <p className="text-base text-earth-brown font-medium">
                Dr. Bontlebotsile Sebate | Clinical Psychologist & Author | Gaborone, Botswana
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={handleBookConsultation}
                size="lg" 
                className="bg-deep-teal hover:bg-deep-teal/90 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 hover-lift"
              >
                Book a Consultation
              </Button>
              <Button 
                onClick={handleOrderWhatsApp}
                variant="outline" 
                size="lg" 
                className="border-warm-orange text-warm-orange hover:bg-warm-orange hover:text-white px-8 py-3 text-lg rounded-full transition-all duration-300 hover-lift"
              >
                Order Books via WhatsApp
              </Button>
            </div>
          </div>

          {/* Right side - Professional Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=400&fit=crop&crop=face"
                  alt="Dr. Bontlebotsile Sebate - Clinical Psychologist and Author" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-warm-orange/20 rounded-full -z-10"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-deep-teal/20 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
