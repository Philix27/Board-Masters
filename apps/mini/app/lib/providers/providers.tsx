"use client";

import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider, getDefaultConfig } from "@rainbow-me/rainbowkit";
import { celo, celoAlfajores } from "wagmi/chains";
import { WagmiProvider, http } from "wagmi";

export const SettingsContext = createContext<{
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}>({
  isOpen: false,
  setOpen: function (value: React.SetStateAction<boolean>): void {},
});

const projectId = process.env.NEXT_PUBLIC_WC_PROJECT_ID as string;

const rainbowConfig = getDefaultConfig({
  appName: "Rampage",
  projectId: projectId,
  chains: [celo, celoAlfajores],
  ssr: true, // If your dApp uses server side rendering (SSR)
  transports: {
    [celo.id]: http(),
    [celoAlfajores.id]: http(),
  },
});

const queryClient = new QueryClient();

export function AppProviders(props: { children: ReactNode }) {
  const [isOpen, setOpen] = useState<boolean>(false);
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SettingsContext.Provider value={{ isOpen, setOpen }}>
        <WagmiProvider config={rainbowConfig}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>
              {props.children}
              <Toaster className={"bg-primary"} />
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
        <Toaster className={"bg-primary"} />
      </SettingsContext.Provider>
    </ThemeProvider>
  );
}
