const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-warrior">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-foreground mb-8">
            The <span className="text-bronze-gradient">Essence</span> of Power
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 font-inter leading-relaxed">
            SPARTANS is not just a fragrance—it's an armor for the modern warrior. 
            Forged from the finest ingredients across ancient lands, each note tells 
            a story of conquest, strength, and unwavering determination.
          </p>
          
          {/* Detailed Fragrance Notes */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Top Notes */}
            <div className="card-warrior p-8 text-center">
              <h3 className="font-cinzel text-2xl font-semibold text-bronze mb-4">Top Notes</h3>
              <p className="text-sm text-muted-foreground font-inter mb-3">A fresh burst that opens the scent:</p>
              <div className="space-y-1 text-sm text-foreground font-inter">
                <p>• Bergamot • Lemon • Pineapple</p>
                <p>• Pink Pepper • Blackcurrant</p>
                <p>• Plum • Mandarin</p>
                <p>• Marine accord</p>
              </div>
              <div className="mt-4 text-sm text-bronze font-inter font-semibold">
                The first strike of confidence
              </div>
            </div>
            
            {/* Heart Notes */}
            <div className="card-warrior p-8 text-center">
              <h3 className="font-cinzel text-2xl font-semibold text-bronze mb-4">Heart Notes</h3>
              <p className="text-sm text-muted-foreground font-inter mb-3">The core, blossoming mid-layer:</p>
              <div className="space-y-1 text-sm text-foreground font-inter">
                <p>• Rose • Geranium</p>
                <p>• Jasmine</p>
                <p>• Lily-of-the-valley</p>
              </div>
              <div className="mt-4 text-sm text-bronze font-inter font-semibold">
                The soul of masculine power
              </div>
            </div>
            
            {/* Base Notes */}
            <div className="card-warrior p-8 text-center">
              <h3 className="font-cinzel text-2xl font-semibold text-bronze mb-4">Base Notes</h3>
              <p className="text-sm text-muted-foreground font-inter mb-3">Warm, long-lasting foundation:</p>
              <div className="space-y-1 text-sm text-foreground font-inter">
                <p>• Cedarwood • Patchouli</p>
                <p>• Ambergris • Tonka Bean</p>
                <p>• Vanilla • Musk</p>
              </div>
              <div className="mt-4 text-sm text-bronze font-inter font-semibold">
                The lasting legacy of strength
              </div>
            </div>
          </div>

          {/* Fragrance Family */}
          <div className="border-t border-bronze/20 pt-8 mb-12">
            <h3 className="font-cinzel text-xl font-bold text-bronze mb-6 text-center">🧭 Fragrance Family</h3>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {['Chypre', 'Amber', 'Woody', 'Citrusy', 'Musky'].map((accord) => (
                <span key={accord} className="px-4 py-2 bg-bronze/10 border border-bronze/20 rounded-full text-sm font-inter text-foreground">
                  {accord}
                </span>
              ))}
            </div>
            
            <div className="bg-bronze/5 border border-bronze/20 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-bronze font-inter font-semibold mb-2 text-center">✨ Signature Profile</p>
              <p className="text-muted-foreground font-inter leading-relaxed text-center">
                "Fruity-citrus top, floral heart, and a warm, woody-musky base – it's fresh, sporty, and robust."
              </p>
            </div>
          </div>
          
          <div className="relative">
            <blockquote className="text-2xl md:text-3xl font-cinzel text-foreground italic mb-6">
              "In battle, it's not the armor that protects you—it's the aura you command."
            </blockquote>
            <cite className="text-bronze font-inter font-medium">— Master Perfumer, Irfan</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;