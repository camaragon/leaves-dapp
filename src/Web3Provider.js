import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

const { chains, publicClient } = configureChains([mainnet], [publicProvider()]);

const { connectors } = getDefaultWallets({
  appName: "EDEN: Prelude",
  projectId: "b1a2c3d4e5f6a7b8c9d0e1f2a3b4c5d6",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export const Web3Provider = ({ children }) => {
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
