import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Product } from "./Components/Product";
import { ProductDetail } from "./Components/ProductDetail";
import { Favorites } from "./Components/Favorites";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
    
      <nav style={{ display: "flex", gap: "20px", padding: "10px", background: "#f0f0f0" }}>
        <Link to="/">🏠 Home</Link>
        <Link to="/favorites">💖 Favorites</Link>
      </nav>

    
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/property/:id" element={<ProductDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  );
}

export default App;
