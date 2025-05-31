import Reset from "@/pages/settings/modules/Controller/Reset"
import ThemeButton from "@/shared/ui/ThemeButton/ThemeButton"
import BookCard from "@/pages/main/modules/Card/BookCard"
import styles from "@/shared/css/primer.module.scss"
import AddBooks from "@/pages/settings/modules/AddBooks/AddBooks"
import { useContext } from "react"
import { AppContext } from "@/app/context/AppContext"

function Settings() {
  const ctx = useContext(AppContext)!
  
  // console.log(primer)
  return <main>
    <div>
      Тема: <ThemeButton />
    </div>
    <p>Пример:</p>
    <div className={styles.container}>
      {ctx.books.slice(0, 2).map(e => <BookCard key={e.id} id={e.id} author={e.author} title={e.title} year={e.year}></BookCard>)}
    </div>
    <br />
    <Reset />
    <br />
    <AddBooks />
  </main>
}

export default Settings