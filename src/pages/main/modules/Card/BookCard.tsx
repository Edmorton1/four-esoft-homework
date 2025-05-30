import { type BookType } from "@/app/context/AppContext"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import bookImage from "@/shared/assets/book.png"
import CardActions from "@mui/material/CardActions"
import Button from "@mui/material/Button"
import { Link } from "react-router-dom"
import { BOOK } from "@/CONST/ROUTES"
import ToFavorites from "@/shared/ui/ToFavorites/ToFavorites"

function BookCard({id, title, author, year}: BookType) {  
  return <Card sx={{width: 300}}>
    <CardHeader 
      title={title}
      subheader={
        <>
          <span>{author}</span>
          <br />
          <span>Год издания: {year}</span>
        </>
      }
      slotProps={{title: {sx: {fontWeight: 'bold'}}}}
      />
    <CardMedia 
      component={"img"}
      image={bookImage}
      height={300}
      // width={300}
    />
    <CardActions>
      <ToFavorites id={id} />
      <Link to={`${BOOK}/${id}`}><Button variant="contained">asd</Button></Link>
    </CardActions>
  </Card>
}

export default BookCard