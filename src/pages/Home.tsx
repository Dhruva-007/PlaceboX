import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CosmeticCard from "@/components/CosmeticCard";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Home = () => {
  const featuredItems = [
    {
      id: "1",
      name: "Neon Wings",
      image: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=400",
      price: 15.5,
      rarity: "legendary",
      condition: "FN",
      floatValue: "0.0123456",
    },
    {
      id: "2",
      name: "Cyber Helmet",
      image: "https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=400",
      price: 8.2,
      rarity: "epic",
      condition: "MW",
      floatValue: "0.0876543",
    },
    {
      id: "3",
      name: "Holographic Skin",
      image: "https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=400",
      price: 12.0,
      rarity: "rare",
      condition: "FT",
      floatValue: "0.2345678",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "True Ownership",
      description: "Each cosmetic is an NFT on Algorand blockchain with a unique tag",
    },
    {
      icon: Zap,
      title: "Instant Trading",
      description: "Fast and secure transactions with minimal fees",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Trade with players worldwide in a decentralized marketplace",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Own Your
              <span className="block bg-gradient-accent bg-clip-text text-transparent animate-glow">
                Gaming Style
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trade premium game cosmetics on the Algorand blockchain. True ownership, instant transactions, zero compromises.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/marketplace">
                <Button size="lg" className="gap-2 bg-gradient-primary hover:opacity-90 transition-all animate-glow">
                  Explore Marketplace
                  <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="secondary" className="gap-2">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl border border-border bg-gradient-card p-6 transition-all hover:border-primary/50 hover:shadow-[0_0_30px_rgba(167,107,255,0.2)]"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Featured Items */}
      <section className="container mx-auto px-4 py-16">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold">Featured Cosmetics</h2>
          <Link to="/marketplace">
            <Button variant="ghost" className="gap-2">
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredItems.map((item) => (
            <CosmeticCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
