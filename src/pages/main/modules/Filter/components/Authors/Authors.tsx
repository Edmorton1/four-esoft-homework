import { AppContext } from "@/app/context/AppContext"
import Box from "@mui/material/Box"
import Checkbox from "@mui/material/Checkbox"
import Chip from "@mui/material/Chip"
import ListItemText from "@mui/material/ListItemText"
import MenuItem from "@mui/material/MenuItem"
import Select from "@mui/material/Select"
import { useContext } from "react"
import { useSearchParams } from "react-router-dom"

function Authors() {
  const ctx = useContext(AppContext)!
  const [searchParams, setSearchParams] = useSearchParams()

  const authors = [...new Set(ctx.books.map(e => e.author))]
  const selected = ctx.filters.author

  const handleChange = (event: any) => {
    const value: string[] = event.target.value

    ctx.setFilters({ ...ctx.filters, author: value })

    const newParams = new URLSearchParams(searchParams.toString())
    newParams.delete("author")
    value.forEach(author => newParams.append("author", author))
    setSearchParams(newParams)
  }

  return <>
    <Select
      multiple
      value={selected}
      onChange={handleChange}
      renderValue={(selected) => (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
          {(selected as string[]).map((value) => (
            <Chip key={value} label={value} />
          ))}
        </Box>
      )}
      sx={{ minWidth: 300 }}
    >
      {authors.map((author) => (
        <MenuItem key={author} value={author}>
          <Checkbox checked={selected.includes(author)} />
          <ListItemText primary={author} />
        </MenuItem>
      ))}
    </Select>
  </>
}

export default Authors