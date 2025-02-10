"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { fetchCustomerData } from "../../../../sanityClient"; // Function to fetch customer data from Sanity
interface Order {
  _id: string;
  status: string;
}
interface CustomerData {
  name:string;
  email:string;
  phone:number;
  address: string;
  orders?: Order[];
}
const MyAccount = () => {
  const { user, isSignedIn } = useUser();
  const [customerData, setCustomerData] = useState<CustomerData | null>(null);

  useEffect(() => {
    if (isSignedIn && user?.id) {
      fetchCustomerData(user.id).then((data: CustomerData) => setCustomerData(data));
    }
  }, [user, isSignedIn]);

  if (!isSignedIn) return <div className="min-h-screen flex flex-col items-center justify-center"><p className=" text-center text-xl">Please <a className="hover:text-emerald-500" href="/login">log in</a> to view your account.</p></div>;

  return (
    <div className="min-h-screen flex flex-col">
  <div className="flex-grow flex flex-col items-center justify-center p-6">
    <h1 className="text-2xl font-bold">My Account</h1>
    {customerData ? (
      <div className="mt-4 text-center">
        <p><strong>Name:</strong> {customerData.name}</p>
        <p><strong>Email:</strong> {customerData.email}</p>
        <p><strong>Phone:</strong> {customerData.phone}</p>
        <p><strong>Address:</strong> {customerData.address}</p>
        <h2 className="mt-4 text-xl font-semibold">Orders:</h2>
        <ul className="list-disc list-inside">
          {customerData.orders?.map((order: Order) => (
            <li key={order._id}>Order ID: {order._id} - Status: {order.status}</li>
          ))}
        </ul>
      </div>
    ) : (
      <p className="text-lg font-semibold">Loading...</p>
    )}
  </div>
</div>

  );
};

export default MyAccount;
