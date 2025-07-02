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
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="card-warrior p-8 text-center">
              <h3 className="font-cinzel text-2xl font-semibold text-bronze mb-4">Top Notes</h3>
              <p className="text-muted-foreground font-inter">
                Bergamot, Black Pepper, Pink Pepper
              </p>
              <div className="mt-4 text-sm text-muted-foreground font-inter">
                The first strike of confidence
              </div>
            </div>
            
            <div className="card-warrior p-8 text-center">
              <h3 className="font-cinzel text-2xl font-semibold text-bronze mb-4">Heart Notes</h3>
              <p className="text-muted-foreground font-inter">
                Oud, Cedar, Leather, Tobacco
              </p>
              <div className="mt-4 text-sm text-muted-foreground font-inter">
                The soul of masculine power
              </div>
            </div>
            
            <div className="card-warrior p-8 text-center">
              <h3 className="font-cinzel text-2xl font-semibold text-bronze mb-4">Base Notes</h3>
              <p className="text-muted-foreground font-inter">
                Amber, Sandalwood, Patchouli, Musk
              </p>
              <div className="mt-4 text-sm text-muted-foreground font-inter">
                The lasting legacy of strength
              </div>
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