import Reset from "@/pages/settings/modules/Controller/Reset"
import ThemeButton from "@/shared/ui/ThemeButton/ThemeButton"
import primer from "@/shared/json/primer.json"
import BookCard from "@/pages/main/modules/Card/BookCard"
import { bookArrayAssert } from "@/CONST/TypeGuards"
import styles from "@/shared/css/primer.module.scss"
import AddBooks from "@/pages/settings/modules/AddBooks/AddBooks"

function Settings() {
  bookArrayAssert(primer)
  
  console.log(primer)
  return <main>
    <div>
      Тема: <ThemeButton />
    </div>
    <p>Пример:</p>
    <div className={styles.container}>
      {primer.map(e => <BookCard id={e.id} author={e.author} title={e.title} year={e.year}></BookCard>)}
    </div>
    <br />
    <Reset />
    <br />
    <AddBooks />
  </main>
}

export default Settings