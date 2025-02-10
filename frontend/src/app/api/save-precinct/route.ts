import { NextRequest, NextResponse } from "next/server";
import { client } from "../../../../sanityClient"; 
import { getAuth } from "@clerk/nextjs/server"; // Correct Clerk import
import { v4 as uuidv4 } from 'uuid';  // UUID for generating unique IDs

export async function POST(req: NextRequest) {
  try {
    // Get authenticated user ID
    const { userId } = getAuth(req); // Correct method to get the authenticated user

    if (!userId) {
      return NextResponse.json({ error: "User is not authenticated" }, { status: 401 });
    }

    // Get the order data from the request body
    const { email, address, precinct } = await req.json(); // Expect the user's email, address, and precinct to be sent

    // Check if the customer already exists in Sanity
    const existingCustomer = await client.fetch(
      `*[_type == "customer" && userId == $userId][0]`, 
      { userId }
    );

    // If the customer exists, update it, otherwise create a new entry
    const result = existingCustomer
      ? await client.createOrReplace({
          _id: existingCustomer._id, // Use the existing customer's _id
          _type: "customer",
          userId,
          email,  
          address,  
          precinct,
        })
      : await client.create({
          _id: uuidv4(),  // Generate a unique _id for new customers
          _type: "customer",
          userId,
          email,
          address,
          precinct,
        });

    return NextResponse.json({ message: "Customer data saved successfully", result }, { status: 200 });
  } catch (error) {
    console.error("Error saving customer data:", error);
    return NextResponse.json({ error: "Failed to save customer data" }, { status: 500 });
  }
}
