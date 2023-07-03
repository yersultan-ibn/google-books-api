import { ChangeEvent } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { Input } from "./Input";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { searchBooks, selectSearchQuery } from "./books/booksSlice";
import { ThunkDispatch, unwrapResult } from "@reduxjs/toolkit";

export const Header = () => {
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  const [searchQuery, setSearchQuery] = useState("js");
  const [categories, setCategories] = useState("all");
  const [sorting, setSorting] = useState("relevance");

  const handleInputChange = (event: any) => {
    setSearchQuery(event.target.value);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setCategories(event.target.value as string);
  };
  // const handleSort = (event: SelectChangeEvent) => {
  //   setSorting(event.target.value as string);
  // };

  // ...

  const handleSort = (event: SelectChangeEvent) => {
    setSorting(event.target.value as string);

    // Отправьте действие searchBooks с обновленным значением сортировки
    dispatch(sorting(event.target.value as string)).catch((error: any) => {
      console.log(error);
    });
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        dispatch(searchBooks(searchQuery))
          .then((action) => {
            const searchResults = action.payload;
            // Update your application state based on the search results
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
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
      <TextField
        id="filled-basic"
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <Box className="sort-wrapper">
        <Box>
          <FormControl
            sx={{
              width: "200px",
              marginRight: "20px",
            }}
          >
            <InputLabel id="demo-simple-select-label">categories</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={categories}
              label="categories"
              onChange={handleChange}
            >
              <MenuItem value="all">all</MenuItem>
              <MenuItem value="art">art</MenuItem>
              <MenuItem value="biography">biography</MenuItem>
              <MenuItem value="computers">computers</MenuItem>
              <MenuItem value="history">history</MenuItem>
              <MenuItem value="medical">medical</MenuItem>
              <MenuItem value="poetry">poetry</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <FormControl
            sx={{
              width: "300px",
            }}
          >
            <InputLabel id="demo-simple-select-label">sorting</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sorting}
              label="relevance"
              onChange={handleSort}
            >
              <MenuItem value="relevance">relevance</MenuItem>
              <MenuItem value="newest">newest</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};
