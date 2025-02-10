"use client";

import { useState, useEffect } from "react";

const Cart = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {if (typeof window !== "undefined") {
    // Ensure code runs only in the browser
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartItems(storedCart);
  }
}, []);

  return (
    <div className="min-h-screen flex flex-col mx-auto p-6">
      <h1 className=" text-center text-2xl font-bold">Shopping Cart</h1>
      {cartItems.length > 0 ? (
        <ul className="mt-4">
          {cartItems.map((item, index) => (
            <li key={index} className="mb-2">
              {item.name} - {item.price} USD
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center"><p>Your cart is empty.</p></div>
      )}
      <button className="mt-4 bg-green-600 text-white px-4 py-2 hover:bg-green-800" onClick={() => window.location.href = "/gallery"}>
        Start Shopping
      </button>
    </div>
  );
};

export default Cart;
