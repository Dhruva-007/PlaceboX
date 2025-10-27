import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { useWallet } from "@txnlab/use-wallet-react";

export function ConnectWalletButton({ onClick }: { onClick: () => void }) {
  const { activeAccount } = useWallet();

  const truncateAddress = (address: string) => {
    if (!address) return "";
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  return (
    <Button 
      className="gap-2 bg-gradient-accent hover:opacity-90 transition-opacity" 
      onClick={onClick}
    >
      <Wallet className="h-4 w-4" />
      {activeAccount ? truncateAddress(activeAccount.address) : "Connect Wallet"}
    </Button>
  );
}