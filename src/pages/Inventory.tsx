import { useState } from "react";
import CosmeticCard from "@/components/CosmeticCard";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Inventory = () => {
  const [sortBy, setSortBy] = useState("recent");

  const ownedItems = [
    {
      id: "1",
      name: "Neon Wings",
      image: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=400",
      price: 15.5,
      rarity: "legendary",
      condition: "FN",
      floatValue: "0.0123456",
      owned: true,
    },
    {
      id: "2",
      name: "Cyber Helmet",
      image: "https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=400",
      price: 8.2,
      rarity: "epic",
      condition: "MW",
      floatValue: "0.0876543",
      owned: true,
    },
    {
      id: "3",
      name: "Holographic Skin",
      image: "https://images.unsplash.com/photo-1614294149010-950b698f72c0?w=400",
      price: 12.0,
      rarity: "rare",
      condition: "FT",
      floatValue: "0.2345678",
      owned: true,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-4xl font-bold mb-2">My Cosmetics</h1>
          <p className="text-muted-foreground">
            {ownedItems.length} items in your collection
          </p>
        </div>

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Recently Added</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="rarity">Rarity</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {ownedItems.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {ownedItems.map((item) => (
            <CosmeticCard key={item.id} {...item} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
            <Package className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">No cosmetics yet</h3>
          <p className="mb-6 text-muted-foreground">
            Start building your collection from the marketplace
          </p>
          <Button className="bg-gradient-primary hover:opacity-90">
            Browse Marketplace
          </Button>
        </div>
      )}
    </div>
  );
};

export default Inventory;
