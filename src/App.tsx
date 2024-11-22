import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import CastDetails from "./pages/PersonDetails/PersonDetails";

import "./index.css";
import Movies from "./pages/Movies/Movies";
import List from "./pages/List/List";
import Error from "./components/Error/Error";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies mediaType={"movie"}/>} />
          <Route path="/serials" element={<Movies mediaType={"tv"}/>} />
          <Route path="/favorites" element={<h1>Favorites</h1>} />
          <Route path="*" element={<Error />} />
          <Route
            path="/movie/:id"
            element={<MovieDetails mediaType={"movie"} />}
          />
          <Route
            path="/tv/:id"
            element={<MovieDetails mediaType={"tv"} />}
          />
          <Route path="/person/:id" element={<CastDetails />} />
          <Route path="/search/:query" element={<List />}/>
        </Routes>
      </Router>
        
    </>
  );
};

export default App;
