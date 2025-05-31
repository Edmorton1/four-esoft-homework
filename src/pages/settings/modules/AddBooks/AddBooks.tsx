import { AppContext } from "@/app/context/AppContext"
import Button from "@mui/material/Button"
import { useContext } from "react"
import newData from "@/shared/json/newData.json"
import { bookArrayAssert } from "@/CONST/TypeGuards"

function  AddBooks() {
  const ctx = useContext(AppContext)!
  
  const handleClick = () => {
    bookArrayAssert(newData)
    newData.forEach(e => ctx.addBook(e))
  }

  return <Button variant="contained" onClick={handleClick}>Добавить книги</Button>
}

export default AddBooks