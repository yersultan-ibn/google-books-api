import { Box, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  loadBooksDetails,
  selectedBookDetails,
} from "../features/books/booksSlice";
import { useEffect } from "react";
import { ThunkDispatch } from "@reduxjs/toolkit";
import notFoundImage from "../images/not-found.jpg";

interface BookDetails {
  volumeInfo: {
    imageLinks: {
      thumbnail: string;
    };
    authors: string[];
    description: string;
    publishedDate: string;
    categories: string;
    language: string;
    title: string;
  };
}

interface SelectedBookState {
  booksArr?: {
    selectedBook?: {
      items: BookDetails[];
    };
  };
}

export const BooksDetails = (): JSX.Element => {
  const { id }: any = useParams();
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const selectedBook = useSelector<SelectedBookState>(
    (state: SelectedBookState) => state
  ) as SelectedBookState;

  useEffect(() => {
    dispatch(loadBooksDetails(id));
  }, [dispatch, id]);

  if (
    selectedBook.booksArr?.selectedBook?.items &&
    selectedBook.booksArr.selectedBook.items.length > 0
  ) {
    const item = selectedBook.booksArr.selectedBook.items[0].volumeInfo;
    const img = item.imageLinks?.thumbnail;
    const authors = item.authors.join(", ");
    const description = item.description?.slice(0, 200) + "...";
    const publishedDate = item.publishedDate;
    const categories = item.categories;
    const language = item.language;
    const title = item.title;

    return (
      <Grid container spacing={2} className="detail-wrapper">
        <Grid item xs={3} className="detail-img">
          <img src={img ? img : notFoundImage} alt="" />
        </Grid>
        <Grid item xs={5}>
          <Typography gutterBottom variant="subtitle1" component="p">
            categories: {categories}
          </Typography>

          <Typography gutterBottom variant="subtitle2" component="p">
            publishedDate: {publishedDate}
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="p">
            language: {language}
          </Typography>
          <Typography gutterBottom variant="h6" component="p">
            title: {title}
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="p">
            authors: {authors}
          </Typography>
          <Typography gutterBottom variant="subtitle2" component="p">
            description: {description}
          </Typography>
        </Grid>
      </Grid>
    );
  }

  return <></>;
};
