"use client";
import { useEffect, useState } from 'react';
import Head from "next/head";
import Footer from "./components/footer";

export default function SignIn() {
  const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
  return (
    <>
      <Head>
        <title>Sign Up | EcoChain</title>
        <meta name="description" content="Create an account with EcoChain and join the green revolution." />
      </Head>
      <div className="signup-top-spacer bg-[#fefee3ff]"></div>
      <main className="bg-[#fefee3ff] flex items-center justify-center">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg flex overflow-hidden">
          <div className="w-1/2 p-8">
            <h2 className="text-2xl font-bold text-center poppins text-[#102409]">Sign Up for EcoChain</h2>
            <form className="mt-6">
              <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-bold kumbh_sans text-[#2c6e49ff]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-bold kumbh_sans text-[#2c6e49ff]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-bold kumbh_sans text-[#2c6e49ff]">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="Create a password"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="confirmPassword" className="block text-sm font-bold kumbh_sans text-[#2c6e49ff]">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  placeholder="Confirm your password"
                  required
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white font-bold urbanist py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition"
                >
                  Sign Up
                </button>
              </div>
            </form>
            <p className="mt-4 text-sm text-[#2c6e49ff] font-bold poppins text-center">
            Already have an account?{" "}
              <a href="/signin" className="text-green-500 hover:underline hover:text-[#102409]">
                Sign In
              </a>
            </p>
          </div>
          <div className="w-1/2 bg-green-500 text-white flex flex-col items-center justify-center">
            <img
              src="/logos/white_yellow.png"
              alt="EcoChain Logo"
              className="h-32 w-auto mb-4"
            />
            <h3 className="text-xl font-bold poppins text-[#fefee3ff]">Join the Green Revolution!</h3>
            <p className="mt-2 text-[#fefee3ff] kumbh_sans font-semibold text-center">
              Empowering businesses with sustainable logistics for a greener tomorrow.
            </p>
          </div>
        </div>
      </main>
      <div className="signup-bottom-spacer bg-[#fefee3ff]"></div>
      <Footer />
    </>
  );
}
