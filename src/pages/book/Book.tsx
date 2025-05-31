import { AppContext } from "@/app/context/AppContext"
import { MAIN } from "@/CONST/ROUTES"
import Info from "@/pages/book/modules/Info"
import Read from "@/pages/book/modules/Read"
import BookProvider from "@/pages/book/context/BookContext"
import Button from "@mui/material/Button"
import { useContext } from "react"
import { Link, useParams } from "react-router-dom"

function Book() {
  const { id } = useParams()
  const appCtx = useContext(AppContext)!

  const book = appCtx.books.find(e => e.id === id)
  // console.log(id)

  if (book) {
    return <BookProvider>
      <main>
        <Link to={`${MAIN}${location.search}`}><Button variant="contained">К списку</Button></Link>
        <Info book={book} />
        <Read />
      </main>
    </BookProvider>
  }


}

export default Book