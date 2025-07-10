import { Button } from "@/components/ui/button";
import heroImage from "@/assets/spartans-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJzcGFydGFuLXBhdHRlcm4iIHg9IjAiIHk9IjAiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgPHBhdGggZD0iTTUwIDUgTDk1IDUwIEw1MCA5NSBMNSA1MFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzkyNzI0MSIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjMiLz4KICAgIDwvcGF0dGVybj4KICA8L2RlZnM+CiAgPHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNzcGFydGFuLXBhdHRlcm4pIi8+Cjwvc3ZnPg==')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="text-bronze font-inter font-medium tracking-wider uppercase text-sm">
                Fragrance by Irfan
              </span>
            </div>
            
            <h1 className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 animate-fade-up">
              <span className="text-bronze-gradient block">SPARTANS</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 font-inter tracking-wide">
              A FRAGRANCE BEYOND EARTH
            </p>
            
            <h2 className="font-cinzel text-2xl md:text-3xl text-foreground mb-8 font-medium animate-fade-up">
              Born to Conquer. Crafted for Legends.
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-lg mx-auto lg:mx-0 font-inter leading-relaxed">
              Experience the scent that defines strength, power, and masculine elegance. 
              Where ancient warrior spirit meets modern sophistication.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="btn-warrior text-xl px-12 py-8 text-2xl relative overflow-hidden group animate-pulse hover:animate-none"
                onClick={() => window.location.href = '/checkout'}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-bronze-glow via-bronze to-bronze-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <span className="relative z-10 font-bold tracking-wider text-white drop-shadow-lg">OWN THE LEGEND</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </Button>
              <Button variant="outline" className="btn-ghost text-lg px-8 py-6">
                Discover Notes
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-6">
              <div className="text-center">
                <div className="text-bronze font-cinzel text-2xl font-bold">6-8H</div>
                <div className="text-muted-foreground text-sm font-inter">Lasting Power</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-bronze font-cinzel text-2xl font-bold">99</div>
                <div className="text-muted-foreground text-sm font-inter">Left in Stock</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-bronze font-cinzel text-2xl font-bold">4.9</div>
                <div className="text-muted-foreground text-sm font-inter">Elite Rating</div>
              </div>
            </div>
          </div>
          
          {/* Product Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-bronze rounded-full blur-3xl opacity-30 scale-150"></div>
              <div className="absolute -inset-20 bg-gradient-to-r from-bronze/10 via-bronze-glow/20 to-bronze/10 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative z-10 group">
                <div className="absolute inset-0 bg-gradient-to-br from-bronze/20 to-transparent rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-700"></div>
                <img 
                  src={heroImage} 
                  alt="SPARTANS Fragrance by Irfan" 
                  className="relative z-10 w-full max-w-lg h-auto object-contain animate-glow group-hover:scale-105 transition-all duration-700"
                  style={{
                    filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.8)) drop-shadow(0 0 80px rgba(183, 141, 89, 0.6)) drop-shadow(0 0 120px rgba(183, 141, 89, 0.3))',
                    background: 'transparent',
                    mixBlendMode: 'normal'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-bronze to-transparent"></div>
        <div className="w-6 h-6 border-2 border-bronze rounded-full mt-2 animate-pulse"></div>
      </div>
    </section>
  );
};

export default Hero;