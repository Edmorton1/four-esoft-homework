import { AppContext } from "@/app/context/AppContext"
import Author from "@/pages/main/modules/Filter/components/Authors/Author"
import { useContext } from "react"

function Authors() {
  const ctx = useContext(AppContext)
  const authors = ctx?.books.map(e => e.author)

  return <>
    <p>Автор:</p>
    {authors?.map(e => <Author key={e} author={e} />)}
  </>
}

export default Authors