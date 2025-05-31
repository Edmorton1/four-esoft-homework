import { memo, useContext, useMemo } from "react"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { AppContext } from "@/app/context/AppContext";
import Button from "@mui/material/Button";

function ToFavorites({id}: {id: string}) {
  const ctx = useContext(AppContext)!
  const handleClick = (id: string) => ctx.toggleFavorite(id)

  const inFavorite = useMemo(() => ctx.favorites.some(e => e === id), [ctx.favorites, id])

  return <Button variant="outlined" color="success" onClick={() => handleClick(id)}>
    <span>{inFavorite ? 'В избранном' : 'В избранное'}</span>
      {inFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon color="error" />}
  </Button>
}

export default memo(ToFavorites)