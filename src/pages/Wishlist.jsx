// src/pages/Wishlist.jsx
import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { CATALOG } from "../data/catalog";
import { readWishlist, writeWishlist } from "../lib/wishlist";

export default function Wishlist() {
  const [ids, setIds] = useState(readWishlist());

  useEffect(() => {
    const onUpdate = () => setIds(readWishlist());
    window.addEventListener("wishlist:update", onUpdate);
    return () => window.removeEventListener("wishlist:update", onUpdate);
  }, []);

  const items = useMemo(
    () => CATALOG.filter((p) => ids.includes(p.id)),
    [ids]
  );

  const remove = (id) => {
    const next = ids.filter((x) => x !== id);
    writeWishlist(next);
    setIds(next);
  };

  return (
    <section className="section container">
      <div className="section__header">
        <h1 className="section__title">Your Wishlist</h1>
        <Link to="/products" className="link">Back to Products</Link>
      </div>

      {items.length === 0 ? (
        <div className="card" style={{ padding: 20, textAlign: "center" }}>
          <p className="muted">Your wishlist is empty.</p>
          <Link className="btn btn-primary" to="/products">Browse Products</Link>
        </div>
      ) : (
        <div className="grid grid-3">
          {items.map((p) => (
            <div key={p.id} className="card product">
              <img src={p.img} alt={p.title} />
              <div className="product__info">
                <h4>{p.title}</h4>
                <div className="product__row">
                  <span className="price">${p.price}</span>
                  <button className="btn btn-sm btn-primary">Add to Cart</button>
                </div>
                <div className="product__row">
                  <button className="btn btn-sm btn-outline" onClick={() => remove(p.id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}