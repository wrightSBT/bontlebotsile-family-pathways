
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Calendar } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a backend
    const whatsappMessage = `Hi! I'd like to book a consultation. Here are my details:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Service Interest: ${formData.service}
Message: ${formData.message}`;
    
    window.open(`https://wa.me/26777123456?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    
    toast({
      title: "Message Sent!",
      description: "You're being redirected to WhatsApp to complete your booking.",
    });
    
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      content: "Gaborone, Botswana",
      subtext: "In-person and virtual consultations available"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      content: "+267 77 123 456",
      subtext: "Available Mon-Fri, 8AM-6PM"
    },
    {
      icon: Mail,
      title: "Email",
      content: "hello@bwconsults.co.bw",
      subtext: "Response within 24 hours"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-soft-cream">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-earth-brown mb-6">
            Book Your Consultation
          </h2>
          <div className="w-24 h-1 bg-warm-orange mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your journey toward better parenting and family wellness? 
            Let's connect and discuss how we can support your family's unique needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white shadow-lg border-0 rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-earth-brown flex items-center gap-3">
                <Calendar className="w-6 h-6 text-deep-teal" />
                Schedule a Consultation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-earth-brown mb-2">
                      Full Name *
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="rounded-lg border-gray-300 focus:border-deep-teal focus:ring-deep-teal"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-earth-brown mb-2">
                      Phone Number *
                    </label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="rounded-lg border-gray-300 focus:border-deep-teal focus:ring-deep-teal"
                      placeholder="+267 7X XXX XXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-earth-brown mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-lg border-gray-300 focus:border-deep-teal focus:ring-deep-teal"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-earth-brown mb-2">
                    Service of Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-deep-teal focus:ring-deep-teal focus:outline-none"
                  >
                    <option value="">Select a service</option>
                    <option value="1-on-1 Consultation">1-on-1 Parenting Consultation</option>
                    <option value="Group Workshop">Group Workshop</option>
                    <option value="Speaking Engagement">Speaking Engagement</option>
                    <option value="Book Purchase">Book Purchase</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-earth-brown mb-2">
                    Tell us about your needs
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="rounded-lg border-gray-300 focus:border-deep-teal focus:ring-deep-teal"
                    placeholder="Describe your parenting challenges or what you'd like help with..."
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-deep-teal hover:bg-deep-teal/90 text-white py-3 rounded-full transition-all duration-300 hover-lift"
                >
                  Send Message & Book via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-white shadow-lg border-0 rounded-2xl hover-lift">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-deep-teal/10 rounded-full">
                        <info.icon className="w-6 h-6 text-deep-teal" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-earth-brown mb-1">
                          {info.title}
                        </h3>
                        <p className="text-warm-orange font-medium mb-1">
                          {info.content}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {info.subtext}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-gradient-to-br from-warm-orange to-warm-orange/80 text-white shadow-lg border-0 rounded-2xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">
                  Ready to Transform Your Parenting Journey?
                </h3>
                <p className="mb-6 text-white/90">
                  Join hundreds of families who have found peace, confidence, 
                  and joy in their parenting through our culturally-rooted approach.
                </p>
                <Button 
                  onClick={() => window.open('https://wa.me/26777123456?text=Hi! I\'d like to book a consultation with Dr. Bontlebotsile.', '_blank')}
                  variant="secondary"
                  className="bg-white text-warm-orange hover:bg-white/90 rounded-full px-8 py-3 font-semibold"
                >
                  Book Your First Session Today
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
