import { useState } from "react";
import CosmeticCard from "@/components/CosmeticCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, SlidersHorizontal } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [rarityFilter, setRarityFilter] = useState("all");

  const marketplaceItems = [
    {
      id: "1",
      name: "Cyber Gloves | Battle-Scarred",
      image: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=400",
      price: 479.99,
      originalPrice: 700.00,
      rarity: "rare",
      condition: "BS",
      floatValue: "0.557033",
      expiryDays: 3,
    },
    {
      id: "2",
      name: "Plasma Knife | Factory New",
      image: "https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=400",
      price: 1138.66,
      originalPrice: 1500.00,
      rarity: "legendary",
      condition: "FN",
      floatValue: "0.0254741",
      expiryDays: 6,
    },
    {
      id: "3",
      name: "Neon Rifle | Factory New",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400",
      price: 485.00,
      originalPrice: 800.00,
      rarity: "epic",
      condition: "FN",
      floatValue: "0.0510209",
      expiryDays: 5,
    },
    {
      id: "4",
      name: "Holographic Knife | Factory New",
      image: "https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=400",
      price: 684.96,
      originalPrice: 950.00,
      rarity: "legendary",
      condition: "FN",
      floatValue: "0.0427824",
      expiryDays: 3,
    },
    {
      id: "5",
      name: "Quantum Gloves | Field-Tested",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400",
      price: 559.00,
      originalPrice: 850.00,
      rarity: "epic",
      condition: "FT",
      floatValue: "0.3751822",
      expiryDays: 3,
      isLocked: true,
    },
    {
      id: "6",
      name: "Digital Rifle | Factory New",
      image: "https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=400",
      price: 942.73,
      originalPrice: 1200.00,
      rarity: "legendary",
      condition: "FN",
      floatValue: "0.0338465",
      expiryDays: 3,
    },
    {
      id: "7",
      name: "Stealth Knife | Factory New",
      image: "https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=400",
      price: 700.00,
      originalPrice: 980.00,
      rarity: "epic",
      condition: "FN",
      floatValue: "0.0457033",
    },
    {
      id: "8",
      name: "Void Knife | Factory New",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400",
      price: 544.99,
      originalPrice: 750.00,
      rarity: "rare",
      condition: "FN",
      floatValue: "0.0310209",
    },
    {
      id: "9",
      name: "Cyber Gloves | Factory New",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400",
      price: 570.00,
      originalPrice: 820.00,
      rarity: "epic",
      condition: "FN",
      floatValue: "0.0427824",
    },
    {
      id: "10",
      name: "Neon Knife | Factory New",
      image: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=400",
      price: 630.00,
      originalPrice: 900.00,
      rarity: "legendary",
      condition: "FN",
      floatValue: "0.0254741",
    },
    {
      id: "11",
      name: "Plasma Gloves | Factory New",
      image: "https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=400",
      price: 880.00,
      originalPrice: 1150.00,
      rarity: "legendary",
      condition: "FN",
      floatValue: "0.0338465",
    },
    {
      id: "12",
      name: "Quantum Knife | Factory New",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400",
      price: 496.00,
      originalPrice: 650.00,
      rarity: "rare",
      condition: "FN",
      floatValue: "0.0457033",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Marketplace</h1>
        <p className="text-muted-foreground">
          Discover and trade unique game cosmetics
        </p>
      </div>

      {/* Filters */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search cosmetics..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>
        
        <div className="flex gap-2">
          <Select value={rarityFilter} onValueChange={setRarityFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Rarity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Rarities</SelectItem>
              <SelectItem value="common">Common</SelectItem>
              <SelectItem value="rare">Rare</SelectItem>
              <SelectItem value="epic">Epic</SelectItem>
              <SelectItem value="legendary">Legendary</SelectItem>
            </SelectContent>
          </Select>
          
          <Button variant="secondary" size="icon">
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Items Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {marketplaceItems.map((item) => (
          <CosmeticCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
