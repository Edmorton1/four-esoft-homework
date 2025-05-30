import { BookContext } from "@/pages/book/context/BookContext"
import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"
import { useContext } from "react"

function BoldFont() {
  const ctx = useContext(BookContext)!

  const handleChange = () => ctx.toggleBold()
  
  return <FormControlLabel
    label="Жирный шрифт"
    control={<Checkbox checked={ctx.textSettings.bold === true} />}
    onChange={handleChange}
  />
}

export default BoldFont