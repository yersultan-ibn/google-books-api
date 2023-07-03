import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

import notFoundImage from "../images/not-found.jpg";

export const Book = ({ title, imageLinks, authors, categories, id }: any) => {
  // console.log("iddddddd", id);
  return (
    <Card sx={{ maxWidth: 345 }} className="book-card">
      <Box
        sx={{
          height: "400px",
        }}
      >
        <CardMedia
          sx={{
            width: "100%",
            height: "100%",
          }}
          image={!imageLinks?.thumbnail ? notFoundImage : imageLinks?.thumbnail}
          title="green iguana"
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="subtitle1" component="p">
          {categories}
        </Typography>
        <Typography gutterBottom variant="body1" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="subtitle2" component="div">
          {authors}
        </Typography>
      </CardContent>
      <CardActions>
        <Link to={`/books/${id}`}>
          <Button size="small">Share</Button>
        </Link>
        {/* <Button size="small">Learn More</Button> */}
      </CardActions>
    </Card>
  );
};
