import { BrowserProvider, Contract, formatUnits, parseUnits } from "ethers";
import {
  useWeb3ModalProvider,
  useWeb3ModalAccount,
} from "@web3modal/ethers/react";
import toast from "react-hot-toast";
import { NFT_CONTRACT_ADDRESS, NFT_ABI } from "../contracts/contracts";

function useContracts() {
  const { walletProvider } = useWeb3ModalProvider();
  const { address } = useWeb3ModalAccount();

  const getProvider = () => {
    return new BrowserProvider(walletProvider);
  };
  const getSigner = async (provider) => {
    return provider.getSigner();
  };

  const getContract = async (address, abi, signer) => {
    const contract = new Contract(address, abi, signer);
    return contract;
  };

  const mintNFT = async (amount) => {
    console.log({ amount });
    try {
      const provider = getProvider();
      const signer = await getSigner(provider);
      const contract = await getContract(NFT_CONTRACT_ADDRESS, NFT_ABI, signer);

      const totalValue = BigInt(amount) * BigInt("13000000000000000"); // Calculate total value to send

      const tx = await contract.mint(amount, {
        value: totalValue.toString(), // Convert total value to string and pass it as value
      });
      await tx.wait();
      toast.success("NFT minted successfully!");
    } catch (error) {
      console.log(error);
      if (error.message.includes("insufficient funds")) {
        alert("Insufficient funds! Please add ETH to your wallet.");
      } else {
        toast.error("Failed to mint NFT");
      }
    }
  };

  return { mintNFT };
}

export default useContracts;
