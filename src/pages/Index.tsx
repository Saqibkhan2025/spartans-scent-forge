import Hero from "@/components/Hero";
import About from "@/components/About";
import SpartanCode from "@/components/SpartanCode";
import Reviews from "@/components/Reviews";
import WhyChoose from "@/components/WhyChoose";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <SpartanCode />
      <Reviews />
      <WhyChoose />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
