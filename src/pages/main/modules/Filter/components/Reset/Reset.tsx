import { AppContext } from "@/app/context/AppContext"
import paramsSchema from "@/app/context/urlParams/validateParams"
import Button from "@mui/material/Button"
import { useContext } from "react"
import { useSearchParams } from "react-router-dom"

function Reset() {
  const [searchParams, setSearchParams] = useSearchParams()
  const ctx = useContext(AppContext)!

  const handleClick = () => {
    setSearchParams(new URLSearchParams())
    ctx.setFilters(paramsSchema.parse({}))
  }

  return <Button variant="contained" onClick={handleClick}>Сбросить фильтры</Button>
}

export default Reset