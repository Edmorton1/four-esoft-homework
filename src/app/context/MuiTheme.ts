import type { ThemeType } from "@/app/context/AppContext";
import { createTheme } from "@mui/material/styles";

const muiTheme = (mode: ThemeType) => createTheme({
  palette: {
    mode
  }
})

export default muiTheme