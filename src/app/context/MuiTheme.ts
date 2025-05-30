import type { ThemeType } from "@/app/context/AppContext";
import { createTheme } from "@mui/material/styles";

const muiTheme = (mode: ThemeType) => createTheme({
  palette: {
    mode,
    background: {
      paper: mode === "dark" ? "#292929" : "#dedede"
    }
  }
})

export default muiTheme