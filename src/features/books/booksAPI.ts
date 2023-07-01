export const API_BASE_URL = "https://www.googleapis.com/books/v1/volumes?";
export const API_KEY = "AIzaSyCddxCM4fSUQVeJ9-8xNjQkVHjcE3SLsqI"; // Замените на ваш реальный API-ключ

export const ALL_BOOKS =
  "https://www.googleapis.com/books/v1/volumes?q=javascript:keyes&key=AIzaSyCddxCM4fSUQVeJ9-8xNjQkVHjcE3SLsqI";
  // https://www.googleapis.com/books/v1/volumes?q=javascript:keyes&key=AIzaSyCddxCM4fSUQVeJ9-8xNjQkVHjcE3SLsqI
  // https://www.googleapis.com/books/v1/volumes?jskeyes&key=AIzaSyCddxCM4fSUQVeJ9-8xNjQkVHjcE3SLsqI

// export const fetchGet = async () => {
//   const response = await fetch(
//     "https://www.googleapis.com/books/v1/volumes?q=intitle:your+harry+query&key=AIzaSyCddxCM4fSUQVeJ9-8xNjQkVHjcE3SLsqI"
//   );
//   const data = await response.json();
//   return data;
// };

// const fetchData = async (url: string) => {
//   const response = await fetch(url);

//   if (!response.ok) {
//     throw new Error(`Not fetch url: ${url}, status: ${response.status} `);
//   }

//   const data = response.json();
//   return data;
// };

// const searchBooks = async (termSearch: any) => {
//   // q=intitle:your+harry+query&
//   const url = `${API_BASE_URL}q=${termSearch}${API_KEY}`;
//   try {
//     const books = await fetchData(url);
//     console.log("books searchBooks", books);
//   } catch (error) {
//     console.error(error);
//   }
// };
// export { searchBooks };
