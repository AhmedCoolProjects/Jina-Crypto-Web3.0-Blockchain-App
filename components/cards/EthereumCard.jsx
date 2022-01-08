import { Paper } from "@mui/material";
import Image from "next/image";
import images from "constants/images";

function EthereumCard() {
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
        <h1>adress</h1>
        <h1 className="text-2xl mt-2 text-left">Ethereum</h1>
      </div>
    </Paper>
  );
}

export default EthereumCard;
