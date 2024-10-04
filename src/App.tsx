import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Router>
				<Navbar />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/auth" element={<h1>Auth</h1>} />
          <Route path="/films" element={<h1>Films</h1>} />
          <Route path="/serials" element={<h1>Serials</h1>} />
          <Route path="/lists" element={<h1>Lists</h1>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
