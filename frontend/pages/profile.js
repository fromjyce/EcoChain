"use client";
import Sidebar from './components/sidebar';
import Head from "next/head";
import { useEffect, useState } from 'react';
import Navbar from './components/navbar';


const handleLogout = () => {
    console.log("User logged out");
  };

const Profile = () => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

  return (
    <>
    <Head>
        <title>EcoChain | Your Profile</title>
        <meta name="description" content="Empowering SMBs with sustainable logistics solutions." />
      </Head>
      <div className='content'>
      <div className="flex">
        <Sidebar />
        <div className="bg-[#fefee3ff] flex-1">
        <Navbar smbName="EcoDelight Crafts" logoPath="/dummy/smblogo.png" onLogout={handleLogout} />
        <div className='p-6'>
          <h1 className="text-5xl font-bold text-[#102409] mb-6 urbanist">Your Profile.</h1>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Profile;
