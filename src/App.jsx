import Home from './mainApp/Home'
import "./App.css"
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react';

// old id: 1cab5bce95497aae5e51411ba1d8a62a
// old id 2: 31ec8e559485056aa559c9108958c2a4
const projectId = "1cab5bce95497aae5e51411ba1d8a62a";

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://stylish-green-fire.quiknode.pro/16db1a5d8cae11dc86ff9b878648a018df2cc305/",
};
const sepolia = {
  chainId: 11155111,
  name: "Sepolia",
  currency: "ETH",
  explorerUrl: "https://rpc.sepolia.org",
  rpcUrl: "https://endpoints.omniatech.io/v1/eth/sepolia/public",
};

const bsc = {
  chainId: 56,
  name: "Binance Smart Chain",
  currency: "BNB",
  explorerUrl: "https://bscscan.com",
  rpcUrl: "https://bsc.drpc.org",
};

// 3. Create a metadata object
const metadata = {
  name: "My Website",
  description: "My Website description",
  url: "https://mywebsite.com", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: "...", // used for the Coinbase SDK
  defaultChainId: 1, // used for the Coinbase SDK
});


// 5. Create a Web3Modal instance
createWeb3Modal({
  ethersConfig,
  chains: [mainnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});


function App() {
  return (
    <>
      <Home />
    </>
  )
}

export default App
