# EDEN: Prelude — 10,000 Leaves

A full-stack NFT minting dapp for the Leaves collection. 10,000 unique artist-inspired leaves, each altered by DALL-E to create one-of-a-kind digital art.

**Live site:** [build-livid-five.vercel.app](https://build-livid-five.vercel.app)

**Contract:** [0xdF8B4eA55C76cB8D75798E6C109401359a0D3A19](https://etherscan.io/address/0xdF8B4eA55C76cB8D75798E6C109401359a0D3A19)

**OpenSea:** [10000leaves](https://opensea.io/collection/10000leaves)

## What it does

Users connect their MetaMask wallet, browse the collection, and mint Leaves directly from the site. The smart contract handles minting, supply limits, and pricing on Ethereum mainnet.

The site also includes:
- **The Leaf Challenge** — hidden matching leaves in the collection that reward ETH when found
- **Tree Fund** — a community treasury funded by mint proceeds, governed by NFT holder votes
- Gatekeeper NFTs get 5 votes per token, standard holders get 1

## Stack

**Frontend:** React, Redux, Material UI, React Router

**Web3:** Web3.js, web3-eth-contract, MetaMask wallet integration

**Smart Contract:** Solidity (deployed on Ethereum mainnet)

**Tooling:** Hardhat, react-app-rewired, DALL-E (image generation)

## Running locally

```bash
git clone https://github.com/camaragon/leaves-dapp.git
cd leaves-dapp
npm install
npm start
```

The app runs on `localhost:3000`. You'll need MetaMask installed to connect a wallet.

## Project structure

```
src/
  Components/     # React components (Header, Welcome, Mint, FAQ, etc.)
  Images/         # NFT preview images
  redux/
    blockchain/   # Wallet connection and contract interaction
    data/         # On-chain data fetching
public/
  config/         # ABI and contract configuration
```

## Related

- [Leaves Smart Contract](https://github.com/camaragon/squares-nft-collection-contract) — Solidity contract source
