"use client";
import { useEffect, useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaHome, FaRoute, FaTruck, FaChartLine, FaUserCircle } from 'react-icons/fa';

const navItems = [
  { name: "Home", path: "/dashboard", icon: <FaHome /> },
  { name: "Plan Deliveries", path: "/route-optimization", icon: <FaRoute /> },
  { name: "Find Green Couriers", path: "/low-emission-couriers", icon: <FaTruck /> },
  { name: "Track Your Impact", path: "/analytics", icon: <FaChartLine /> },
  { name: "Your Account", path: "/profile", icon: <FaUserCircle /> },
];

const Sidebar = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);

  return (
    <div className='sidebar'>
    <div className="flex flex-col h-screen w-64 bg-[#2c6e49ff]">
      <div className="flex items-center justify-center p-4 bg-[#1f4d33] space-x-3">
        <img
          src="/logos/white_yellow.png"
          alt="EcoChain Logo"
          className="h-10 w-10"
        />
        <h2 className="text-3xl font-bold poppins text-[#fefee3ff]">EcoChain</h2>
      </div>
      <nav className="flex-grow">
        <ul>
          {navItems.map((item) => {
            const isActive = router.pathname === item.path;
            return (
              <li key={item.name} className={`urbanist flex items-center p-2 pl-4 ${isActive ? 'bg-[#4c956cff]' : 'hover:bg-[#4c956cff]'}`}>
                <Link href={item.path} className={`flex items-center text-[#fefee3ff] text-lg font-bold w-full p-2 ${isActive ? 'bg-[#4c956cff] text-[#F3D946]' : 'hover:bg-[#4c956cff]'}`}>
                  <span className="mr-4 text-3xl">{item.icon}</span>
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="flex items-center justify-center p-4 mt-auto bg-[#1f4d33] text-[#fefee3ff] text-center kumbh_sans text-sm font-medium">
        <p>Developed by <strong>Team Pravah</strong> for <strong>Amazon Smbhav Hackathon 2024</strong>.</p>
      </div>
    </div>
    </div>
  );
};

export default Sidebar;
