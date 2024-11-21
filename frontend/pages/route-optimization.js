"use client";
import Sidebar from './components/sidebar';
import Head from "next/head";
import { useEffect, useState } from 'react';
import Navbar from './components/navbar';

const RouteOptimization = () => {
  const handleLogout = () => {
    console.log("User logged out");
  };
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    const activities = [
        { id: 1, action: "Optimized a delivery route", time: "2 hours ago" },
        { id: 2, action: "Reused 10 packaging items", time: "Yesterday" },
        { id: 3, action: "Earned 50 EcoPoints", time: "2 days ago" },
      ];
  return (
    <>
    <Head>
        <title>EcoChain | Plan Deliveries</title>
        <meta name="description" content="Empowering SMBs with sustainable logistics solutions." />
      </Head>
      <div className='content'>
      <div className="flex">
        <Sidebar />
        <div className="bg-[#fefee3ff] flex-1">
        <Navbar smbName="EcoDelight Crafts" logoPath="/dummy/smblogo.png" onLogout={handleLogout} />
        <div className='p-6'>
          <h1 className="text-5xl font-bold text-[#102409] mb-6 urbanist">Plan Your Deliveries.</h1>          
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default RouteOptimization;
