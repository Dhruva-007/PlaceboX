import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, TrendingUp, Package } from "lucide-react";
import { useWallet } from "@txnlab/use-wallet-react";
import { toast } from "react-toastify";

const Trade = () => {
  const { activeAccount } = useWallet();
  const [selectedItem, setSelectedItem] = useState<string>("");
  const [listingPrice, setListingPrice] = useState("");
  const [auctionStartPrice, setAuctionStartPrice] = useState("");
  const [auctionDuration, setAuctionDuration] = useState("24");

  const ownedItems = [
    { id: "1", name: "Cyber Gloves | Battle-Scarred", image: "https://images.unsplash.com/photo-1614294148960-9aa740632a87?w=400", condition: "BS", floatValue: "0.557033" },
    { id: "2", name: "Plasma Knife | Factory New", image: "https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=400", condition: "FN", floatValue: "0.010209" },
    { id: "3", name: "Neon Armor | Field-Tested", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400", condition: "FT", floatValue: "0.375182" },
  ];

  const activeListings = [
    { id: "1", name: "Cyber Gloves | Battle-Scarred", price: 479.99, type: "listing", endTime: "2 days" },
    { id: "2", name: "Holographic Skin | Factory New", price: 684.96, type: "auction", currentBid: 650.00, bids: 12, endTime: "5 hours" },
  ];

  const handleListForSale = () => {
    if (!activeAccount) {
      toast.error("Please connect your wallet first");
      return;
    }
    if (!selectedItem || !listingPrice) {
      toast.error("Please select an item and set a price");
      return;
    }
    toast.success("Item listed for sale successfully!");
    setSelectedItem("");
    setListingPrice("");
  };

  const handleCreateAuction = () => {
    if (!activeAccount) {
      toast.error("Please connect your wallet first");
      return;
    }
    if (!selectedItem || !auctionStartPrice) {
      toast.error("Please select an item and set starting price");
      return;
    }
    toast.success("Auction created successfully!");
    setSelectedItem("");
    setAuctionStartPrice("");
  };

  const handleCancelListing = (id: string) => {
    toast.success("Listing cancelled");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Trading Hub</h1>
        <p className="text-muted-foreground">
          List items for sale or create auctions
        </p>
      </div>

      <Tabs defaultValue="sell" className="space-y-6">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="sell">Sell</TabsTrigger>
          <TabsTrigger value="auction">Auction</TabsTrigger>
          <TabsTrigger value="active">Active Listings</TabsTrigger>
        </TabsList>

        {/* Sell Tab */}
        <TabsContent value="sell" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Listing Form */}
            <Card className="p-6 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-primary" />
                  List Item for Sale
                </h2>
                <p className="text-sm text-muted-foreground">
                  Set a fixed price for your cosmetic
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="sell-item">Select Item</Label>
                  <Select value={selectedItem} onValueChange={setSelectedItem}>
                    <SelectTrigger id="sell-item">
                      <SelectValue placeholder="Choose an item from your inventory" />
                    </SelectTrigger>
                    <SelectContent>
                      {ownedItems.map((item) => (
                        <SelectItem key={item.id} value={item.id}>
                          {item.name} ({item.condition})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="listing-price">Listing Price (ALGO)</Label>
                  <Input
                    id="listing-price"
                    type="number"
                    placeholder="0.00"
                    value={listingPrice}
                    onChange={(e) => setListingPrice(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Transaction Fee</Label>
                  <div className="text-sm text-muted-foreground">
                    5% platform fee: {listingPrice ? (parseFloat(listingPrice) * 0.05).toFixed(2) : "0.00"} ALGO
                  </div>
                  <div className="text-sm font-semibold text-accent">
                    You'll receive: {listingPrice ? (parseFloat(listingPrice) * 0.95).toFixed(2) : "0.00"} ALGO
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-primary hover:opacity-90"
                  onClick={handleListForSale}
                  disabled={!activeAccount}
                >
                  List for Sale
                </Button>
              </div>
            </Card>

            {/* Preview */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Preview</h3>
              {selectedItem ? (
                <div className="space-y-4">
                  {ownedItems
                    .filter((item) => item.id === selectedItem)
                    .map((item) => (
                      <div key={item.id} className="border border-border rounded-lg overflow-hidden">
                        <div className="aspect-square bg-muted p-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div className="p-4 space-y-2">
                          <h4 className="font-bold">{item.name}</h4>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Float: {item.floatValue}</span>
                            <Badge>{item.condition}</Badge>
                          </div>
                          {listingPrice && (
                            <div className="text-2xl font-bold text-accent">
                              {listingPrice} ALGO
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  <Package className="h-12 w-12 mb-2" />
                  <p>Select an item to preview</p>
                </div>
              )}
            </Card>
          </div>
        </TabsContent>

        {/* Auction Tab */}
        <TabsContent value="auction" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Auction Form */}
            <Card className="p-6 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <Clock className="h-6 w-6 text-primary" />
                  Create Auction
                </h2>
                <p className="text-sm text-muted-foreground">
                  Let buyers bid on your cosmetic
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="auction-item">Select Item</Label>
                  <Select value={selectedItem} onValueChange={setSelectedItem}>
                    <SelectTrigger id="auction-item">
                      <SelectValue placeholder="Choose an item from your inventory" />
                    </SelectTrigger>
                    <SelectContent>
                      {ownedItems.map((item) => (
                        <SelectItem key={item.id} value={item.id}>
                          {item.name} ({item.condition})
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="start-price">Starting Bid (ALGO)</Label>
                  <Input
                    id="start-price"
                    type="number"
                    placeholder="0.00"
                    value={auctionStartPrice}
                    onChange={(e) => setAuctionStartPrice(e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="duration">Auction Duration</Label>
                  <Select value={auctionDuration} onValueChange={setAuctionDuration}>
                    <SelectTrigger id="duration">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="6">6 hours</SelectItem>
                      <SelectItem value="12">12 hours</SelectItem>
                      <SelectItem value="24">24 hours</SelectItem>
                      <SelectItem value="48">48 hours</SelectItem>
                      <SelectItem value="72">72 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Minimum bid increment:</span>
                    <span className="font-semibold">5%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>Platform fee:</span>
                    <span className="font-semibold">5%</span>
                  </div>
                </div>

                <Button 
                  className="w-full bg-gradient-primary hover:opacity-90"
                  onClick={handleCreateAuction}
                  disabled={!activeAccount}
                >
                  Create Auction
                </Button>
              </div>
            </Card>

            {/* Preview */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Auction Preview</h3>
              {selectedItem ? (
                <div className="space-y-4">
                  {ownedItems
                    .filter((item) => item.id === selectedItem)
                    .map((item) => (
                      <div key={item.id} className="border border-border rounded-lg overflow-hidden">
                        <div className="aspect-square bg-muted p-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-full w-full object-contain"
                          />
                        </div>
                        <div className="p-4 space-y-3">
                          <h4 className="font-bold">{item.name}</h4>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">Float: {item.floatValue}</span>
                            <Badge>{item.condition}</Badge>
                          </div>
                          {auctionStartPrice && (
                            <>
                              <div className="space-y-1">
                                <div className="text-sm text-muted-foreground">Starting bid</div>
                                <div className="text-2xl font-bold text-accent">
                                  {auctionStartPrice} ALGO
                                </div>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <Calendar className="h-4 w-4" />
                                <span>Ends in {auctionDuration} hours</span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                </div>
              ) : (
                <div className="h-64 flex flex-col items-center justify-center text-muted-foreground">
                  <Clock className="h-12 w-12 mb-2" />
                  <p>Select an item to preview</p>
                </div>
              )}
            </Card>
          </div>
        </TabsContent>

        {/* Active Listings Tab */}
        <TabsContent value="active" className="space-y-6">
          <Card className="p-6">
            <h2 className="text-2xl font-bold mb-6">Your Active Listings</h2>
            
            {activeListings.length > 0 ? (
              <div className="space-y-4">
                {activeListings.map((listing) => (
                  <div key={listing.id} className="flex items-center justify-between p-4 border border-border rounded-lg hover:border-primary/50 transition-colors">
                    <div className="space-y-1">
                      <h3 className="font-bold">{listing.name}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          Ends in {listing.endTime}
                        </span>
                        {listing.type === "auction" && (
                          <Badge variant="secondary">
                            {listing.bids} bids
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        {listing.type === "auction" && listing.currentBid && (
                          <div className="text-sm text-muted-foreground">Current bid</div>
                        )}
                        <div className="text-xl font-bold text-accent">
                          ${listing.currentBid || listing.price}
                        </div>
                      </div>
                      <Button 
                        variant="destructive" 
                        size="sm"
                        onClick={() => handleCancelListing(listing.id)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center text-muted-foreground">
                <Package className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p>No active listings</p>
                <p className="text-sm mt-2">Create a listing or auction to get started</p>
              </div>
            )}
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Trade;
