export const API_BASE_URL = "https://www.googleapis.com/books/v1/volumes?";
export const API_KEY = "AIzaSyCddxCM4fSUQVeJ9-8xNjQkVHjcE3SLsqI";

export const BOOKS_DETAILS = (id: any): any =>
  `https://www.googleapis.com/books/v1/volumes?q=${id}`;
export const BOOKS_SORT = (sort = "relevance"): any =>
  `https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=${sort}&key=AIzaSyCddxCM4fSUQVeJ9-8xNjQkVHjcE3SLsqI`;
// relevance
// newest
// https://www.googleapis.com/books/v1/volumes?q=js&key=AIzaSyCddxCM4fSUQVeJ9-8xNjQkVHjcE3SLsqI
