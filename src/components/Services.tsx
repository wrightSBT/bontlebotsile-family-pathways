
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Users, Mic } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: User,
      title: "1-on-1 Parenting Consultations",
      description: "Personalized guidance tailored to your family's unique needs and challenges.",
      features: [
        "Individual assessment and planning",
        "Culturally-sensitive approaches",
        "Faith-based counseling options",
        "Follow-up support included"
      ],
      price: "From P350/session"
    },
    {
      icon: Users,
      title: "Workshops & Group Sessions",
      description: "Interactive learning experiences with other parents in your community.",
      features: [
        "Small group dynamics",
        "Peer support and networking",
        "Practical tools and resources",
        "Cultural parenting wisdom"
      ],
      price: "From P150/person"
    },
    {
      icon: Mic,
      title: "Speaking Engagements",
      description: "Inspiring presentations for churches, schools, and community organizations.",
      features: [
        "Customized presentations",
        "Interactive audience participation",
        "Practical takeaways",
        "Q&A sessions included"
      ],
      price: "Contact for pricing"
    }
  ];

  const handleBookService = (serviceName: string) => {
    const message = `Hi! I'm interested in booking ${serviceName}. Could you please share more details about availability and scheduling?`;
    window.open(`https://wa.me/26777123456?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-soft-cream">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-earth-brown mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-warm-orange mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive support for every step of your parenting journey, 
            grounded in African wisdom and modern psychology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white shadow-lg hover-lift border-0 rounded-2xl overflow-hidden">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-deep-teal/10 rounded-full w-fit">
                  <service.icon className="w-8 h-8 text-deep-teal" />
                </div>
                <CardTitle className="text-xl text-earth-brown mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-warm-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="border-t pt-4">
                  <p className="text-deep-teal font-semibold text-lg mb-4">{service.price}</p>
                  <Button 
                    onClick={() => handleBookService(service.title)}
                    className="w-full bg-warm-orange hover:bg-warm-orange/90 text-white rounded-full transition-all duration-300"
                  >
                    Book Now via WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
