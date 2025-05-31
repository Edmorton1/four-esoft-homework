import { type BookType } from "@/app/context/AppTypes"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import bookImage from "@/shared/assets/book.png"
import CardActions from "@mui/material/CardActions"
import { Link } from "react-router-dom"
import { BOOK } from "@/CONST/ROUTES"
import ToFavorites from "@/shared/ui/ToFavorites/ToFavorites"
import styles from "@/shared/css/Main.module.scss"
import { memo } from "react"

function BookCard({id, title, author, year, img}: BookType) {
  console.log('CARD RERENDER')
  
  return <Card className={styles.main__cards__card}>
    <Link to={`${BOOK}/${id}${location.search}`} style={{all: "unset", cursor: "pointer"}}>
      <CardHeader 
        title={title}
        subheader={
          <>
            <span>Автор: {author}</span>
            <br />
            <span>Год издания: {year}</span>
          </>
        }
        slotProps={{title: {sx: {fontWeight: 'bold'}}}}
        />
      <CardMedia 
        component={"img"}
        image={img ?? bookImage}
      />
    </Link>

    <CardActions>
      <ToFavorites id={id} />
    </CardActions>
  </Card>
}

export default memo(BookCard)