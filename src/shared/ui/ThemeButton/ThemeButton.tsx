import { AppContext } from "@/app/context/AppContext";
import Button from "@mui/material/Button";
import { useContext } from "react";

function ThemeButton() {
  const ctx = useContext(AppContext);
  
  const handleTheme = () => ctx?.toggleTheme();

  return (
    <Button variant="contained" color="primary" onClick={handleTheme}>
      {localStorage.getItem("theme") === "light" ? "Светлая" : "Тёмная"}
    </Button>
  );
}

export default ThemeButton