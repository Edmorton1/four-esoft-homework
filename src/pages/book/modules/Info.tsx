import { type BookType } from "@/app/context/AppContext";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import bookImage from "@/shared/assets/book.png"

function Info({ book }: { book: BookType }) {
  return (
    <Box sx={{backgroundColor: "background.paper"}}>
      <Container>
        <Stack direction={"row"}>
          <CardMedia
            component={"img"}
            image={book.img ?? bookImage}
            sx={{maxHeight: 600, objectFit: "contain", mr: 3}}
          />
          <Box>
            <Typography variant="h1">{book.title}</Typography>
            <Typography variant="h2">{book.author}</Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Год издания: {book.year}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              ISBN: {book.isbn}
            </Typography>
            <Typography variant="body1">
              {book.description}
            </Typography>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}

export default Info;
