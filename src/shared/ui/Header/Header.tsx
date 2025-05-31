import { AppContext } from "@/app/context/AppContext";
import Search from "@/shared/ui/Header/components/Search/Search";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThemeButton from "@/shared/ui/ThemeButton/ThemeButton";

function Header() {
  const ctx = useContext(AppContext);

  return (
    <>
      <header>
        <AppBar position="fixed">
          <Toolbar>
            <Link to={"/"} style={{all: "unset", cursor: "pointer"}}><Typography>Bibangelion</Typography></Link>
            <Search />
            <ThemeButton />
            <Badge badgeContent={ctx!.favorites.length} color="error" sx={{ml: 1, mr: 2}}>
              <FavoriteIcon />
            </Badge>
            <Link to={"/settings"}><Button variant="contained">Настройки</Button></Link>
          </Toolbar>
        </AppBar>
      </header>

      <Outlet />
    </>
  );
}

export default Header;
