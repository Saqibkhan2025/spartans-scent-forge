import { Star } from "lucide-react";
import review1 from "@/assets/review-1.jpg";
import review2 from "@/assets/review-2.jpg";
import review3 from "@/assets/review-3.jpg";

const Reviews = () => {
  const reviews = [
    {
      name: "Ahmed Malik",
      image: review1,
      rating: 5,
      title: "Commander of Presence",
      review: "SPARTANS isn't just a fragrance—it's an aura. The moment I wear it, I feel the confidence of ancient warriors flowing through me. The oud and leather notes create an armor of sophistication that lasts 6-8 hours perfectly.",
      profession: "CEO, Karachi"
    },
    {
      name: "Hassan Raza", 
      image: review2,
      rating: 5,
      title: "Legendary Strength",
      review: "Finally, a fragrance that matches my ambition. The depth of SPARTANS commands respect in every meeting. The bronze packaging alone speaks to the quality within. This is what power smells like in Pakistan.",
      profession: "Business Owner, Lahore"
    },
    {
      name: "Saad Khan",
      image: review3, 
      rating: 5,
      title: "Timeless Warrior",
      review: "Being in the fragrance business for years, I can say SPARTANS surpasses international brands. The complexity evolves beautifully—morning strength, afternoon power, evening mystery. Worth every rupee.",
      profession: "Perfumer, Islamabad"
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-gradient-warrior">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-cinzel text-4xl md:text-5xl font-bold text-foreground mb-6">
            Legends <span className="text-bronze-gradient">Speak</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter">
            Warriors from every field of battle share their conquest stories 
            with SPARTANS as their faithful companion.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={review.name}
              className="card-warrior p-8 group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-bronze text-bronze" />
                ))}
              </div>
              
              {/* Title */}
              <h3 className="font-cinzel text-xl font-semibold text-bronze mb-4">
                {review.title}
              </h3>
              
              {/* Review Text */}
              <blockquote className="text-muted-foreground font-inter leading-relaxed mb-6 italic">
                "{review.review}"
              </blockquote>
              
              {/* Reviewer Info */}
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-bronze/30"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-bronze opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                
                <div>
                  <div className="font-inter font-semibold text-foreground">
                    {review.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {review.profession}
                  </div>
                </div>
              </div>
              
              {/* Decorative Element */}
              <div className="mt-6 w-full h-px bg-gradient-to-r from-transparent via-bronze/30 to-transparent"></div>
            </div>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 p-6 card-warrior">
            <div className="text-center">
              <div className="text-bronze font-cinzel text-3xl font-bold">4.9</div>
              <div className="text-muted-foreground text-sm font-inter">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-bronze font-cinzel text-3xl font-bold">500+</div>
              <div className="text-muted-foreground text-sm font-inter">Elite Reviews</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-bronze font-cinzel text-3xl font-bold">98%</div>
              <div className="text-muted-foreground text-sm font-inter">Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;