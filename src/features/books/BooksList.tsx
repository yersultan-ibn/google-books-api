import { Box, Grid } from "@mui/material";
import { Book } from "./Book";
import {  selectBooksList, selectSearchQuery } from "./booksSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { fetchGet } from "./booksAPI";
import { searchBooks } from "./booksSlice";

import axios from "axios";
// import { searchBooks } from "./booksAPI";

export const BooksList = (): JSX.Element => {
  const dispatch = useDispatch();
  const { status, error, qty }: any = useSelector(selectBooksList);
  const selectAllBooks = useSelector((state: any) => state);
  const searchQuery = useSelector(selectSearchQuery);

  // useEffect(() => {
  //   if (status === "idle") {
  //     dispatch(loadBooks());
  //   }
  // }, [dispatch, status]);

  useEffect(() => {
    if (searchQuery) {
      dispatch(searchBooks(searchQuery));
    }
  }, [dispatch, searchQuery]);

  const [books, setBooks] = useState<any[]>(
    selectAllBooks?.booksArr?.list?.data?.items?.map(
      (item: any) => item.volumeInfo
    )
  );

  const bookArray = selectAllBooks?.booksArr?.list?.data?.items?.map(
    (item: any) => item.volumeInfo
  );

  // const bookArray = selectAllBooks.list;

  // console.log(
  //   selectAllBooks?.booksArr?.list?.data?.items?.map(
  //     (item: any) => item.volumeInfoa
  //   )
  // );
  console.log(bookArray);
  return (
    <Grid container spacing={4}>
      <Box className="book-cards">
        {bookArray && bookArray.map((item: any) => <Book {...item} />)}
      </Box>
    </Grid>
  );
};
