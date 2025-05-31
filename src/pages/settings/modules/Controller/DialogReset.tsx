import { AppContext } from "@/app/context/AppContext"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { useContext } from "react"

function DialogReset({open, onClose}: {open: boolean, onClose: () => void}) {
  const ctx = useContext(AppContext)!

  const handleConfim = () => {ctx.toggleFavorite('resetAll'); onClose()}

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Очистить избранное</DialogTitle>
      <DialogContent>Вы действительно хотите удалить все избранное?</DialogContent>
      <DialogActions>
        <Button onClick={handleConfim} variant="contained">Да</Button>
        <Button onClick={onClose} variant="contained">Нет</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogReset