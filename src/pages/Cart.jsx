import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, updateQty, removeFromCart, total, clearCart } = useCart();

  return (
    <section className="section container">
      <h1 className="section__title">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="muted">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <div key={item.id} className="card cart-item">
                <img src={item.img} alt={item.title} className="cart-img" />
                <div className="cart-info">
                  <h4>{item.title}</h4>
                  <p className="price">${item.price}</p>
                  <div className="cart-actions">
                    <input
                      type="number"
                      min="1"
                      value={item.qty}
                      onChange={(e) =>
                        updateQty(item.id, parseInt(e.target.value) || 1)
                      }
                    />
                    <button
                      className="btn btn-sm btn-outline"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Total: ${total}</h3>
            <button className="btn btn-primary">Proceed to Checkout</button>
            <button className="btn btn-ghost" onClick={clearCart}>
              Clear Cart
            </button>
          </div>
        </>
      )}
    </section>
  );
}