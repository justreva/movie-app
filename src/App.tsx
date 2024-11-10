import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import CastDetails from "./pages/PersonDetails/PersonDetails";

import "./index.css";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<h1>Movies</h1>} />
            <Route path="/serials" element={<h1>Serials</h1>} />
            <Route path="/favorites" element={<h1>Favorites</h1>} />
            <Route path="*" element={<h1>Error</h1>} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/person/:id" element={<CastDetails />}/>
          </Routes>

      </Router>
    </>
  );
};

export default App;
