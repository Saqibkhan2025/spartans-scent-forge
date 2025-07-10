import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Plus, Minus, Crown, ShoppingCart, Trash2 } from "lucide-react";
import heroImage from "@/assets/spartans-hero.jpg";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, size: "50ml", price: 2500, original: 3500, quantity: 1 },
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items => 
      items.map(item => 
        item.id === id 
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const addSize = (size: "50ml" | "100ml") => {
    const price = size === "50ml" ? 2500 : 4000;
    const original = size === "50ml" ? 3500 : 6000;
    const newId = cartItems.length + 1;
    
    setCartItems(items => [...items, { 
      id: newId, 
      size, 
      price, 
      original, 
      quantity: 1 
    }]);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => sum + ((item.original - item.price) * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <ShoppingCart className="w-24 h-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="font-cinzel text-3xl font-bold text-foreground mb-4">Your Cart is Empty</h1>
            <p className="text-muted-foreground font-inter mb-8">Add the legendary SPARTANS fragrance to your cart</p>
            <Button 
              className="btn-warrior text-lg px-8 py-4"
              onClick={() => window.location.href = '/'}
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="ghost" 
              className="p-2"
              onClick={() => window.location.href = '/'}
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <h1 className="font-cinzel text-3xl font-bold text-foreground">Your Cart</h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <Card key={item.id} className="card-warrior p-6 border-2 border-bronze/30">
                  <div className="flex items-center gap-6">
                    {/* Product Image */}
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <img 
                        src={heroImage} 
                        alt="SPARTANS Fragrance"
                        className="w-full h-full object-contain"
                        style={{
                          filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.3))'
                        }}
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <h3 className="font-cinzel text-xl font-bold text-foreground">SPARTANS Fragrance</h3>
                      <p className="text-muted-foreground font-inter text-sm">By Fragrance by Irfan</p>
                      <p className="text-bronze font-inter font-semibold mt-1">Size: {item.size}</p>
                      
                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center gap-2 bg-background/50 rounded-lg p-2">
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="w-8 h-8 p-0"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="w-8 text-center font-inter font-semibold">{item.quantity}</span>
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="w-8 h-8 p-0"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="text-destructive hover:text-destructive"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 className="w-4 h-4 mr-2" />
                          Remove
                        </Button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground font-inter line-through">
                        PKR {(item.original * item.quantity).toLocaleString()}
                      </div>
                      <div className="text-2xl font-cinzel font-bold text-bronze">
                        PKR {(item.price * item.quantity).toLocaleString()}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}

              {/* Add More Sizes */}
              <Card className="card-warrior p-6 border-2 border-bronze/30 bg-bronze/5">
                <h3 className="font-cinzel text-lg font-bold text-foreground mb-4">Add More Sizes</h3>
                <div className="grid grid-cols-2 gap-4">
                  <Button 
                    variant="outline" 
                    className="btn-ghost"
                    onClick={() => addSize("50ml")}
                  >
                    Add 50ml - PKR 2,500
                  </Button>
                  <Button 
                    variant="outline" 
                    className="btn-ghost"
                    onClick={() => addSize("100ml")}
                  >
                    Add 100ml - PKR 4,000
                  </Button>
                </div>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="card-warrior p-6 border-2 border-bronze/30 sticky top-8">
                <h2 className="font-cinzel text-xl font-bold text-foreground mb-6">Order Summary</h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-inter text-muted-foreground">Subtotal</span>
                    <span className="font-inter text-foreground">PKR {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-inter text-muted-foreground">Launch Savings</span>
                    <span className="font-inter text-destructive">-PKR {savings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-inter text-muted-foreground">Shipping</span>
                    <span className="font-inter text-bronze">FREE</span>
                  </div>
                  <div className="border-t border-bronze/20 pt-4">
                    <div className="flex justify-between text-xl">
                      <span className="font-cinzel font-bold text-foreground">Total</span>
                      <span className="font-cinzel font-bold text-bronze">PKR {subtotal.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <Button 
                  className="btn-warrior w-full text-lg py-6 mt-6 relative overflow-hidden group"
                  onClick={() => window.location.href = '/checkout'}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-bronze-glow via-bronze to-bronze-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Crown className="w-6 h-6 mr-3 relative z-10" />
                  <span className="relative z-10 font-bold tracking-wider text-white drop-shadow-lg">PROCEED TO CHECKOUT</span>
                </Button>

                <div className="mt-6 text-center">
                  <p className="text-xs text-muted-foreground font-inter mb-2">Limited time launch offer</p>
                  <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                    <p className="text-destructive font-inter font-semibold text-sm">
                      Only 47 bottles remaining at this price!
                    </p>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="grid grid-cols-3 gap-2 mt-6 pt-6 border-t border-bronze/20">
                  <div className="text-center">
                    <div className="text-bronze font-cinzel text-lg font-bold">✓</div>
                    <div className="text-xs font-inter text-muted-foreground">Authentic</div>
                  </div>
                  <div className="text-center">
                    <div className="text-bronze font-cinzel text-lg font-bold">✓</div>
                    <div className="text-xs font-inter text-muted-foreground">Free Ship</div>
                  </div>
                  <div className="text-center">
                    <div className="text-bronze font-cinzel text-lg font-bold">✓</div>
                    <div className="text-xs font-inter text-muted-foreground">Warranty</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;