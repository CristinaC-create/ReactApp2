import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// Your pages
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import Fitting from "./pages/Fitting.jsx";
import Cart from "./pages/Cart.jsx"; // uses context

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container" style={{ padding: 20 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/fitting" element={<Fitting />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
    </>
  );
}