import Image from "next/image";
import images from "constants/images";
import Link from "next/link";
import NavigationMenu from "@comp/cards/NavigationMenu";
import { useContext, useState } from "react";
import { PATHS_DATA } from "@as/data/constants";
import { IconButton } from "@mui/material";
import { Brightness4, Brightness7, MoreVert } from "@mui/icons-material";
import { AppContext } from "context/AppContext";

function MoblieHeader() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClickOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const [isDark, handleChangeMode] = useContext(AppContext);
  return (
    <header className="flex flex-col md:hidden ">
      <div className="flex flex-row items-center justify-between py-4 px-5">
        <div className="flex flex-row items-center space-x-2 ">
          <Image src={images.logo} alt="LOGO" width={30} height={30} />
          <Link href="/" passHref>
            <h1 className="text-base cursor-pointer font-semibold ">
              Jina Crypto | <sub>Web3.0 Blockchain App</sub>
            </h1>
          </Link>
        </div>
        <div className="flex flex-row items-center space-x-2">
          <IconButton onClick={handleChangeMode}>
            {isDark ? (
              <Brightness7 color="primary" />
            ) : (
              <Brightness4 color="primary" />
            )}
          </IconButton>
          <IconButton color="primary" onClick={handleClickOpenMenu}>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <NavigationMenu
        open={open}
        anchorEl={anchorEl}
        handleCloseMenu={handleCloseMenu}
        data={PATHS_DATA}
      />
      <hr className="h-[0.5px] bg-gray-400 opacity-90 w-full" />
    </header>
  );
}

export default MoblieHeader;
