"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa6";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#fefee3ff] shadow-lg">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logos/green_green.png" alt="EcoChain Logo" width={40} height={40} />
            <div className="text-green-500 text-3xl font-bold poppins">EcoChain</div>
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link
            href="/about"
            className="bg-green-500 text-white px-4 py-2 urbanist font-bold rounded-lg hover:bg-green-600 transition"
          >
            More About Us
          </Link>
          <Link
            href="/signup"
            className="bg-green-500 text-white px-4 py-2 urbanist font-bold rounded-lg hover:bg-green-600 transition"
          >
            Sign Up
          </Link>
          <Link
            href="/signin"
            className="bg-green-500 text-white px-4 py-2 urbanist font-bold rounded-lg hover:bg-green-600 transition"
          >
            Sign In
          </Link>
        </div>
        <div className="md:hidden">
          <button
            className="text-green-500 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <nav className="space-y-4 text-center">
            <Link
              href="/about"
              className="block bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              More About Us
            </Link>
            <Link
              href="/signup"
              className="block bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </Link>
            <Link
              href="/signin"
              className="block bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
