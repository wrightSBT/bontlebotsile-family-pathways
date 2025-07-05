
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "WhatsApp",
      url: "https://wa.me/26777123456",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      )
    },
    {
      name: "Facebook",
      url: "https://facebook.com/bwconsults",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      url: "https://instagram.com/bwconsults",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.292C3.967 14.671 3.29 13.062 3.29 11.4c0-1.588.677-3.197 1.836-4.222.875-.802 2.026-1.292 3.323-1.292 1.297 0 2.448.49 3.323 1.292 1.159 1.025 1.836 2.634 1.836 4.222 0 1.662-.677 3.271-1.836 4.296-.875.802-2.026 1.292-3.323 1.292zm7.83-9.606c-.711 0-1.29-.579-1.29-1.29 0-.711.579-1.29 1.29-1.29.711 0 1.29.579 1.29 1.29 0 .711-.579 1.29-1.29 1.29z"/>
        </svg>
      )
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Books", href: "#books" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  const handleScrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-earth-brown text-white py-16">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-warm-orange">
              Bontlebotsile Wellness Consults
            </h3>
            <p className="text-white/80 leading-relaxed">
              Empowering African parents through faith-centered wellness, 
              culturally-rooted parenting wisdom, and evidence-based guidance. 
              Building stronger families, one consultation at a time.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-white hover:bg-warm-orange hover:border-warm-orange transition-all duration-300"
                  onClick={() => window.open(social.url, '_blank')}
                >
                  {social.icon}
                  <span className="ml-2 hidden sm:inline">{social.name}</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-warm-orange">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleScrollToSection(link.href)}
                    className="text-white/80 hover:text-warm-orange transition-colors duration-300 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-warm-orange">Get in Touch</h4>
            <div className="space-y-3 text-white/80">
              <p>📍 Gaborone, Botswana</p>
              <p>📱 +267 77 123 456</p>
              <p>✉️ hello@bwconsults.co.bw</p>
              <p className="text-sm">
                Mon-Fri: 8AM-6PM<br />
                Sat: 9AM-2PM
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/20 pt-8 mb-8">
          <div className="text-center max-w-2xl mx-auto">
            <h4 className="text-xl font-semibold text-warm-orange mb-4">
              Stay Connected
            </h4>
            <p className="text-white/80 mb-6">
              Get parenting tips, wellness insights, and updates on new resources 
              delivered to your WhatsApp.
            </p>
            <Button 
              onClick={() => {
                const message = "Hi! I'd like to stay updated with parenting tips and BWC news. Please add me to your newsletter list.";
                window.open(`https://wa.me/26777123456?text=${encodeURIComponent(message)}`, '_blank');
              }}
              className="bg-warm-orange hover:bg-warm-orange/90 text-white px-8 py-3 rounded-full transition-all duration-300 hover-lift"
            >
              Join Our WhatsApp Updates
            </Button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60">
            © {currentYear} Bontlebotsile Wellness Consults. All rights reserved.
          </p>
          <p className="text-white/40 text-sm mt-2">
            Empowering families • Nurturing growth • Building legacies
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
