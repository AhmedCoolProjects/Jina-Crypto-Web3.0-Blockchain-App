import { Paper } from "@mui/material";
import Image from "next/image";
import images from "constants/images";
import { TransactionContext } from "context/TransactionContext";
import { useContext } from "react";

function EthereumCard() {
  const { currentAccount } = useContext(TransactionContext);
  return (
    <Paper elevation={3} className="p-4">
      <Image
        src={images.ethereumgold}
        alt="Ethereum"
        width={35}
        height={35}
        objectFit="contain"
      />
      <div className="w-full mt-20">
        {currentAccount ? (
          <h1>{`${currentAccount.slice(0, 5)}...${currentAccount.slice(
            currentAccount.length - 4
          )}`}</h1>
        ) : (
          <h1>...</h1>
        )}
        <h1 className="text-2xl mt-2 text-left">Ethereum</h1>
      </div>
    </Paper>
  );
}

export default EthereumCard;
