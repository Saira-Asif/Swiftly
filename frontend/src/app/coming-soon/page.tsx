"use client";

import Image from "next/image";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4 text-center">
      {/* Background Image */}
      <Image
        src="/swiftlyBG.png"
        alt="Coming Soon Background"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 opacity-55"
        priority
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center space-y-6">
        <h1 className="text-4xl sm:text-6xl font-bold">Coming Soon</h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
          We're working on something amazing! Stay tuned for updates.
        </p>

        <Link href="/">
          <button className="bg-emerald-800 hover:bg-emerald-900 text-white px-6 py-3 rounded-full text-lg font-medium transition-transform duration-300 shadow-lg hover:scale-105">
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
}
