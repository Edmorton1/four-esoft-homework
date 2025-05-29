import { AppContext } from "@/app/context/AppContext"
import BookCard from "@/pages/main/modules/Card/BookCard"
import Filters from "@/pages/main/modules/Filter/Filters"
// import Card from "@mui/material/Card"
import { useContext } from "react"

function Main() {
  const ctx = useContext(AppContext)
  console.log(ctx)

  return <main style={{display: "flex", flexDirection: "column"}}>
    {ctx?.books.map(e => (<BookCard key={e.id} id={e.id} title={e.title} author={e.author} year={e.year}/>))}
    <Filters />
  </main>
}

export default Main