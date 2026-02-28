import "@rainbow-me/rainbowkit/styles.css";
import { connectorsForWallets, RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import {
  metaMaskWallet,
  coinbaseWallet,
  rainbowWallet,
  injectedWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains([mainnet], [publicProvider()]);

const connectors = connectorsForWallets([
  {
    groupName: "Popular",
    wallets: [
      injectedWallet({ chains }),
      metaMaskWallet({ chains }),
      coinbaseWallet({ appName: "EDEN: Prelude", chains }),
      rainbowWallet({ chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

console.log("[LEAVES] Web3Provider module loaded");

export const Web3Provider = ({ children }) => {
  console.log("[LEAVES] Web3Provider rendering");
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme({
          accentColor: "#8ED14E",
          accentColorForeground: "#1a2332",
          borderRadius: "medium",
          fontStack: "system",
        })}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};
