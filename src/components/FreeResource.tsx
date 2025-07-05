
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, CheckCircle } from "lucide-react";

const FreeResource = () => {
  const handleDownloadGuide = () => {
    // In a real implementation, this would trigger a download or email signup
    const message = "Hi! I would like to download the free 'Essential Parenting Tips for African Families' guide. Could you please send it to me?";
    window.open(`https://wa.me/26777123456?text=${encodeURIComponent(message)}`, '_blank');
  };

  const tips = [
    "Building cultural identity in children",
    "Effective communication strategies",
    "Managing screen time and technology",
    "Faith-based discipline approaches",
    "Supporting emotional development"
  ];

  return (
    <section id="free-resource" className="py-20 bg-white">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-earth-brown mb-6">
            Free Parenting Resource
          </h2>
          <div className="w-24 h-1 bg-warm-orange mx-auto mb-8"></div>
        </div>

        <Card className="bg-gradient-to-br from-deep-teal to-deep-teal/80 text-white shadow-2xl rounded-3xl overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="bg-warm-orange p-3 rounded-full">
                    <Download className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Free Download</h3>
                    <p className="text-white/80">No email required</p>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-3">
                    "Essential Parenting Tips for African Families"
                  </h4>
                  <p className="text-white/90 leading-relaxed">
                    A practical 15-page guide filled with culturally-relevant parenting strategies, 
                    faith-based approaches, and proven techniques to strengthen your family bonds.
                  </p>
                </div>

                <div className="space-y-3">
                  <h5 className="font-semibold">What's Inside:</h5>
                  <ul className="space-y-2">
                    {tips.map((tip, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-warm-orange flex-shrink-0" />
                        <span className="text-white/90">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  onClick={handleDownloadGuide}
                  size="lg"
                  className="bg-warm-orange hover:bg-warm-orange/90 text-white px-8 py-4 text-lg rounded-full transition-all duration-300 hover-lift w-full md:w-auto"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Free Guide
                </Button>
              </div>

              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-64 h-80 bg-white/10 backdrop-blur rounded-2xl p-6 shadow-2xl">
                    <div className="h-full bg-white rounded-lg p-4 flex flex-col justify-between">
                      <div>
                        <div className="h-2 bg-warm-orange rounded mb-3"></div>
                        <div className="space-y-2">
                          <div className="h-1 bg-gray-300 rounded w-3/4"></div>
                          <div className="h-1 bg-gray-300 rounded w-1/2"></div>
                          <div className="h-1 bg-gray-300 rounded w-5/6"></div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 text-center">
                        Essential Parenting Tips
                      </div>
                    </div>
                  </div>
                  <div className="absolute -top-2 -right-2 bg-warm-orange text-white p-2 rounded-full">
                    <Download className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FreeResource;
