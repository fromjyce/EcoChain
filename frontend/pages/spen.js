"use client";
import Sidebar from './components/sidebar';
import Head from "next/head";
import { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import dynamic from "next/dynamic";
const Map = dynamic(() => import("./components/Map"), { ssr: false });

const handleLogout = () => {
    console.log("User logged out");
  };

const SPEN = () => {
    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

    const [packagingData, setPackagingData] = useState([
        { id: 1, type: "Box", size: "Large", location: "Jaipur", status: "Available" },
        { id: 2, type: "Crate", size: "Medium", location: "Coimbatore", status: "Unavailable" },
        { id: 3, type: "Pallet", size: "Small", location: "Chennai", status: "Available" },
      ]);

    const [filters, setFilters] = useState({ type: "", size: "", location: "" });

    const filteredData = packagingData.filter((item) =>
        Object.keys(filters).every((key) =>
          filters[key] ? item[key].toLowerCase().includes(filters[key].toLowerCase()) : true
        )
      );

  return (
    <>
    <Head>
        <title>EcoChain | Packaging Exchange</title>
        <meta name="description" content="Empowering SMBs with sustainable logistics solutions." />
      </Head>
      <div className='content'>
      <div className="flex">
        <Sidebar />
        <div className="bg-[#fefee3ff] flex-1">
        <Navbar smbName="EcoDelight Crafts" logoPath="/dummy/smblogo.png" onLogout={handleLogout} />
        <div className='p-6'>
          <h1 className="text-5xl font-bold text-[#102409] mb-6 urbanist">Manage Your Packages.</h1>
            <div className='space-y-8'>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-500 text-white p-4 rounded shadow">
          <h2 className="text-xl font-bold urbanist">Total Packaging</h2>
          <p className="text-3xl kanit font-semibold">50</p>
        </div>
        <div className="bg-green-500 text-white p-4 rounded shadow">
          <h2 className="text-xl font-bold urbanist">Reused</h2>
          <p className="text-3xl kanit font-semibold">30</p>
        </div>
        <div className="bg-yellow-500 text-white p-4 rounded shadow">
          <h2 className="text-xl font-bold urbanist">Available</h2>
          <p className="text-3xl kanit font-semibold">15</p>
        </div>
        <div className="bg-red-500 text-white p-4 rounded shadow">
          <h2 className="text-xl font-bold urbanist">Unavailable</h2>
          <p className="text-3xl kanit font-semibold">5</p>
        </div>
      </div>
      <div className="flex space-x-4">
        <input
          type="text"
          placeholder="Type"
          className="border p-2 rounded w-1/3 poppins"
          onChange={(e) => setFilters({ ...filters, type: e.target.value })}
        />
        <input
          type="text"
          placeholder="Size"
          className="border p-2 rounded w-1/3 poppins"
          onChange={(e) => setFilters({ ...filters, size: e.target.value })}
        />
        <input
          type="text"
          placeholder="Location"
          className="border p-2 rounded w-1/3 poppins"
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-[#f4f4f4] border rounded shadow">
          <thead className="bg-[#102409] text-white poppins">
            <tr>
              <th className="py-2 px-4 text-left">ID</th>
              <th className="py-2 px-4 text-left">Type</th>
              <th className="py-2 px-4 text-left">Size</th>
              <th className="py-2 px-4 text-left">Location</th>
              <th className="py-2 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr key={item.id} className="border-t kumbh_sans">
                <td className="py-2 px-4">{item.id}</td>
                <td className="py-2 px-4">{item.type}</td>
                <td className="py-2 px-4">{item.size}</td>
                <td className="py-2 px-4">{item.location}</td>
                <td className="py-2 px-4">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <form
        className="space-y-4 bg-gray-100 p-4 rounded shadow"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="text-lg font-bold urbanist text-[#102409]">Request or Exchange Packaging</h2>
        <input
          type="text"
          placeholder="Type"
          className="border p-2 rounded w-full poppins"
        />
        <input
          type="text"
          placeholder="Size"
          className="border p-2 rounded w-full poppins"
        />
        <input
          type="text"
          placeholder="Location"
          className="border p-2 rounded w-full poppins"
        />
        <button
          type="submit"
          className="bg-[#F3D946] text-black font-semibold py-2 px-4 rounded poppins"
        >
          Submit Request
        </button>
      </form>

      {/* Location Map */}
      <div className="h-96">
        <Map locations={packagingData.map((pkg) => pkg.location)} />
      </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default SPEN;
