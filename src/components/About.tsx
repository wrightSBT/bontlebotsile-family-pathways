
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-earth-brown mb-6">
            About Bontlebotsile Wellness Consults
          </h2>
          <div className="w-24 h-1 bg-warm-orange mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Welcome to a space where <span className="text-deep-teal font-semibold">African heritage meets modern wellness</span>. 
              As a clinical psychologist and devoted mother, I understand the unique challenges facing parents in our communities today.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My mission is to bridge the gap between traditional parenting wisdom and contemporary child development science, 
              creating a <span className="text-warm-orange font-semibold">faith-centered approach</span> that honors our cultural values 
              while embracing evidence-based practices.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Through BWC, I provide compassionate guidance to parents navigating the beautiful journey of raising confident, 
              well-adjusted children while maintaining their own mental health and spiritual well-being.
            </p>

            <div className="bg-soft-cream p-6 rounded-lg border-l-4 border-deep-teal">
              <p className="text-earth-brown font-medium italic">
                "Every parent deserves support, understanding, and practical tools to thrive in their parenting journey. 
                Let's walk this path together, rooted in faith and guided by wisdom."
              </p>
              <p className="text-warm-orange font-semibold mt-2">- Dr. Bontlebotsile Sebate</p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-96 rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=600&fit=crop&crop=face"
                  alt="Dr. Bontlebotsile Sebate in consultation" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-warm-orange text-white p-4 rounded-lg shadow-lg">
                <p className="font-semibold text-sm">10+ Years</p>
                <p className="text-xs">Clinical Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
