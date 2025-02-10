"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { SignInButton } from "@clerk/clerk-react";
import AuthRedirect from "./components/AuthRedirect"; // Import the redirect component

export default function Home() {
  const [precinct, setPrecinct] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const precinctOptions = [
    "Precinct 1",
    "Precinct 2",
    "Precinct 5",
    "Precinct 10",
    "Precinct 12",
    "Precinct 35",
  ];

  const handleSearch = async () => {
    if (precinct.trim() === "") {
      setError("Please select a precinct.");
      return;
    }

    setError(null);

    try {
      const res = await fetch("/api/save-precinct", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ precinct }),
      });

      if (res.ok) {
        // Redirect to Gallery after saving precinct
        router.push(`/gallery?precinct=${encodeURIComponent(precinct)}`);
      } else {
        setError("Failed to save precinct. Please try again.");
      }
    } catch (error) {
      console.error("Error saving precinct:", error);
      setError("An error occurred. Please try again.");
    }
  };
  return (
    <div>
      {/* Authentication Redirect Logic */}
      <AuthRedirect />
      {/* Hero Section */}
      <div id="hero-section" className="relative w-full min-h-screen">
        {/* Background Image */}
        <Image
          src="/swiftlyBG.png"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center space-y-6 px-4">
          {/* Heading */}
          <h1 className="text-white text-3xl sm:text-4xl font-bold text-center">
            Order Delivery Near You
          </h1>

          {/* Dropdown for Precinct */}
          <div className="flex flex-col sm:flex-row w-full sm:w-[500px] items-center">
            <div className="relative w-full sm:w-[80%]">
              <select
                value={precinct}
                onChange={(e) => setPrecinct(e.target.value)}
                className="w-full h-14 px-6 text-lg bg-white text-gray-700 rounded-full border-2 border-gray-300 shadow-lg focus:ring-4 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none transition duration-300 ease-in-out hover:shadow-2xl appearance-none"
              >
                <option value="">Select your Precinct</option>
                {precinctOptions.map((precinct) => (
                  <option key={precinct} value={precinct} className="text-lg">
                    {precinct}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleSearch}
              className="mt-4 sm:mt-0 sm:ml-4 px-4 py-2 bg-emerald-700 text-white font-medium rounded-full shadow hover:bg-emerald-900 transition"
            >
              <Image
                src="/search.svg"
                alt="search icon"
                width={30}
                height={30}
              />
            </button>
          </div>
          {/* Display error message if any */}
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          {/* SignIn Button for Saved Address */}
          <div className="w-full sm:w-[500px] flex justify-center mt-4 sm:mt-6">
            <SignInButton>
              <button className="w-auto py-2 px-6 rounded-full border border-gray-300 text-white font-medium shadow hover:bg-white hover:text-black transition-transform duration-300">
                Sign In for Saved Address
              </button>
            </SignInButton>
          </div>
        </div>
      </div>

      {/*Get Started with Swiftly */}
      <div className="w-full py-16 bg-white">
        {/* Rectangle div */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Small div 1 */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg ">
              <Image
                src="/customer.jpg" // Replace with your image path
                alt="customer"
                width={500}
                height={500}
                className="mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold text-center mb-2">
                Customers
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Ready to order from your favorite stores? Create your account
                and get started with Swiftly.
              </p>
              <SignInButton>
                <button className="text-emerald-700 hover:text-emerald-900 text-sm font-medium underline">
                  Create Customer Account
                </button>
              </SignInButton>
            </div>

            {/* Small div 2 */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg ">
              <Image
                src="/business.jpg" // Replace with your image path
                alt="Store"
                width={500}
                height={500}
                className="mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold text-center mb-2">
                Merchants
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Are you a business? Sign up to offer your products on Swiftly.
              </p>
              <Link href="/coming-soon">
                <button className="text-emerald-700 hover:text-emerald-900 text-sm font-medium underline">
                  Business Sign Up
                </button>
              </Link>
            </div>

            {/* Small div 3 */}
            <div className="flex flex-col items-center bg-white p-6 rounded-lg ">
              <Image
                src="/deliveryGuy.jpg" // Replace with your image path
                alt="Rider"
                width={350}
                height={350}
                className="mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold text-center mb-2">
                Deliver with Swiftly
              </h3>
              <p className="text-gray-600 text-center mb-4">
                Join Swiftly as a rider and start delivering quickly and
                efficiently!
              </p>
              <Link href="/coming-soon">
              <button className="text-emerald-700 hover:text-emerald-900 text-sm font-medium underline">
                Start earning
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/*Swift Grocery Delivery */}
      <div className="relative w-full min-h-screen">
        <Image
          src="/bunch_of_fruits.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          priority
        />
        {/* Add this div for an overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="relative max-w-4xl mx-auto text-center px-4 text-white flex flex-col items-center justify-center h-full">
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">
              Everything you need, delivered to your doorstep
            </h2>
            <p className="text-base sm:text-xl mb-4">
              From fresh veggies to frozen meals, fill your cart without
              stepping out.
            </p>
            <button
              onClick={() => {
                document
                  .getElementById("hero-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-emerald-800 hover:bg-emerald-900 text-white py-3 px-6 rounded-full font-medium"
            >
              Shop groceries
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
