"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/context/useAuth';
import Head from "next/head";
import { FaExclamationCircle } from "react-icons/fa";
import Footer from "./components/footer";

export default function SignIn() {
  const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
    const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (login(email, password)) {
      router.push('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };
  return (
    <>
      <Head>
        <title>Sign In | EcoChain</title>
        <meta name="description" content="Log in to EcoChain and access your dashboard." />
      </Head>
      <div className="signin-top-spacer bg-[#fefee3ff]"></div>
      <main className="bg-[#fefee3ff] flex items-center justify-center">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg flex overflow-hidden">
          <div className="w-1/2 p-8">
            <h2 className="text-2xl font-bold text-center poppins text-[#102409]">Sign In to <a href="/" className="text-[#4c956cff] hover:underline hover:text-[#102409]">EcoChain</a></h2>
            <form className="mt-6"  onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-bold kumbh_sans text-[#2c6e49ff]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4c956cff] focus:ring-[#4c956cff]"
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#4c956cff] focus:ring-[#4c956cff]"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full bg-[#4c956cff] text-white font-bold urbanist py-2 px-4 rounded-lg shadow-md hover:bg-green-600 transition"
                >
                  Sign In
                </button>
              </div>
            </form>
            <p className="mt-4 text-sm text-[#2c6e49ff] font-bold poppins text-center">
              Don't have an account?{" "}
              <a href="/signup" className="text-[#4c956cff] hover:underline hover:text-[#102409]">
                Sign Up
              </a>
            </p>
            <div className="mt-6 p-4 bg-yellow-100 border border-yellow-500 rounded-lg flex items-start">
              <FaExclamationCircle className="text-yellow-500 mr-2 signin-note-icon" />
              <p className="text-sm">
                <strong className="text-[#102409]">Note:</strong><br/>
                As this is a demo page, you can use <strong className="text-[#4c956cff]">root@gmail.com</strong> as the email and <strong className="text-[#4c956cff]">root@123</strong> as the password to log in.
              </p>
            </div>
          </div>
          <div className="w-1/2 bg-[#4c956cff] flex flex-col items-center justify-center">
            <img
              src="/logos/white_yellow.png"
              alt="EcoChain Logo"
              className="h-32 w-auto mb-4"
            />
            <p className="text-lg font-bold text-[#fefee3ff] poppins text-center px-6">
              Empowering SMBs with Sustainable Logistics
            </p>
          </div>
        </div>
        {error && <p>{error}</p>}
      </main>
      <div className="signin-bottom-spacer bg-[#fefee3ff]"></div>
      <Footer />
    </>
  );
}
