import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home.tsx";
import Movies from "./pages/Movies/Movies";
import Profile from "./pages/Profile/Profile.tsx";
import List from "./pages/List/List.tsx";
import MovieDetails from "./pages/MovieDetails/MovieDetails.tsx";
import CastDetails from "./pages/PersonDetails/PersonDetails.tsx";
import Error from "./components/Error/Error.tsx";

import Navbar from "./components/Navbar/Navbar.tsx";
import Footer from "./components/Footer/Footer.tsx";

import "./index.css";

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
