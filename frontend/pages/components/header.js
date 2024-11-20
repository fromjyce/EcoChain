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
            href="#about"
            className="bg-green-500 text-white px-4 py-2 urbanist font-bold rounded-lg hover:bg-green-600 transition"
          >
            More About Us
          </Link>
          <Link
            href="/register"
            className="bg-green-500 text-white px-4 py-2 urbanist font-bold rounded-lg hover:bg-green-600 transition"
          >
            Sign Up
          </Link>
          <Link
            href="/login"
            className="bg-green-500 text-white px-4 py-2 urbanist font-bold rounded-lg hover:bg-green-600 transition"
          >
            Sign In
          </Link>
        </div>

        {/* Hamburger Menu (Mobile View) */}
        <div className="md:hidden">
          <button
            className="text-green-500 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)} // Toggle menu visibility
          >
            <FaBars className="text-2xl" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <nav className="space-y-4 text-center">
            <Link
              href="#about"
              className="block bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition"
              onClick={() => setMenuOpen(false)} // Close menu after click
            >
              More About Us
            </Link>
            <Link
              href="/register"
              className="block bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </Link>
            <Link
              href="/login"
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
