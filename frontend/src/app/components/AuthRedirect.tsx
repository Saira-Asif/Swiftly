"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";

export default function AuthRedirect() {
  const { user, isLoaded } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && user) {
      fetch(`/api/get-user-data`)
        .then((res) => res.json())
        .then((data) => {
          if (data.precinct) {
            // Redirect to the gallery if the user has a saved precinct
            router.push(`/gallery?precinct=${encodeURIComponent(data.precinct)}`);
          }
        })
        .catch((err) => console.error("Error fetching user data:", err));
    }
  }, [isLoaded, user, router]);

  return null; // This component only handles the redirect logic
}
