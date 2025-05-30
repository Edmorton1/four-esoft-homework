import { AppContext } from "@/app/context/AppContext"
import BookCard from "@/pages/main/modules/Card/BookCard"
import Filters from "@/pages/main/modules/Filter/Filters"
// import Card from "@mui/material/Card"
import { useContext } from "react"
import styles from "@/shared/css/Main.module.scss"

function Main() {
  const ctx = useContext(AppContext)
  console.log(styles)

  return <main className={styles.main}>
    <Filters />
    <div className={styles.main__cards}>
      {ctx?.filtredBooks.map(book => (<BookCard key={book.id} id={book.id} title={book.title} author={book.author} year={book.year}/>))}
    </div>
  </main>
}

export default Main