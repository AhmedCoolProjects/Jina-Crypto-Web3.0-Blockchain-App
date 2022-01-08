import { Button } from "@mui/material";
import { TransactionContext } from "context/TransactionContext";
import { useContext } from "react";

function WelcomeCard() {
  const { connectToWallet, currentAccount } = useContext(TransactionContext);
  return (
    <div>
      <h1 className="text-4xl font-semibold leading-[3.5rem] opacity-80">
        Welcome to Jina Crypto. Your Blockchain App to exchange across the world
      </h1>
      <h1 className="text-base mb-5 mt-7">
        Explore the crypto world with the help of the Jina Crypto Blockchain
        app. Buy and sell crypto assets, manage your crypto wallet, and more.
      </h1>
      {!currentAccount && (
        <Button
          onClick={connectToWallet}
          color="primary"
          fullWidth
          size="large"
        >
          Connect Wallet
        </Button>
      )}
    </div>
  );
}

export default WelcomeCard;
