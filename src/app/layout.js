"use client";

import "./globals.css";
import { ChainProvider } from '@cosmos-kit/react';
import { chains, assets } from 'chain-registry';
import { wallets } from '@cosmos-kit/keplr';
import { wallets as exodus } from '@cosmos-kit/exodus';
import { wallets as okxo } from '@cosmos-kit/okxwallet';

// Import this in your top-level route/layout
import "@interchain-ui/react/styles";

function CosmosApp({ children }) {
  return (
    <ChainProvider
      chains={chains} // supported chains
      assetLists={assets} // supported asset lists
      wallets={[...wallets, ...exodus, ...okxo]} // supported wallets
    >
      {children}
    </ChainProvider>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CosmosApp>
          {children}
        </CosmosApp>
      </body>
    </html>
  );
}
