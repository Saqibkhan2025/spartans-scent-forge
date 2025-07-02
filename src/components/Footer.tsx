import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-obsidian py-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-cinzel text-3xl font-bold text-bronze mb-4">SPARTANS</h3>
            <p className="text-muted-foreground font-inter mb-6 max-w-md">
              A fragrance beyond earth. Crafted for legends who refuse to blend in. 
              Born to conquer, destined to lead.
            </p>
            <p className="text-sm text-muted-foreground font-inter">
              Fragrance by Irfan - Master Perfumer
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-cinzel text-lg font-semibold text-foreground mb-4">Warrior's Path</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-bronze transition-colors font-inter">The Essence</a></li>
              <li><a href="#code" className="text-muted-foreground hover:text-bronze transition-colors font-inter">Spartan Code</a></li>
              <li><a href="#reviews" className="text-muted-foreground hover:text-bronze transition-colors font-inter">Legends Speak</a></li>
              <li><a href="#cta" className="text-muted-foreground hover:text-bronze transition-colors font-inter">Own the Legend</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-cinzel text-lg font-semibold text-foreground mb-4">Join the Brotherhood</h4>
            <ul className="space-y-2">
              <li><span className="text-muted-foreground font-inter">Elite Support</span></li>
              <li><span className="text-muted-foreground font-inter">warriors@spartansfragrance.com</span></li>
              <li><span className="text-muted-foreground font-inter">+1 (555) SPARTAN</span></li>
            </ul>
            
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-bronze/20 rounded-full flex items-center justify-center hover:bg-bronze hover:text-obsidian transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-bronze/20 rounded-full flex items-center justify-center hover:bg-bronze hover:text-obsidian transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-bronze/20 rounded-full flex items-center justify-center hover:bg-bronze hover:text-obsidian transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm font-inter">
              © 2024 SPARTANS Fragrance by Irfan. All rights reserved. Born to conquer.
            </p>
            <div className="flex gap-6 text-sm font-inter">
              <a href="#" className="text-muted-foreground hover:text-bronze transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-bronze transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-bronze transition-colors">Shipping Info</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;