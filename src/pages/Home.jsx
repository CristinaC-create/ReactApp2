
// src/pages/Home.jsx
import { Link } from "react-router-dom";
import heroGolf from "../assets/hero-golf.jpeg";
import ballsImg from "../assets/balls.jpeg";
import clubsImg from "../assets/clubs.jpeg";
import apparelImg from "../assets/apparel.jpeg";
import accessoriesImg from "../assets/accessories.jpeg";

// 👉 add these two imports for Best Sellers:
import driverImg from "../assets/driver.jpeg";
import gloveImg from "../assets/glove.jpeg";

export default function Home() {
  return (
    <div className="home">
      {/* HERO */}
      <section className="hero" style={{ backgroundImage: `url(${heroGolf})` }}>
        <div className="hero-overlay">
          <h1>Prestige Golf Outfitters</h1>
          <p>Clubs, balls, apparel, fittings — everything golf to elevate your game.</p>
          <div className="hero-buttons">
            <Link to="/products" className="btn btn-primary">Shop Now</Link>
            <Link to="/fitting" className="btn btn-ghost">Book a Fitting</Link>
          </div>
        </div>
      </section>

      {/* DISCOVER */}
      <section className="section container">
        <h2 className="section-title">🏌️ Discover the Store</h2>
        <p>
          From tour-proven drivers to breathable polos and tour balls, we stock the
          best gear for every level. Get custom-fit, shop the latest drops, and play
          better.
        </p>
      </section>

      {/* FEATURED CATEGORIES */}
      <section className="section container">
        <h2 className="section-title">Featured Categories</h2>
        <div className="grid grid-4">
          <Link to="/products" className="card category-card">
            <img src={clubsImg} alt="Clubs" />
            <h3>Clubs</h3>
          </Link>

          <Link to="/products" className="card category-card">
            <img src={ballsImg} alt="Balls" />
            <h3>Balls</h3>
          </Link>

          <Link to="/products" className="card category-card">
            <img src={apparelImg} alt="Apparel" />
            <h3>Apparel</h3>
          </Link>

          <Link to="/products" className="card category-card">
            <img src={accessoriesImg} alt="Accessories" />
            <h3>Accessories</h3>
          </Link>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="section container">
        <h2 className="section-title">Best Sellers</h2>
        <div className="grid grid-3">
          <div className="card product-card">
            <img
              src={driverImg}
              alt="ProDrive X Driver"
              style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }}
            />
            <div className="product-info">
              <h4>ProDrive X Driver</h4>
              <div className="price-row">
                <span className="price">$399</span>
                <button className="btn btn-sm btn-outline">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="card product-card">
            <img
              src={ballsImg}
              alt="TourSoft Balls (12)"
              style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }}
            />
            <div className="product-info">
              <h4>TourSoft Balls (12)</h4>
              <div className="price-row">
                <span className="price">$45</span>
                <button className="btn btn-sm btn-outline">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="card product-card">
            <img
              src={gloveImg}
              alt="All-Weather Glove"
              style={{ width: "100%", height: 200, objectFit: "cover", display: "block" }}
            />
            <div className="product-info">
              <h4>All-Weather Glove</h4>
              <div className="price-row">
                <span className="price">$20</span>
                <button className="btn btn-sm btn-outline">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section className="services">
        <div className="service-item">
          <div className="service-icon">🚚</div>
          <h4>Free Shipping</h4>
          <p>On orders over $75</p>
        </div>
        <div className="service-item">
          <div className="service-icon">🔒</div>
          <h4>Secure Checkout</h4>
          <p>Your info is safe with us</p>
        </div>
        <div className="service-item">
          <div className="service-icon">⛳</div>
          <h4>Expert Fittings</h4>
          <p>Get clubs tailored for your swing</p>
        </div>
      </section>

      {/* PROMO */}
      <section className="promo">
        <div className="promo-inner">
          <h3>Summer Sale: Save up to 30%</h3>
          <p>On select drivers, balls, and apparel</p>
          <Link to="/products" className="btn btn-primary">Shop Sale</Link>
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">
        <h3>Join Our Newsletter</h3>
        <p className="muted">
          Get updates on new gear, exclusive offers, and golf tips directly in your inbox.
        </p>
        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email" />
          <button className="btn btn-primary">Subscribe</button>
        </form>
      </section>
    </div>
  );
}