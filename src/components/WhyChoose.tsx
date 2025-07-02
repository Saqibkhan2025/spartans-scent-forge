import { Clock, Award, Gem, Globe } from "lucide-react";

const WhyChoose = () => {
  const features = [
    {
      icon: Clock,
      title: "24-Hour Longevity",
      description: "Engineered for the warrior's day—from dawn conquests to midnight victories.",
      detail: "Advanced molecular bonding ensures your presence is felt long after you've left the battlefield."
    },
    {
      icon: Gem,
      title: "Premium Ingredients",
      description: "Sourced from the ancient trade routes—Cambodian Oud, Arabian Amber, Italian Bergamot.",
      detail: "Each note crafted by master perfumers using traditional methods passed down through generations."
    },
    {
      icon: Award,
      title: "Limited Elite Edition",
      description: "Only 999 bottles in this inaugural launch. Own a piece of fragrance history.",
      detail: "Hand-numbered bottles with certificate of authenticity. Once they're gone, they're legends."
    },
    {
      icon: Globe,
      title: "Global Warrior Network",
      description: "Join an exclusive community of SPARTANS wearers across continents.",
      detail: "Access to private events, new releases, and the brotherhood of modern warriors."
    }
  ];

  return (
    <section id="why-choose" className="py-24 bg-background relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,hsl(var(--bronze))_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why <span className="text-bronze-gradient">SPARTANS</span> Conquers All
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter">
            In a world of ordinary fragrances, SPARTANS stands as the pinnacle 
            of masculine sophistication and uncompromising quality.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Features List */}
          <div className="space-y-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={feature.title}
                  className="flex gap-6 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-bronze rounded-lg flex items-center justify-center group-hover:shadow-glow-bronze transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-obsidian" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-cinzel text-2xl font-semibold text-bronze mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-foreground font-inter font-medium mb-2">
                      {feature.description}
                    </p>
                    <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                      {feature.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Quality Guarantees */}
          <div className="card-warrior p-10">
            <h3 className="font-cinzel text-3xl font-bold text-bronze mb-8 text-center">
              The Spartan Guarantee
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg">
                <div className="w-3 h-3 bg-gradient-bronze rounded-full"></div>
                <span className="font-inter text-foreground">30-Day Conquest Guarantee</span>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg">
                <div className="w-3 h-3 bg-gradient-bronze rounded-full"></div>
                <span className="font-inter text-foreground">Authentic Premium Ingredients</span>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg">
                <div className="w-3 h-3 bg-gradient-bronze rounded-full"></div>
                <span className="font-inter text-foreground">Worldwide Elite Shipping</span>
              </div>
              
              <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg">
                <div className="w-3 h-3 bg-gradient-bronze rounded-full"></div>
                <span className="font-inter text-foreground">Lifetime Warrior Support</span>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-warrior rounded-lg text-center">
              <p className="font-cinzel text-xl text-bronze mb-2">Master Perfumer's Promise</p>
              <p className="text-sm text-muted-foreground font-inter italic">
                "Every bottle carries my signature, my reputation, and my commitment 
                to creating fragrances worthy of legends."
              </p>
              <div className="mt-3 text-bronze font-inter font-semibold">— Irfan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;