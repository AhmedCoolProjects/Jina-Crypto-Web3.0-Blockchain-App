import { Menu, MenuItem } from "@mui/material";
import { useRouter } from "next/router";

function NavigationMenu({ anchorEl, open, handleCloseMenu, data }) {
  const router = useRouter();
  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleCloseMenu}
      onClick={handleCloseMenu}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {data.map((dataItem) => (
        <MenuItem
          className="px-2"
          onClick={() => router.push(dataItem.path)}
          key={dataItem.id}
        >
          <h1 className="mx-3 text-base">{dataItem.title}</h1>
        </MenuItem>
      ))}
    </Menu>
  );
}

export default NavigationMenu;
