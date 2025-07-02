import { Shield, Crown, Zap, Eye } from "lucide-react";

const SpartanCode = () => {
  const values = [
    {
      icon: Shield,
      title: "STRENGTH",
      description: "Unwavering in the face of any challenge",
      detail: "Built for those who lead from the front"
    },
    {
      icon: Crown,
      title: "LOYALTY",
      description: "Devoted to excellence and authenticity", 
      detail: "A bond that transcends time and trend"
    },
    {
      icon: Zap,
      title: "POWER",
      description: "Command respect with every presence",
      detail: "The force that moves mountains"
    },
    {
      icon: Eye,
      title: "MYSTERY",
      description: "Intrigue that captivates and conquers",
      detail: "Depth beyond what meets the eye"
    }
  ];

  return (
    <section id="code" className="py-24 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border border-bronze rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-bronze rotate-12"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-bronze/20 rounded-full blur-lg"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-foreground mb-6">
            The <span className="text-bronze-gradient">Spartan</span> Code
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter">
            Four pillars that define the essence of every true warrior. 
            Each element infused into every drop of SPARTANS.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div 
                key={value.title}
                className="card-warrior p-8 text-center group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-bronze rounded-full flex items-center justify-center group-hover:shadow-glow-bronze transition-all duration-300">
                    <IconComponent className="w-10 h-10 text-obsidian" />
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto border-2 border-bronze rounded-full animate-pulse opacity-30"></div>
                </div>
                
                <h3 className="font-cinzel text-2xl font-bold text-bronze mb-3">
                  {value.title}
                </h3>
                
                <p className="text-foreground font-inter font-medium mb-3">
                  {value.description}
                </p>
                
                <p className="text-sm text-muted-foreground font-inter">
                  {value.detail}
                </p>
                
                <div className="mt-4 w-12 h-px bg-gradient-bronze mx-auto opacity-50"></div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-block p-8 card-warrior">
            <p className="font-cinzel text-xl text-bronze mb-2">SPARTANS Oath</p>
            <p className="text-muted-foreground font-inter italic">
              "I am the storm that shapes the mountain, the fire that forges the steel, 
              the legend that echoes through eternity."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpartanCode;