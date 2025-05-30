import { BookContext, FONT_SIZE, type sizeType } from "@/pages/book/context/BookContext"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import { useContext } from "react"

function FontSize() {
  const ctx = useContext(BookContext)!
  // const [value, setValue] = useState(ctx.textSettings.size)

  const handleChange = (e: {target: {value: sizeType}}) => ctx.setTextSize(e.target.value)

  // console.log(value)

  return <>
    <label>Размер текста:</label>
    <Select value={ctx.textSettings.size} onChange={handleChange}>
      {Object.entries(FONT_SIZE).map(e => <MenuItem key={e[0]} value={e[0]}>{e[1]}</MenuItem>)}
    </Select>
  </>
}

export default FontSize