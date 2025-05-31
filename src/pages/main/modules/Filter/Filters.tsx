import { AppContext } from "@/app/context/AppContext";
import Authors from "@/pages/main/modules/Filter/components/Authors/Authors";
import InputRange from "@/pages/main/modules/Filter/components/InputRange/InputRange";
import Reset from "@/pages/main/modules/Filter/components/Reset/Reset";
import ToggleFavorite from "@/pages/main/modules/Filter/components/ToggleFavorite/ToggleFavorite";
import styles from "@/shared/css/Main.module.scss";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Slide from "@mui/material/Slide";
import { useContext, useState } from "react";

function Filters() {
  const [open, setOpen] = useState(false);
  const ctx = useContext(AppContext)!

  return         <>
      {!open && <Button
        variant={ctx.theme === "dark" ? "contained" : "outlined"}
        onClick={() => setOpen(true)}
        hidden={open}
        sx={{
          position: 'fixed',
          top: 64,
          left: 0,
          zIndex: 1300,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        Фильтры
      </Button>}

      <Slide direction="right" in={open} mountOnEnter unmountOnExit className={styles.main__filters}>
        <Paper
          elevation={4}
          sx={{
            bgcolor: 'background.paper',
          }}
        >
          <Button 
            onClick={() => setOpen(false)}
            variant="contained"
          >Закрыть</Button>
          <InputRange />
          <Authors />
          <ToggleFavorite />
          <Reset />
        </Paper>
      </Slide>
    </>
}

export default Filters;
