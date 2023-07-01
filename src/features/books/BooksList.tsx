import { AnyAction } from "redux";

import { Box, Grid } from "@mui/material";
import { Book } from "./Book";
import { selectBooksList, selectSearchQuery } from "./booksSlice";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
// import { fetchGet } from "./booksAPI";
import { searchBooks } from "./booksSlice";

import axios from "axios";
import { ThunkDispatch, unwrapResult } from "@reduxjs/toolkit";
// import { searchBooks } from "./booksAPI";

export const BooksList = (): JSX.Element => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const { status, error, qty }: any = useSelector(selectBooksList);
  const selectAllBooks = useSelector((state: any) => state);
  const searchQuery = useSelector(selectSearchQuery);

  // useEffect(() => {
  //   if (status === "idle") {
  //     dispatch(loadBooks());
  //   }
  // }, [dispatch, status]);2

  useEffect(() => {
    if (searchQuery) {
      dispatch(searchBooks(searchQuery))
        .then(unwrapResult)
        .catch((error) => {
          console.log(error);
        });
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
  // console.log(
  //   "selectAllBooks?.booksArr?.list",
  //   selectAllBooks?.booksArr?.list.map((item: any) =>
  //     console.log("item", item.volumeInfo)
  //   )
  // );
  return (
    <Grid container spacing={4}>
      <Box className="book-cards">
        {selectAllBooks?.booksArr?.list &&
          selectAllBooks?.booksArr?.list.map((item: any) => {
            return item && <Book {...item.volumeInfo} />;
          })}
      </Box>
    </Grid>
  );
};
