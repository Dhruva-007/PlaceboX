import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import { useWallet } from "@txnlab/use-wallet-react";
import ConnectWalletModal from "./ConnectWalletModal";

export function ConnectWalletButton() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { activeAccount, wallets } = useWallet();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const truncateAddress = (address: string) => {
    if (!address) return "";
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  return (
    <>
      <Button 
        className="gap-2 bg-gradient-accent hover:opacity-90 transition-opacity" 
        onClick={openModal}
      >
        <Wallet className="h-4 w-4" />
        {activeAccount ? truncateAddress(activeAccount.address) : "Connect Wallet"}
      </Button>

      <ConnectWalletModal wallets={wallets} isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
