"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import {
  SignInButton,
  SignUpButton,
  UserButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";

// Create a UserContext to simulate user address and state
// const UserContext = createContext({
//   userAddress: null,
//   setUserState: () => {},
// });

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const { userAddress, setUserState } = useContext(UserContext);

  // Toggle Menu and Page Scroll
  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      enablePageScroll();
    } else {
      setIsMenuOpen(true);
      disablePageScroll();
    }
  };

  // Close Menu and Enable Scroll
  const closeMenu = () => {
    setIsMenuOpen(false);
    enablePageScroll();
  };

  return (
    <header className="w-full h-[100px] bg-white flex justify-between items-center px-6 shadow-md fixed top-0 left-0 z-50">
      {/* Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href="/">
          <Image
            src="/Swiftly_Logo_Green.png"
            alt="Swiftly logo"
            width={200}
            height={200}
          />
        </Link>
      </div>

      {/* Hamburger Icon (Mobile Only) */}
      <div className="sm:hidden flex items-center" onClick={toggleMenu}>
        <button className="text-black focus:outline-none">
          <Image
            src="/hamburger_icon.svg"
            alt="hamburger-icon"
            width={32}
            height={32}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } z-40 flex flex-col items-center justify-center space-y-8`}
      >
        <button className="absolute top-5 right-5" onClick={closeMenu}>
          <Image src="/cross.svg" alt="Close Icon" width={35} height={35} />
        </button>
        <nav className="flex flex-col items-center gap-8 mt-16 text-xl text-black">
          <Link href="/" onClick={closeMenu} className="hover:text-emerald-700">
            Home
          </Link>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="hover:text-emerald-700" onClick={closeMenu}>
                Sign In
              </button>
            </SignInButton>
            <SignUpButton mode="modal">
              <button className="hover:text-emerald-700" onClick={closeMenu}>
                Sign Up
              </button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
          <Link href="/cart">
            <div
              className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-transform duration-200 ease-in-out"
              title="Cart"
            >
              <Image
                src="/shopping-cart-icon.svg" // Replace with the path to your cart icon
                alt="Cart Icon"
                width={24}
                height={24}
                className="hover:scale-105 transition-transform duration-200 ease-in-out"
              />
            </div>
          </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </nav>
      </div>

      {/* Buttons (Desktop Only) */}
      <div className="hidden sm:flex space-x-4 absolute top-4 right-6">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="px-6 py-2 bg-[#0f2310] text-white font-medium rounded-full shadow hover:bg-black transition">
              Sign In
            </button>
          </SignInButton>
          <SignUpButton mode="modal">
            <button className="px-6 py-2 bg-white text-gray-800 border border-gray-300 font-medium rounded-full shadow hover:bg-gray-100 transition">
              Sign Up
            </button>
          </SignUpButton>
        </SignedOut>
        <SignedIn>
          <Link href="/cart">
            <div
              className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:translate-y-[-2px] transition-transform duration-200 ease-in-out"
              title="Cart"
            >
              <Image
                src="/shopping-cart-icon.svg" // Replace with the path to your cart icon
                alt="Cart Icon"
                width={24}
                height={24}
                className="hover:scale-105 transition-transform duration-200 ease-in-out"
              />
            </div>
          </Link>

          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
