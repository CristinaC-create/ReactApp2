// src/lib/wishlist.js
const KEY = "wishlist";

export function readWishlist() {
  try {
    return JSON.parse(localStorage.getItem(KEY)) || [];
  } catch {
    return [];
  }
}

export function writeWishlist(ids) {
  localStorage.setItem(KEY, JSON.stringify(ids));
  // let other tabs/components know
  window.dispatchEvent(new Event("wishlist:update"));
}

export function toggleWishlistId(id) {
  const current = readWishlist();
  const next = current.includes(id)
    ? current.filter((x) => x !== id)
    : [...current, id];
  writeWishlist(next);
  return next;
}