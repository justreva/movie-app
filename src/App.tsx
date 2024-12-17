import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import CastDetails from "./pages/PersonDetails/PersonDetails";

import "./index.css";
import Movies from "./pages/Movies/Movies";
import List from "./pages/List/List";
import Error from "./components/Error/Error";
import Profile from "./pages/Profile/Profile";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="layout">
      <Router>
        <div className="layout-header"><Navbar /></div>
        
        <div className="layout-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies mediaType={"movie"} />} />
            <Route path="/serials" element={<Movies mediaType={"tv"} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<Error />} />
            <Route
              path="/movie/:id"
              element={<MovieDetails mediaType={"movie"} />}
            />
            <Route path="/tv/:id" element={<MovieDetails mediaType={"tv"} />} />
            <Route path="/person/:id" element={<CastDetails />} />
            <Route path="/search/:query" element={<List />} />
          </Routes>
        </div>
      <div className="layout-footer"><Footer /></div>
      </Router>
      
    </div>
  );
};

export default App;
