import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { User, Wallet, Bell, Shield } from "lucide-react";
import { useWallet } from "@txnlab/use-wallet-react";
import { ConnectWalletButton } from "@/components/ConnectWalletButton";

const Settings = () => {
  const { activeAccount } = useWallet();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">
          Manage your account and preferences
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Profile Settings */}
        <Card className="col-span-2 bg-gradient-card border-border p-6">
          <div className="flex items-center gap-2 mb-6">
            <User className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Profile Settings</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label htmlFor="username">Username</Label>
              <Input id="username" placeholder="Enter username" className="mt-1.5" />
            </div>
            
            <div>
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="Enter email" className="mt-1.5" />
            </div>
            
            <div>
              <Label htmlFor="bio">Bio</Label>
              <Input id="bio" placeholder="Tell us about yourself" className="mt-1.5" />
            </div>
            
            <Button className="bg-gradient-primary hover:opacity-90">
              Save Changes
            </Button>
          </div>
        </Card>

        {/* Wallet Info */}
        <Card className="bg-gradient-card border-border p-6">
          <div className="flex items-center gap-2 mb-6">
            <Wallet className="h-5 w-5 text-accent" />
            <h2 className="text-xl font-semibold">Wallet</h2>
          </div>
          
          <div className="space-y-4">
            <div>
              <Label className="text-sm text-muted-foreground">Connected Wallet</Label>
              <p className="mt-1.5 font-mono text-sm break-all">
                {activeAccount ? activeAccount.address : "Not connected"}
              </p>
            </div>
            
            <ConnectWalletButton />
          </div>
        </Card>

        {/* Notifications */}
        <Card className="col-span-2 bg-gradient-card border-border p-6">
          <div className="flex items-center gap-2 mb-6">
            <Bell className="h-5 w-5 text-primary" />
            <h2 className="text-xl font-semibold">Notifications</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <Label>Trade Notifications</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified when someone wants to trade
                </p>
              </div>
              <Switch />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div>
                <Label>Price Alerts</Label>
                <p className="text-sm text-muted-foreground">
                  Alert when prices change significantly
                </p>
              </div>
              <Switch />
            </div>
            
            <Separator />
            
            <div className="flex items-center justify-between">
              <div>
                <Label>New Listings</Label>
                <p className="text-sm text-muted-foreground">
                  Notify about new marketplace items
                </p>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </Card>

        {/* Security */}
        <Card className="bg-gradient-card border-border p-6">
          <div className="flex items-center gap-2 mb-6">
            <Shield className="h-5 w-5 text-accent" />
            <h2 className="text-xl font-semibold">Security</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Two-Factor Auth</Label>
              <Switch />
            </div>
            
            <Separator />
            
            <Button variant="secondary" className="w-full">
              Change Password
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Settings;
