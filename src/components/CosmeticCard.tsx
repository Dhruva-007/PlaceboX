import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Info, Lock, Shield } from "lucide-react";

interface CosmeticCardProps {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  rarity: string;
  condition: string;
  floatValue: string;
  expiryDays?: number;
  isLocked?: boolean;
  owned?: boolean;
  onBuy?: (id: string) => void;
  onSell?: (id: string) => void;
}

const CosmeticCard = ({ 
  id, 
  name, 
  image, 
  price, 
  originalPrice, 
  rarity, 
  condition, 
  floatValue, 
  expiryDays, 
  isLocked = false,
  owned = false,
  onBuy,
  onSell 
}: CosmeticCardProps) => {
  const rarityColors = {
    common: "border-muted-foreground/30",
    rare: "border-accent/50",
    epic: "border-primary/50",
    legendary: "border-[#FFD700]/50",
  };

  const conditionColors = {
    BS: "text-orange-500",
    WW: "text-yellow-500",
    FT: "text-green-500",
    MW: "text-cyan-500",
    FN: "text-purple-500",
  };

  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <Card className={`group overflow-hidden bg-card/50 backdrop-blur-sm border-2 ${rarityColors[rarity as keyof typeof rarityColors]} hover:border-primary transition-all duration-300 relative`}>
      {/* Top Price */}
      <div className="flex items-start justify-between p-3 pb-0">
        <div className="text-lg font-bold text-accent">${price.toFixed(2)}</div>
        <Button size="icon" variant="ghost" className="h-6 w-6 text-muted-foreground hover:text-foreground">
          <Info className="h-4 w-4" />
        </Button>
      </div>

      {/* Discount Badge */}
      {discount > 0 && (
        <div className="absolute top-12 left-3 z-10">
          <Badge className="bg-red-500 text-white font-bold">{-discount}%</Badge>
        </div>
      )}

      {/* Lock Badge */}
      {isLocked && (
        <div className="absolute top-12 right-3 z-10">
          <Lock className="h-5 w-5 text-muted-foreground" />
        </div>
      )}

      {/* Item Image */}
      <div className="relative aspect-square overflow-hidden px-4 py-2">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      {/* Currency Symbol */}
      <div className="absolute left-3 bottom-32 z-10">
        <div className="bg-primary/20 rounded-full p-1.5 backdrop-blur-sm">
          <span className="text-primary font-bold text-sm">D</span>
        </div>
      </div>

      {/* Item Details */}
      <div className="p-3 space-y-2 border-t border-border/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`text-xs font-bold ${conditionColors[condition as keyof typeof conditionColors]}`}>
              {condition}
            </span>
            <span className="text-xs text-muted-foreground">{floatValue}</span>
          </div>
          {expiryDays && (
            <Badge variant="secondary" className="gap-1 text-xs">
              <Shield className="h-3 w-3" />
              {expiryDays}d
            </Badge>
          )}
        </div>

        {/* Bottom Price */}
        <div className="flex items-center justify-between pt-1">
          <div className="text-lg font-bold text-accent">${price.toFixed(2)}</div>
          <Button size="icon" variant="ghost" className="h-6 w-6 text-muted-foreground hover:text-foreground">
            <Info className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Hover Actions */}
      <div className="absolute inset-0 bg-background/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 p-4">
        {!owned ? (
          <Button 
            className="bg-gradient-primary hover:opacity-90 transition-opacity"
            onClick={() => onBuy?.(id)}
          >
            Buy for ${price.toFixed(2)}
          </Button>
        ) : (
          <Button 
            variant="secondary"
            onClick={() => onSell?.(id)}
          >
            List for Sale
          </Button>
        )}
      </div>
    </Card>
  );
};

export default CosmeticCard;
