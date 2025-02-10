"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { client } from "../../../sanityClient";
import { useUser } from "@clerk/clerk-react";
import Image from "next/image";

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

// Create a wrapper component for handling `useSearchParams`
function SearchParamsWrapper({ setPrecinct }: { setPrecinct: (value: string | null) => void }) {
  const searchParams = useSearchParams();
  const urlPrecinct = searchParams.get("precinct");

  useEffect(() => {
    setPrecinct(urlPrecinct);
  }, [urlPrecinct, setPrecinct]);

  return null; // No UI elements needed
}

function GalleryContent() {
  const { user } = useUser(); // Get user from Clerk

  const [products, setProducts] = useState<Product[]>([]);
  const [precinct, setPrecinct] = useState<string | null>(null);

  // Fetch saved precinct from the database
  useEffect(() => {
    if (!precinct && user) {
      fetch(`/api/get-user-data?userId=${user.id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.precinct) {
            setPrecinct(data.precinct); // Use saved precinct if no precinct is in the URL
          }
        })
        .catch((error) => console.error("Error fetching user data:", error));
    }
  }, [user, precinct]);

  // Fetch products based on precinct
  useEffect(() => {
    if (precinct) {
      client
        .fetch(
          `*[_type == "product" && precinct == $precinct]{
            _id, 
            name, 
            price, 
            "imageUrl": image.asset->url, 
            description
          }`,
          { precinct }
        )
        .then((data: Product[]) => setProducts(data))
        .catch((error) => console.error("Error fetching products:", error));
    }
  }, [precinct]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <Suspense fallback={<div>Loading...</div>}>
        <SearchParamsWrapper setPrecinct={setPrecinct} />
      </Suspense>

      <h1 className="text-2xl font-bold mb-4">
        {precinct ? `Gallery for ${precinct}` : "No Precinct Selected"}
      </h1>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="p-4 border rounded-lg shadow-md bg-white"
            >
              <Image
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">${product.price}</p>
              <p className="text-sm text-gray-500 mb-2">
                {product.description}
              </p>
              <Link
                href={`/products/${product._id}`}
                className="text-blue-500 hover:underline"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <button
            className="mt-4 bg-green-600 text-white px-4 py-2 hover:bg-green-800 rounded-md"
            onClick={() => (window.location.href = "/")}
          >
            Select your Precinct
          </button>
        </div>
      )}
    </div>
  );
}

export default GalleryContent;
