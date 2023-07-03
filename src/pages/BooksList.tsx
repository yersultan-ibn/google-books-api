import { AnyAction } from "redux";

import { Box, Grid, Typography } from "@mui/material";
import { Book } from "./Book";
import {
  selectBooksList,
  selectSearchQuery,
} from "../features/books/booksSlice";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { searchBooks } from "../features/books/booksSlice";
import Skeleton from "@mui/material/Skeleton";

import axios from "axios";
import { ThunkDispatch, unwrapResult } from "@reduxjs/toolkit";

export const BooksList = (): JSX.Element => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const selectAllBooks = useSelector((state: any) => state);
  const searchQuery = useSelector(selectSearchQuery);
  const status = selectAllBooks.booksArr.status;

  useEffect(() => {
    if (searchQuery) {
      dispatch(searchBooks(searchQuery))
        .then(unwrapResult)
        .catch((error) => {
          console.log(error);
        });
    }
  }, [dispatch, searchQuery]);
  console.log(selectAllBooks);
  const content =
    status == "loading" ? (
      <SkeletonLoading />
    ) : (
      <View selectAllBooks={selectAllBooks} />
    );
  return content;
};

const View = ({ selectAllBooks }: any) => {
  return (
    <Grid container spacing={4}>
      {selectAllBooks?.booksArr?.list ? (
        <Box
          sx={{
            width: "100%",
          }}
        >
          <Typography
            variant="h6"
            component="p"
            sx={{
              display: "flex",
              justifyContent: "center",
              color: "#000",
              marginTop: "70px",
            }}
          >
            Found {selectAllBooks?.booksArr?.list.length} results
          </Typography>
        </Box>
      ) : (
        ""
      )}

      <Box className="book-cards">
        {selectAllBooks?.booksArr?.list &&
          selectAllBooks?.booksArr?.list.map((item: any) => {
            return item && <Book id={item.id} {...item.volumeInfo} />;
          })}
      </Box>
    </Grid>
  );
};
const SkeletonLoading = () => (
  <Box sx={{ p: 1 }}>
    <Typography variant="h4">
      <Skeleton width="250px" />
    </Typography>
    <Grid container wrap="nowrap">
      {Array.from(new Array(3)).map((item, index) => (
        <Box key={index} sx={{ width: 500, marginRight: 1, my: 2 }}>
          <Skeleton variant="rectangular" width={500} height={500} />
          <Box sx={{ pt: 0.5 }}>
            <Skeleton />
            <Skeleton width="60%" />
          </Box>
        </Box>
      ))}
    </Grid>
  </Box>
);
