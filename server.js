import express from "express";
import cors from "cors";

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

// demo route
app.get("/", (req, res) => {
  res.send("Backend is running 🏌️‍♂️");
});

// products route
app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, title: "ProDrive X Driver", price: 499 },
    { id: 2, title: "TourSoft Balls (12)", price: 39 },
    { id: 3, title: "All-Weather Glove", price: 24 },
  ]);
});

// cart data (demo in-memory)
let cart = [];

// get cart
app.get("/api/cart", (req, res) => {
  res.json(cart);
});

// add to cart
app.post("/api/cart", (req, res) => {
  const item = req.body;
  cart.push(item);
  res.json({ success: true, cart });
});

// remove item from cart
app.delete("/api/cart/:id", (req, res) => {
  const { id } = req.params;
  cart = cart.filter(item => item.id != id);
  res.json({ success: true, cart });
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});