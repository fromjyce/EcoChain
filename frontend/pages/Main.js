"use client";
import Head from "next/head";
import { useEffect, useState } from 'react';
import Footer from "./components/footer";
import Header from "./components/header";

export default function Main() {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
  return (
    <>
      <Head>
        <title>EcoChain</title>
        <meta name="description" content="Empowering SMBs with sustainable logistics solutions." />
      </Head>
      <Header />
      <main className="bg-[#fefee3ff] min-h-screen">
      <section className="bg-green-500 text-white">
  <div className="container px-8 py-12 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-1 first-section-main">
    <div className="md:w-1/2 text-center md:text-left">
      <h1 className="text-4xl font-bold md:text-5xl poppins">
        Welcome to <span className="text-yellow-300">EcoChain</span>
      </h1>
      <p className="mt-4 text-lg md:text-xl urbanist">
        Pioneering Sustainable Logistics for SMBs in India
      </p>
      <div className="mt-6">
        <a
          href="/sign-up"
          className="bg-yellow-300 text-[#102409] kumbh_sans py-3 px-6 rounded-lg shadow-md text-lg hover:bg-yellow-400 transition"
        >
          Get Started
        </a>
      </div>
    </div>
    <div className="md:w-1/2 text-center">
      <img
        src="/logos/green_yellow.png"
        alt="EcoChain Logo"
        className="w-48 md:w-64"
      />
    </div>
  </div>
</section>
        <section id="features" className="container mx-auto px-6 py-16 bg-[#fefee3ff]">
          <h2 className="text-3xl font-bold text-center text-[#2c6e49ff] poppins">
            Why Choose EcoChain?
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src="/main/route.png"
                alt="Route Optimization"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="font-bold text-lg urbanist text-[#102409]">AI-Powered Route Optimization</h3>
              <p className="mt-2 text-[#343434] kumbh_sans">
                Minimize delivery distances and emissions with real-time traffic and weather data.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src="/main/packaging.png"
                alt="Smart Packaging"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="font-bold text-lg urbanist text-[#102409]">Smart Packaging Exchange</h3>
              <p className="mt-2 text-[#343434] kumbh_sans">
                Foster sustainability with reusable packaging solutions for SMBs.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <img
                src="/main/dashboard.png"
                alt="Eco Dashboard"
                className="w-20 h-20 mx-auto mb-4"
              />
              <h3 className="font-bold text-lg urbanist text-[#102409]">Eco-Dashboard</h3>
              <p className="mt-2 text-[#343434] kumbh_sans">
                Track carbon footprints and enhance sustainability efforts.
              </p>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
