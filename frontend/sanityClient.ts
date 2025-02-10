// sanityClient.ts
import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "stf3uck6", 
  dataset: "production", 
  apiVersion: "2025-01-17", 
  useCdn: false, 
  token:
  process.env.SANITY_TOKEN});

// Function to fetch customer data using Clerk's user ID
export const fetchCustomerData = async (userId: string) => {
  const query = `*[_type == "customer" && userId == $userId][0]`;
  try {
    return await client.fetch(query, { userId });
  } catch (error) {
    console.error("Sanity fetch error:", error);
    return null;
  }
};
