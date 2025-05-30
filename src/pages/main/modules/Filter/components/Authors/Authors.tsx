import { AppContext } from "@/app/context/AppContext"
import Author from "@/pages/main/modules/Filter/components/Authors/Author"
import Select from "@mui/material/Select"
import { useContext } from "react"

function Authors() {
  const ctx = useContext(AppContext)!
  const authors = [...new Set(ctx.books.map(e => e.author))]

  return <>
    {/* <p>Автор:</p>
    {authors?.map(e => <Author key={e} author={e} />)} */}
    <Select value={authors} multiple>
      {authors?.map(e => <Author author={e} />)}
    </Select>
  </>
}

export default Authors