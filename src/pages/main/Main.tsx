import { AppContext } from "@/app/context/AppContext"
import BookCard from "@/pages/main/modules/Card/BookCard"
import Filters from "@/pages/main/modules/Filter/Filters"
import { useContext } from "react"
import styles from "@/shared/css/Main.module.scss"

function Main() {
  const ctx = useContext(AppContext)!

  return <main className={styles.main}>
    <Filters />
    <div className={styles.main__cards}>
      {ctx.filtredBooks.map(book => (<BookCard key={book.id} id={book.id} img={book.img} title={book.title} author={book.author} year={book.year}/>))}
    </div>
  </main>
}

export default Main