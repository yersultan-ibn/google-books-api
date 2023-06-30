const API_BASE_URL = "https://www.googleapis.com/books/v1/";
const API_KEY = "AIzaSyCddxCM4fSUQVeJ9-8xNjQkVHjcE3SLsqI"; // Замените на ваш реальный API-ключ

// Функция для отправки запроса на API и получения ответа
const fetchData = async (url: string) => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error("Request failed");
    }
  } catch (error) {
    console.log(error);
  }
};

// Функция для поиска книг по автору
export const fetchBooksByAuthor = async (author: string) => {
  const url = `${API_BASE_URL}/volumes?q=inauthor:${encodeURIComponent(
    author
  )}&key=${API_KEY}`;
  return fetchData(url);
};

// Функция для поиска книг по ключевым словам
export const fetchBooksByKeywords = async (keywords: string) => {
  const url = `${API_BASE_URL}/volumes?q=${encodeURIComponent(
    keywords
  )}&key=${API_KEY}`;
  return fetchData(url);
};

// Функция для поиска книг по названию
export const fetchBooksByTitle = async (title: string) => {
  const url = `${API_BASE_URL}/volumes?q=intitle:${encodeURIComponent(
    title
  )}&key=${API_KEY}`;
  return fetchData(url);
};
