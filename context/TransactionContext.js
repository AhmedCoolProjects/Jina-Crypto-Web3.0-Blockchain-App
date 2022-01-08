import { useState, useEffect, createContext } from "react";
import { ethers } from "ethers";
import { contractABI } from "constants/contract";

export const TransactionContext = createContext();

export const TransactionProvider = ({ children }) => {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [ethereum, setEthereum] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(0);
  const [infos, setInfos] = useState({
    adressTo: "",
    amount: 0,
    keywordGif: "",
    message: "",
  });
  useEffect(() => {
    if (localStorage.getItem("transactionCount")) {
      setTransactionCount(localStorage.getItem("transactionCount"));
    }
  }, [transactionCount]);
  useEffect(() => {
    setEthereum(window.ethereum);
    checkIfWalletIsConnected();
  }, []);

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) {
        // return alert("Please connect to MetaMask via its Chrome extension");
        return console.log(
          "Please connect to MetaMask via its Chrome extension"
        );
      }
      const accounts = ethereum.request({ method: "eth_accounts" });
      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        // getAllTransactions();
      } else {
        console.log("No accounts found");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const connectToWallet = async () => {
    try {
      if (!ethereum) {
        return alert("Please connect to MetaMask via its Chrome extension");
      }
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      setCurrentAccount(accounts[0]);
      console.log("Connected to wallet", accounts);
    } catch (error) {
      console.log("Error connecting to wallet", error);
      // throw new Error("Error connecting to wallet");
    }
  };

  const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
      contractABI,
      signer
    );
    return transactionContract;
  };

  const sendTransaction = async () => {
    try {
      if (!ethereum)
        return alert("Please connect to MetaMask via its Chrome extension");
      const transactionContract = getEthereumContract();
      await ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: currentAccount,
            to: infos.adressTo,
            gas: "0x5208",
            value: ethers.utils.parseEther(infos.amount)._hex,
            // data: transactionContract.interface.functions.sendTransaction.encode([
            //   infos.keywordGif,
            //   infos.message,
            // ]),
          },
        ],
      });
      const transactionHash = await transactionContract.addToBlockchain(
        infos.adressTo,
        ethers.utils.parseEther(infos.amount),
        infos.message,
        infos.keywordGif
      );
      setIsLoading(true);
      console.log("Transaction Loading- ", transactionHash.hash);
      await transactionHash.wait();
      setIsLoading(false);
      console.log("Transaction mined-- ", transactionHash.hash);
      const transactionCount = await transactionContract.getTransactionCount();
      setTransactionCount(transactionCount.toNumber());
      localStorage.setItem("transactionCount", transactionCount.toNumber());
    } catch (err) {
      console.log("Error sending transaction", err);
    }
  };

  return (
    <TransactionContext.Provider
      value={{
        connectToWallet,
        currentAccount,
        infos,
        setInfos,
        sendTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
