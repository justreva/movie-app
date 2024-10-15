import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/home";
import Auth from "./pages/auth";

const App = () => {
  return (
    <>
      <Router>
				<Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/movies" element={<h1>Movies</h1>} />
          <Route path="/serials" element={<h1>Serials</h1>} />
          <Route path="/lists" element={<h1>Lists</h1>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
