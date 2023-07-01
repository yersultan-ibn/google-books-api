import { Box, Typography } from "@mui/material";
import { Input } from "./Input";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { searchBooks, selectSearchQuery } from "./booksSlice";
import { ThunkDispatch, unwrapResult } from "@reduxjs/toolkit";

export const Header = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const [searchQuery, setSearchQuery] = useState("js");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  // useEffect(() => {
  //   dispatch(searchBooks(searchQuery));
  // }, [dispatch, searchQuery]);

  useEffect(() => {
    if (searchQuery) {
      dispatch(searchBooks(searchQuery))
        .then((action) => {
          const searchResults = action.payload;
          // Обновление состояния вашего приложения на основе результатов поиска
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [dispatch, searchQuery]);

  return (
    <Box className="header">
      <Typography
        component={"h1"}
        sx={{
          "font-size": "30px",
        }}
      >
        Search for books
      </Typography>
      <Input value={searchQuery} onChange={handleInputChange} />
    </Box>
  );
};
