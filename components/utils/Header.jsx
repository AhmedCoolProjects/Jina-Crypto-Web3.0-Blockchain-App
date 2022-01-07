import { IconButton, Button } from "@mui/material";
import Link from "next/link";
import { Brightness7, Brightness4 } from "@mui/icons-material";
import { AppContext } from "context/AppContext";
import { useContext } from "react";
import Image from "next/image";
import images from "constants/images";

function Header() {
  const [isDark, handleChangeMode] = useContext(AppContext);
  return (
    <header className="w-full md:flex relative hidden flex-col">
      <div className="w-full justify-between relative flex flex-row py-3">
        <div className="flex items-center flex-row h-full space-x-2">
          <Image
            src={images.logo}
            alt="logo"
            width={50}
            height={50}
            objectFit="contain"
          />
          <Link href="/" passHref>
            <h1 className="text-2xl cursor-pointer font-semibold ">
              Jina Crypto | <sub>Web3.0 Blockchain App</sub>
            </h1>
          </Link>
        </div>
        <div className="space-x-3 flex flex-row items-center">
          <Link href="/about" passHref>
            <Button className="z-10">About</Button>
          </Link>
          <Link href="/about" passHref>
            <Button className="z-10">Exchange</Button>
          </Link>
          <Link href="/about" passHref>
            <Button className="z-10">Wallet</Button>
          </Link>
          <Link href="/login" passHref>
            <Button className="z-10">Login</Button>
          </Link>
          <IconButton onClick={handleChangeMode}>
            {isDark ? (
              <Brightness7 color="primary" />
            ) : (
              <Brightness4 color="primary" />
            )}
          </IconButton>
        </div>
      </div>
      <hr className="h-px bg-gray-400 opacity-90 w-full" />
      <div className="w-full justify-end items-center flex flex-row py-2">
        <div className="flex justify-center flex-row space-x-2"></div>
      </div>
    </header>
  );
}

export default Header;
