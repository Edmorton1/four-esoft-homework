import type { ThemeType } from "@/app/context/AppContext";
import { createTheme } from "@mui/material/styles";

const muiTheme = (mode: ThemeType) => createTheme({
  palette: {
    mode,
    primary: {
      main: "#c40000"
    },
    background: {
      default: mode === "dark" ? "#242424" : "#ededed",
      paper: mode === "dark" ? "#292929" : "#ffffff"
    }
  }
})

export default muiTheme