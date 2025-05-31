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

function Header() {
  const ctx = useContext(AppContext);

  const handleTheme = () => ctx?.toggleTheme();

  return (
    <>
      <header>
        <AppBar position="fixed">
          <Toolbar>
            <Link to={"/"} style={{all: "unset", cursor: "pointer"}}><Typography>Bibangelion</Typography></Link>
            <Search />
            {/* <div>{ctx!.searchQuery}</div> */}
            <Button variant="contained" color="primary" onClick={handleTheme}>
              {localStorage.getItem("theme") === "light" ? "Тёмную" : "Светлую"}
            </Button>
            <Badge badgeContent={ctx!.favorites.length} color="error" sx={{ml: 1}}>
              <FavoriteIcon />
            </Badge>
          </Toolbar>
        </AppBar>
      </header>

      <Outlet />
    </>
  );
}

export default Header;

// <header>
//   <img src="" alt="Логотип" />
//   <input type="text" placeholder="Строка поиска" />
//   <div>Bibangelion</div>
//   <button onClick={handleTheme}>Переключатель темы</button>
// </header>
