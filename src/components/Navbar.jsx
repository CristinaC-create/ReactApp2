import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cartCount } = useCart();

  return (
    <nav style={{ padding: "12px 20px", display: "flex", gap: 12, alignItems: "center" }}>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/wishlist">Wishlist</Link>
      <Link to="/fitting">Fitting</Link>
      <Link to="/cart" style={{ position: "relative" }}>
        Cart
        {cartCount > 0 && (
          <span
            style={{
              position: "absolute",
              top: -6,
              right: -14,
              background: "crimson",
              color: "#fff",
              borderRadius: "999px",
              padding: "2px 6px",
              fontSize: 12,
              lineHeight: 1,
            }}
          >
            {cartCount}
          </span>
        )}
      </Link>
    </nav>
  );
}