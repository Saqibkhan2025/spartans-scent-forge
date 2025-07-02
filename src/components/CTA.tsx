import { Button } from "@/components/ui/button";
import { AlertTriangle, Shield, Crown } from "lucide-react";

const CTA = () => {
  return (
    <section id="cta" className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-bronze/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-bronze/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJjdGEtcGF0dGVybiIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSIyIiBmaWxsPSIjOTI3MjQxIiBvcGFjaXR5PSIwLjEiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNjdGEtcGF0dGVybikiLz4KPC9zdmc+')] opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency Alert */}
          <div className="inline-flex items-center gap-3 bg-destructive/20 border border-destructive/30 rounded-full px-6 py-3 mb-8">
            <AlertTriangle className="w-5 h-5 text-destructive animate-pulse" />
            <span className="text-destructive font-inter font-semibold">FINAL HOURS - Only 47 bottles remaining</span>
          </div>
          
          <h2 className="font-cinzel text-5xl md:text-7xl font-bold text-foreground mb-6">
            <span className="text-bronze-gradient">Own the Legend</span>
          </h2>
          
          <p className="text-2xl text-muted-foreground mb-8 font-inter">
            Join the brotherhood of modern warriors
          </p>
          
          <p className="text-xl text-foreground mb-12 max-w-2xl mx-auto font-inter leading-relaxed">
            This is your moment. Your chance to command the room before you even speak. 
            To carry the essence of ancient strength in a modern world. To become the legend 
            you were born to be.
          </p>
          
          {/* Pricing */}
          <div className="card-warrior p-8 mb-12 max-w-md mx-auto">
            <div className="text-center">
              <div className="text-muted-foreground line-through text-lg font-inter mb-2">$399</div>
              <div className="text-5xl font-cinzel font-bold text-bronze mb-2">$299</div>
              <div className="text-muted-foreground font-inter">Launch Price - Limited Time</div>
              <div className="mt-4 text-sm text-destructive font-inter font-semibold">
                Price increases to $399 after first 100 sales
              </div>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button className="btn-warrior text-xl px-12 py-6 text-lg">
              <Crown className="w-6 h-6 mr-3" />
              Claim Your Bottle Now
            </Button>
            <Button variant="outline" className="btn-ghost text-xl px-12 py-6">
              <Shield className="w-6 h-6 mr-3" />
              Reserve for Later
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="grid md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-bronze font-cinzel text-2xl font-bold mb-2">✓</div>
              <div className="text-sm font-inter text-muted-foreground">30-Day Money Back Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-bronze font-cinzel text-2xl font-bold mb-2">✓</div>
              <div className="text-sm font-inter text-muted-foreground">Worldwide Premium Shipping</div>
            </div>
            <div className="text-center">
              <div className="text-bronze font-cinzel text-2xl font-bold mb-2">✓</div>
              <div className="text-sm font-inter text-muted-foreground">Certificate of Authenticity</div>
            </div>
          </div>
          
          <div className="mt-12 p-6 bg-background/10 border border-bronze/20 rounded-lg max-w-lg mx-auto">
            <p className="font-cinzel text-lg text-bronze mb-2">Spartan's Oath</p>
            <p className="text-sm text-muted-foreground font-inter italic">
              "This fragrance will transform how the world sees you, or your conquest is free."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;