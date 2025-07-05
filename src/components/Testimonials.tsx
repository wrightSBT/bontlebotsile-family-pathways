
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Keabetswe M.",
      role: "Mother of 3, Gaborone",
      content: "Dr. Bontlebotsile's guidance transformed our family dynamics. Her approach honors our African values while giving us modern tools that actually work. My children are more confident and our home is more peaceful.",
      rating: 5
    },
    {
      name: "Pastor James K.",
      role: "Church Leader, Francistown",
      content: "We invited Dr. Sebate to speak at our parenting workshop and the response was incredible. Parents are still talking about the practical wisdom she shared. Her faith-centered approach resonates deeply with our community.",
      rating: 5
    },
    {
      name: "Nomsa T.",
      role: "Working Mother, Maun",
      content: "The 'Balanced Mother' book came at the perfect time in my life. Finally, someone who understands the pressures of being an African woman trying to do it all. The self-care strategies are life-changing.",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-warm-orange text-warm-orange" />
        ))}
      </div>
    );
  };

  return (
    <section id="testimonials" className="py-20 bg-soft-cream">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-earth-brown mb-6">
            What Parents Are Saying
          </h2>
          <div className="w-24 h-1 bg-warm-orange mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from parents who have experienced transformation through 
            faith-centered, culturally-rooted guidance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg hover-lift border-0 rounded-2xl overflow-hidden h-full">
              <CardContent className="p-8 space-y-6 h-full flex flex-col">
                {renderStars(testimonial.rating)}
                
                <blockquote className="text-muted-foreground italic leading-relaxed flex-grow">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="border-t pt-4">
                  <p className="font-semibold text-earth-brown">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-deep-teal">
                    {testimonial.role}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-earth-brown mb-4">
              Join Hundreds of Transformed Families
            </h3>
            <p className="text-muted-foreground mb-6">
              Ready to experience the same positive changes in your parenting journey? 
              Let's work together to build stronger, happier families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-deep-teal hover:bg-deep-teal/90 text-white px-6 py-3 rounded-full transition-all duration-300 hover-lift"
              >
                Start Your Journey Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
