import { useMemo, useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { CATALOG, CATEGORIES } from "../data/catalog";
import { readWishlist, toggleWishlistId } from "../lib/wishlist";
import { useCart } from "../context/CartContext"; // ✅ hook

export default function Products() {
  const { addToCart } = useCart(); // ✅ from context
  const { search } = useLocation();
  const initial = new URLSearchParams(search).get("category") || "all";

  const [active, setActive] = useState(
    CATEGORIES.includes(initial) ? initial : "all"
  );
  const [wishlist, setWishlist] = useState(readWishlist());

  // keep active tab in sync with URL
  useEffect(() => {
    const q = new URLSearchParams(search).get("category") || "all";
    if (CATEGORIES.includes(q)) setActive(q);
  }, [search]);

  // (optional) keep wishlist in sync if modified elsewhere
  useEffect(() => {
    const onUpdate = () => setWishlist(readWishlist());
    window.addEventListener("wishlist:update", onUpdate);
    return () => window.removeEventListener("wishlist:update", onUpdate);
  }, []);

  // filter items to display
  const items = useMemo(() => {
    if (active === "all") return CATALOG;
    return CATALOG.filter((p) => p.category === active);
  }, [active]);

  const toggleWishlist = (id) => {
    const next = toggleWishlistId(id);
    setWishlist(next);
  };

  return (
    <section className="section container">
      <div className="section__header">
        <h1 className="section__title">Products</h1>
        <Link to="/wishlist" className="link">
          Wishlist ({wishlist.length})
        </Link>
      </div>

      {/* Filter bar */}
      <div
        className="filters"
        style={{ display: "flex", gap: 10, flexWrap: "wrap", margin: "12px 0 20px" }}
      >
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`btn ${active === cat ? "btn-primary" : "btn-outline"}`}
            style={{ textTransform: "capitalize" }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="grid grid-3">
        {items.map((p) => (
          <div key={p.id} className="card product">
            <img src={p.img} alt={p.title} className="product__img" />
            <div className="product__info">
              <h4>{p.title}</h4>
              <div className="product__row">
                <span className="price">${p.price}</span>
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => addToCart(p)} // ✅ minimal change
                >
                  Add to Cart
                </button>
              </div>
              <div className="product__row">
                <button
                  onClick={() => toggleWishlist(p.id)}
                  className={`btn btn-sm ${wishlist.includes(p.id) ? "btn-outline" : "btn-ghost"
                    }`}
                >
                  {wishlist.includes(p.id)
                    ? "♥ In Wishlist"
                    : "♡ Add to Wishlist"}
                </button>
              </div>
            </div>
          </div>
        ))}
        {items.length === 0 && (
          <p className="muted">No products found for this category.</p>
        )}
      </div>
    </section>
  );
}