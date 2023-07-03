import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "../features/Header";
import { BooksList } from "../pages/BooksList";
import { BrowserRouter } from "react-router-dom";
import { BooksPage } from "../pages/BookPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <BooksPage />
      </BrowserRouter>
    </>
  );
}

export default App;
