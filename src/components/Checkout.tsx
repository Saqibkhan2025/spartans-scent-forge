import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Shield, Crown, Truck, CreditCard } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Checkout = () => {
  const [selectedSize, setSelectedSize] = useState("50ml");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: ""
  });
  const { toast } = useToast();

  const pricing = {
    "50ml": { price: 2500, original: 3500 },
    "100ml": { price: 4000, original: 6000 }
  };

  const handleCheckout = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.address) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Order Confirmed!",
      description: `Your SPARTANS ${selectedSize} fragrance will be delivered within 3-5 business days.`,
    });
  };

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="ghost" 
              className="p-2"
              onClick={() => window.location.href = '/cart'}
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <h1 className="font-cinzel text-3xl font-bold text-foreground">Secure Checkout</h1>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Order Summary */}
            <div className="order-2 lg:order-1">
              <Card className="card-warrior p-8 border-2 border-bronze/30">
                <h2 className="font-cinzel text-2xl font-bold text-foreground mb-6">Order Summary</h2>
                
                {/* Product Selection */}
                <div className="space-y-6 mb-8">
                  <div className="flex items-center justify-between p-4 border border-bronze/20 rounded-lg bg-bronze/5">
                    <div>
                      <h3 className="font-cinzel text-lg font-semibold text-foreground">SPARTANS Fragrance</h3>
                      <p className="text-muted-foreground font-inter">By Fragrance by Irfan</p>
                    </div>
                    <Select value={selectedSize} onValueChange={setSelectedSize}>
                      <SelectTrigger className="w-32">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="50ml">50ml</SelectItem>
                        <SelectItem value="100ml">100ml</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Pricing */}
                <div className="space-y-4 border-t border-bronze/20 pt-6">
                  <div className="flex justify-between">
                    <span className="font-inter text-foreground">Subtotal ({selectedSize})</span>
                    <span className="font-inter text-foreground">PKR {pricing[selectedSize].price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-inter text-foreground">Shipping</span>
                    <span className="font-inter text-bronze">FREE</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold border-t border-bronze/20 pt-4">
                    <span className="font-cinzel text-foreground">Total</span>
                    <span className="font-cinzel text-bronze">PKR {pricing[selectedSize].price.toLocaleString()}</span>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-bronze/20">
                  <div className="text-center">
                    <Shield className="w-8 h-8 text-bronze mx-auto mb-2" />
                    <span className="text-xs font-inter text-muted-foreground">Secure Payment</span>
                  </div>
                  <div className="text-center">
                    <Truck className="w-8 h-8 text-bronze mx-auto mb-2" />
                    <span className="text-xs font-inter text-muted-foreground">Free Shipping</span>
                  </div>
                  <div className="text-center">
                    <Crown className="w-8 h-8 text-bronze mx-auto mb-2" />
                    <span className="text-xs font-inter text-muted-foreground">Authentic</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Checkout Form */}
            <div className="order-1 lg:order-2">
              <Card className="card-warrior p-8 border-2 border-bronze/30">
                <h2 className="font-cinzel text-2xl font-bold text-foreground mb-6">Delivery Information</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-inter text-foreground mb-2">Full Name *</label>
                      <Input 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Enter your full name"
                        className="bg-background/50 border-bronze/20"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-inter text-foreground mb-2">Phone Number *</label>
                      <Input 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+92 XXX XXXXXXX"
                        className="bg-background/50 border-bronze/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-inter text-foreground mb-2">Email Address *</label>
                    <Input 
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="irfanumer2022@gmail.com"
                      className="bg-background/50 border-bronze/20"
                    />
                    <p className="text-xs text-muted-foreground mt-1">For any queries: irfanumer2022@gmail.com</p>
                  </div>

                  <div>
                    <label className="block text-sm font-inter text-foreground mb-2">Complete Address *</label>
                    <Input 
                      value={formData.address}
                      onChange={(e) => setFormData({...formData, address: e.target.value})}
                      placeholder="Street address, area, landmark"
                      className="bg-background/50 border-bronze/20"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-inter text-foreground mb-2">City</label>
                      <Select value={formData.city} onValueChange={(value) => setFormData({...formData, city: value})}>
                        <SelectTrigger className="bg-background/50 border-bronze/20">
                          <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="karachi">Karachi</SelectItem>
                          <SelectItem value="lahore">Lahore</SelectItem>
                          <SelectItem value="islamabad">Islamabad</SelectItem>
                          <SelectItem value="rawalpindi">Rawalpindi</SelectItem>
                          <SelectItem value="faisalabad">Faisalabad</SelectItem>
                          <SelectItem value="peshawar">Peshawar</SelectItem>
                          <SelectItem value="quetta">Quetta</SelectItem>
                          <SelectItem value="multan">Multan</SelectItem>
                          <SelectItem value="sialkot">Sialkot</SelectItem>
                          <SelectItem value="gujranwala">Gujranwala</SelectItem>
                          <SelectItem value="hyderabad">Hyderabad</SelectItem>
                          <SelectItem value="bahawalpur">Bahawalpur</SelectItem>
                          <SelectItem value="sargodha">Sargodha</SelectItem>
                          <SelectItem value="sukkur">Sukkur</SelectItem>
                          <SelectItem value="larkana">Larkana</SelectItem>
                          <SelectItem value="sheikhupura">Sheikhupura</SelectItem>
                          <SelectItem value="rahim-yar-khan">Rahim Yar Khan</SelectItem>
                          <SelectItem value="jhang">Jhang</SelectItem>
                          <SelectItem value="dera-ghazi-khan">Dera Ghazi Khan</SelectItem>
                          <SelectItem value="gujrat">Gujrat</SelectItem>
                          <SelectItem value="sahiwal">Sahiwal</SelectItem>
                          <SelectItem value="wah-cantonment">Wah Cantonment</SelectItem>
                          <SelectItem value="mardan">Mardan</SelectItem>
                          <SelectItem value="kasur">Kasur</SelectItem>
                          <SelectItem value="okara">Okara</SelectItem>
                          <SelectItem value="mingora">Mingora</SelectItem>
                          <SelectItem value="nawabshah">Nawabshah</SelectItem>
                          <SelectItem value="chiniot">Chiniot</SelectItem>
                          <SelectItem value="kotri">Kotri</SelectItem>
                          <SelectItem value="khanpur">Khanpur</SelectItem>
                          <SelectItem value="hafizabad">Hafizabad</SelectItem>
                          <SelectItem value="sadiqabad">Sadiqabad</SelectItem>
                          <SelectItem value="mirpur-khas">Mirpur Khas</SelectItem>
                          <SelectItem value="turbat">Turbat</SelectItem>
                          <SelectItem value="abbottabad">Abbottabad</SelectItem>
                          <SelectItem value="muzaffarabad">Muzaffarabad</SelectItem>
                          <SelectItem value="gilgit">Gilgit</SelectItem>
                          <SelectItem value="skardu">Skardu</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-inter text-foreground mb-2">Postal Code</label>
                      <Input 
                        value={formData.postalCode}
                        onChange={(e) => setFormData({...formData, postalCode: e.target.value})}
                        placeholder="75500"
                        className="bg-background/50 border-bronze/20"
                      />
                    </div>
                  </div>

                  {/* Payment Method */}
                  <div className="pt-6 border-t border-bronze/20">
                    <h3 className="font-cinzel text-lg font-semibold text-foreground mb-4">Payment Method</h3>
                    <div className="p-4 border border-bronze/20 rounded-lg bg-bronze/5">
                      <div className="flex items-center gap-3">
                        <CreditCard className="w-6 h-6 text-bronze" />
                        <span className="font-inter text-foreground">Cash on Delivery (COD)</span>
                      </div>
                      <p className="text-sm text-muted-foreground font-inter mt-2">
                        Pay when your SPARTANS fragrance is delivered to your doorstep. For any queries: irfanumer2022@gmail.com
                      </p>
                    </div>
                  </div>

                  <Button 
                    onClick={handleCheckout}
                    className="btn-warrior w-full text-xl py-6 mt-8 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-bronze-glow via-bronze to-bronze-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Crown className="w-6 h-6 mr-3 relative z-10" />
                    <span className="relative z-10 font-bold tracking-wider text-white drop-shadow-lg">CONFIRM ORDER - PKR {pricing[selectedSize].price.toLocaleString()}</span>
                  </Button>

                  <p className="text-xs text-muted-foreground font-inter text-center mt-4">
                    By placing this order, you agree to our terms of service and privacy policy.
                  </p>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;