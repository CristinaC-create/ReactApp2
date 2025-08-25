// src/data/catalog.js
import driverImg from "../assets/driver.jpeg";
import ballsImg from "../assets/balls.jpeg";
import gloveImg from "../assets/glove.jpeg";   // 👈 must exist
import apparelImg from "../assets/apparel.jpeg";
import clubsImg from "../assets/clubs.jpeg";
import accessoriesImg from "../assets/accessories.jpeg";

export const CATALOG = [
  { id: "p1", title: "ProDrive X Driver", price: 499, img: driverImg, category: "clubs" },
  { id: "p2", title: "TourSoft Balls (12)", price: 39, img: ballsImg, category: "balls" },
  { id: "p3", title: "All-Weather Glove", price: 24, img: gloveImg, category: "accessories" },
  { id: "p4", title: "Tour Polo", price: 54, img: apparelImg, category: "apparel" },
  { id: "p5", title: "Fairway 3-Wood", price: 279, img: clubsImg, category: "clubs" },
  { id: "p6", title: "SoftSpin Wedges", price: 119, img: clubsImg, category: "clubs" },
  { id: "p7", title: "Tour Hat", price: 29, img: accessoriesImg, category: "accessories" },
  { id: "p8", title: "Thermal Quarter-Zip", price: 89, img: apparelImg, category: "apparel" },
];
export const CATEGORIES = ["all", "clubs", "balls", "apparel", "accessories"];