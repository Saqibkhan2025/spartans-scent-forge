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
          
          {/* Size Selection & Pricing */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12 max-w-4xl mx-auto">
            {/* 50ml Option */}
            <div className="card-warrior p-6 sm:p-8 border-2 border-bronze/30 bg-gradient-to-br from-bronze/5 to-bronze-glow/10 relative group hover:border-bronze/50 transition-all duration-300">
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-bronze/20 text-bronze text-xs px-2 sm:px-3 py-1 rounded-full font-inter font-semibold">POPULAR</div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-cinzel font-bold text-foreground mb-2">50ml</div>
                <div className="text-muted-foreground line-through text-base sm:text-lg font-inter mb-2">PKR 3,500</div>
                <div className="text-3xl sm:text-4xl font-cinzel font-bold text-bronze mb-2">PKR 2,500</div>
                <div className="text-muted-foreground font-inter mb-4 text-sm sm:text-base">Perfect for daily use</div>
                <Button 
                  className="btn-warrior w-full group-hover:scale-105 transition-transform duration-300 relative overflow-hidden text-sm sm:text-base py-3 sm:py-4"
                  onClick={() => window.location.href = '/cart'}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-bronze-glow via-bronze to-bronze-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10 font-bold tracking-wider text-white drop-shadow-lg">Select 50ml</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </Button>
              </div>
            </div>
            
            {/* 100ml Option */}
            <div className="card-warrior p-6 sm:p-8 border-2 border-bronze/30 bg-gradient-to-br from-bronze/5 to-bronze-glow/10 relative group hover:border-bronze/50 transition-all duration-300">
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-destructive/20 text-destructive text-xs px-2 sm:px-3 py-1 rounded-full font-inter font-semibold">BEST VALUE</div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-cinzel font-bold text-foreground mb-2">100ml</div>
                <div className="text-muted-foreground line-through text-base sm:text-lg font-inter mb-2">PKR 6,000</div>
                <div className="text-3xl sm:text-4xl font-cinzel font-bold text-bronze mb-2">PKR 4,000</div>
                <div className="text-muted-foreground font-inter mb-4 text-sm sm:text-base">Ultimate luxury experience</div>
                <Button 
                  className="btn-warrior w-full group-hover:scale-105 transition-transform duration-300 relative overflow-hidden text-sm sm:text-base py-3 sm:py-4"
                  onClick={() => window.location.href = '/cart'}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-bronze-glow via-bronze to-bronze-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <span className="relative z-10 font-bold tracking-wider text-white drop-shadow-lg">Select 100ml</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Main CTA Buttons */}
          <div className="flex flex-col gap-4 sm:gap-6 justify-center mb-8 sm:mb-12 max-w-2xl mx-auto">
            <Button 
              className="btn-warrior text-lg sm:text-2xl px-12 sm:px-20 py-6 sm:py-10 relative overflow-hidden group animate-pulse hover:animate-none shadow-2xl"
              onClick={() => window.location.href = '/checkout'}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-bronze-glow via-bronze to-bronze-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Crown className="w-6 sm:w-10 h-6 sm:h-10 mr-2 sm:mr-4 relative z-10" />
              <span className="relative z-10 font-bold tracking-widest text-white drop-shadow-lg">CLAIM YOUR BOTTLE NOW</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Button>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button 
                variant="outline" 
                className="btn-ghost text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 flex-1"
                onClick={() => window.location.href = '/cart'}
              >
                <Shield className="w-4 sm:w-5 h-4 sm:h-5 mr-2 sm:mr-3" />
                Add to Cart
              </Button>
              <Button 
                variant="secondary" 
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 flex-1"
                onClick={() => {
                  window.location.href = '/cart';
                  // Could add toast notification here for reservation confirmation
                }}
              >
                Reserve for Later
              </Button>
            </div>
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