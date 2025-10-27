import type React from "react";

// FIX 1: Add polyfill for the "global is not defined" runtime error
(window as any).global = window;

// FIX 2: Use URL-based imports to solve the "Could not resolve" compile error
import { NetworkId, WalletId, WalletManager, WalletProvider } from "@txnlab/use-wallet-react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import algosdk from "algosdk";

// Use a public TestNet node
const algodToken = "";
const algodServer = "https://testnet-api.algonode.cloud";
const algodPort = 443;

const algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);

const walletManager = new WalletManager({
  wallets: [
    WalletId.DEFLY,
    WalletId.PERA,
    WalletId.EXODUS,
    {
      id: WalletId.LUTE,
      options: { siteName: "AlgoMarket" },
    },
  ],
  defaultNetwork: NetworkId.TESTNET,
});

export function WalletProviderWrapper({ children }: { children: React.ReactNode }) {
  return (
    <WalletProvider manager={walletManager}>
      {children}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </WalletProvider>
  );
}