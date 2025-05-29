import { AppContext, type BookType } from "@/app/context/AppContext"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import bookImage from "@/shared/assets/book.png"
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom"
import { BOOK } from "@/CONST/ROUTES"
import { useContext } from "react"

function BookCard({id, title, author, year}: BookType) {
  const ctx = useContext(AppContext)!
  const handleClick = (id: string) => ctx.toggleFavorite(id)
  
  return <Card sx={{width: 300}}>
    <CardHeader 
      title={title}
      subheader={year}
      />
    <CardMedia 
      component={"img"}
      image={bookImage}
      height={300}
      // width={300}
    />
    <CardActions>
      <Button variant="contained" onClick={() => handleClick(id)}>{ctx.favorites.some(e => e === id) ? "Убрать из избранного" : `Добавить в избранное`}</Button>
      <Button variant="contained"><Link to={`${BOOK}/${id}`}>asd</Link></Button>
    </CardActions>
  </Card>
}

export default BookCard