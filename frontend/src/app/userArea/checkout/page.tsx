"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { fetchCustomerData } from "../../../../sanityClient";
interface CustomerData {
address: string;
}
interface CartItems {
name: string;
price: number;
}

const Checkout = () => {
  const { user, isSignedIn } = useUser();
  const [customerData, setCustomerData] = useState<CustomerData | null>(null);
  const [cartItems, setCartItems] = useState<CartItems[]>([]);

  useEffect(() => {
    if (isSignedIn && user?.id) {
      fetchCustomerData(user.id).then((data) => setCustomerData(data));
    }
    setCartItems(JSON.parse(localStorage.getItem("cart") || "[]"));
  }, [user, isSignedIn]);

  const handlePayment = () => {
    alert("Payment successful!");
    localStorage.removeItem("cart");
    window.location.href = "/my-account";
  };

  if (!isSignedIn) return <div className="min-h-screen flex flex-col items-center justify-center"><p className=" text-center text-xl">Please <a className="hover:text-emerald-500" href="/login">log in</a> to proceed.</p></div>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold">Checkout</h1>
      <h2 className="mt-4 text-xl">Delivery Address</h2>
      {customerData ? (
        <p>{customerData.address}</p>
      ) : (
        <p>Loading address...</p>
      )}

      <h2 className="mt-4 text-xl">Order Summary</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price} USD
          </li>
        ))}
      </ul>

      <button className="mt-4 bg-blue-600 text-white px-4 py-2" onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
};

export default Checkout;
