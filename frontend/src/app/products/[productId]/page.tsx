"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { client } from "../../../../sanityClient"; 

interface Product {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

export default function ProductDetails() {
  const { productId } = useParams(); 
console.log("Dynamic route productId:", productId); 

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (productId) {

      client
        .fetch(
          `*[_type == "product" && _id == $productId][0]{
            _id,
            name,
            price,
            "imageUrl": image.asset->url,
            description
          }`,
          { productId } 
        )
        .then((data: Product) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
          setLoading(false);
        });
    }
  }, [productId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading product details...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Product not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="max-w-2xl p-4 border rounded-lg shadow-md bg-white">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-600 text-xl mb-2">${product.price}</p>
        <p className="text-gray-500 mb-4">{product.description}</p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
