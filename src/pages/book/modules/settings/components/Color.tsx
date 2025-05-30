import { BookContext, COLORS } from "@/pages/book/context/BookContext"
import FormControl from "@mui/material/FormControl"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormLabel from "@mui/material/FormLabel"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import { useContext } from "react"

function Color() {
  const ctx = useContext(BookContext)!
  
  const handleChange = (e: {target: {value: string}}) => ctx.setTextColor(e.target.value)

  return <FormControl>
    <FormLabel>Цвет текста</FormLabel>
      <RadioGroup onChange={handleChange}>
        {Object.entries(COLORS).map(e => <FormControlLabel checked={e[1] === ctx.textSettings.color} key={e[0]} value={e[1]} label={e[0]} control={<Radio />} />)}
      </RadioGroup>
  </FormControl>
}

export default Color