"use client";
import Head from "next/head";
import { useEffect, useState } from 'react';
import Footer from "./components/footer";
import Header from "./components/header";
import { FaRoute, FaRecycle, FaCar, FaChartBar, FaBox } from 'react-icons/fa';

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
      <main className="bg-[#fefee3ff]">
        <div className="px-4 py-8">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold mb-4 urbanist text-[#102409]">Key Features of EcoChain</h2>
                    <p className="text-lg kumbh_sans font-semibold text-[#102409]">Discover how EcoChain is empowering SMBs with sustainable logistics solutions.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-lg text-center">
                        <FaRoute className="text-5xl text-green-500 mb-4 mx-auto" />
                        <h3 className="font-semibold text-2xl poppins text-[#2c6e49ff] mb-2">Route Optimization</h3>
                        <p className="text-[#102409] kumbh_sans">AI-powered route optimization reduces delivery emissions and travel time.</p>
                    </div>
                    <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-lg text-center">
                        <FaBox className="text-5xl text-blue-500 mb-4 mx-auto" />
                        <h3 className="font-semibold text-2xl poppins text-[#2c6e49ff] mb-2">Smart Packaging Exchange Network (SPEN)</h3>
                        <p className="text-[#102409] kumbh_sans">A system for exchanging reusable packaging materials to minimize waste.</p>
                    </div>
                    <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-lg text-center">
                        <FaCar className="text-5xl text-red-500 mb-4 mx-auto" />
                        <h3 className="font-semibold text-2xl poppins text-[#2c6e49ff] mb-2">Low-Emission Couriers</h3>
                        <p className="text-[#102409] kumbh_sans">Choose from eco-friendly, low-emission couriers for sustainable deliveries.</p>
                    </div>
                    <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-lg text-center">
                        <FaChartBar className="text-5xl text-purple-500 mb-4 mx-auto" />
                        <h3 className="font-semibold text-2xl poppins text-[#2c6e49ff] mb-2">Analytics Dashboard</h3>
                        <p className="text-[#102409] kumbh_sans">Track emissions saved, packaging reuse, and EcoPoints trends over time.</p>
                    </div>
                    <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-lg text-center">
                        <FaRecycle className="text-5xl text-yellow-500 mb-4 mx-auto" />
                        <h3 className="font-semibold text-2xl poppins text-[#2c6e49ff] mb-2">EcoPoints System</h3>
                        <p className="text-[#102409] kumbh_sans">Earn and track EcoPoints based on sustainable actions and deliveries.</p>
                    </div>
                    <div className="bg-[#f4f4f4] p-6 rounded-lg shadow-lg text-center">
                        <FaRecycle className="text-5xl text-green-600 mb-4 mx-auto" />
                        <h3 className="font-semibold text-2xl poppins text-[#2c6e49ff] mb-2">Business Profile</h3>
                        <p className="text-[#102409] kumbh_sans">View and update your business and user details, along with activity feed.</p>
                    </div>

                </div>
                </div>
                <div className="more-spacer-bottom bg-[#fefee3ff]"></div>
                <Footer />
            </main>
    </>
  );
}
