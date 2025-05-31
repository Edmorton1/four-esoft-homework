import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import { useContext } from "react"
import { AppContext } from "@/app/context/AppContext"
import { useSearchParams } from "react-router-dom"

function ToggleFavorite() {
  const [searchParams, setSearchParams] = useSearchParams()

  const ctx = useContext(AppContext)!

  const handleClick = () => {
    const filtersIsTrue = ctx.filters.favorites
    const newParams = new URLSearchParams(searchParams)
    newParams.set('favorites', String(!filtersIsTrue))
    setSearchParams(newParams)
    ctx.setFilters({...ctx.filters, favorites: !filtersIsTrue})
  }

  const htmlFor = "input-favorites"

  return <>
    <FormControlLabel
      id={htmlFor}
      label="Только избранные"
      // checked={typeof `params?.favorites === "true"` === 'string'}
      checked={ctx.filters.favorites}
      control={<Checkbox />}
      onChange={handleClick}
    />

    {/* <label htmlFor={htmlFor}>Только избранные</label>
    <input type="checkbox" id={htmlFor} onChange={handleChange} checked={params?.favorites === "true"} /> */}
  </>
}

export default ToggleFavorite