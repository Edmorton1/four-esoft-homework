import DialogReset from "@/pages/settings/modules/Controller/DialogReset"
import Button from "@mui/material/Button"
import { useState } from "react"

function Reset() {
  const [open, setOpen] = useState(false)

  const handleClick = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return <div>
    <Button onClick={handleClick} variant={"contained"}>Сбросить избранное</Button>
    <DialogReset open={open} onClose={handleClose} />
  </div>
}

export default Reset