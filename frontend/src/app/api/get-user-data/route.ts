import { NextRequest, NextResponse } from "next/server";
import { client } from "../../../../sanityClient";
import { getAuth } from "@clerk/nextjs/server"; 

export async function GET(req: NextRequest) {
  try {
    // Get authenticated user ID from Clerk
    const { userId } = getAuth(req);

    if (!userId) {
      return NextResponse.json({ error: "User is not authenticated" }, { status: 401 });
    }

    // Fetch the user's precinct from the 'customer' document in Sanity
    const userData = await client.fetch(
      `*[_type == "customer" && userId == $userId][0]{ precinct }`,
      { userId }
    );

    if (!userData) {
      return NextResponse.json({ error: "User data not found" }, { status: 404 });
    }

    return NextResponse.json({ precinct: userData.precinct }, { status: 200 });

  } catch (error) {
    console.error("Error fetching user data:", error);
    return NextResponse.json({ error: "Failed to fetch user data" }, { status: 500 });
  }
}
