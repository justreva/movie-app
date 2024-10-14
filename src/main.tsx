import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";
import axios from "axios";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTdiYjAzOTZmMjQzMWExYjhmMGU3M2ZjMjEyMDVlNiIsIm5iZiI6MTcyODkzMzMzNi45MDMxMjksInN1YiI6IjY1ZWYzMDU2YWY1OGNiMDE4NjJiZTU0ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oeAEKqFNUGB4V0AGD468I1J8pjXcG-x98W9ti1lmdm4'
  }
};

fetch('https://api.themoviedb.org/3/trending/movie/week?language=en-US', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));