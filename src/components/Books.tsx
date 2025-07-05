
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Books = () => {
  const books = [
    {
      title: "Raising Confident African Children",
      description: "A comprehensive guide to nurturing self-esteem and cultural identity in children while navigating modern parenting challenges.",
      price: "P180",
      cover: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=300&h=400&fit=crop",
      features: ["Cultural identity building", "Self-esteem development", "Practical exercises", "Real-life case studies"]
    },
    {
      title: "The Balanced Mother: Self-Care in African Families",
      description: "Discover how to maintain your well-being while being an exceptional mother, with culturally-relevant self-care practices.",
      price: "P160",
      cover: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=400&fit=crop",
      features: ["Self-care strategies", "Work-life balance", "Stress management", "Faith-based wellness"]
    },
    {
      title: "Discipline with Love: African Parenting Wisdom",
      description: "Learn effective, loving discipline techniques that honor traditional values while promoting healthy child development.",
      price: "P200",
      cover: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=300&h=400&fit=crop",
      features: ["Positive discipline methods", "Traditional wisdom", "Age-appropriate techniques", "Conflict resolution"]
    }
  ];

  const handleOrderBook = (bookTitle: string, price: string) => {
    const message = `Hi! I would like to order "${bookTitle}" (${price}). Could you please help me with the ordering process?`;
    window.open(`https://wa.me/26777123456?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="books" className="py-20 bg-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-earth-brown mb-6">
            Published Books
          </h2>
          <div className="w-24 h-1 bg-warm-orange mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical wisdom and evidence-based guidance for African parents, 
            written with love and cultural understanding.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {books.map((book, index) => (
            <Card key={index} className="bg-soft-cream shadow-lg hover-lift border-0 rounded-2xl overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={book.cover} 
                  alt={`${book.title} book cover`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-warm-orange text-white px-3 py-1 rounded-full font-semibold">
                  {book.price}
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-earth-brown">
                  {book.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {book.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold text-deep-teal text-sm">What you'll learn:</h4>
                  <ul className="space-y-1">
                    {book.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-warm-orange rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  onClick={() => handleOrderBook(book.title, book.price)}
                  className="w-full bg-deep-teal hover:bg-deep-teal/90 text-white rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Order via WhatsApp</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Books;
