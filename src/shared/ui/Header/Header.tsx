import { AppContext } from "@/app/context/AppContext";
import Search from "@/shared/ui/Header/components/Search/Search";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import { Outlet } from "react-router-dom";
import FavoriteIcon from '@mui/icons-material/Favorite';

function Header() {
  const ctx = useContext(AppContext);

  const handleTheme = () => ctx?.toggleTheme();

  return (
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography>Bibangelion</Typography>
          <Search />
          {/* <div>{ctx!.searchQuery}</div> */}
          <Button variant="contained" color="inherit" onClick={handleTheme}>{localStorage.getItem('theme') === 'light' ? 'Тёмную' : "Светлую"}</Button>
          <Badge badgeContent={ctx!.favorites.length} color="error">
            <FavoriteIcon />
          </Badge>
        </Toolbar>
      </AppBar>

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
