"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/useAuth";

const Navbar = ({ smbName, logoPath }) => {
  const { user, logout } = useAuth();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="navbar">
      <header className="flex items-center justify-between bg-[#2c6e49ff] p-4 text-[#fefee3ff]">
        <div className="flex items-center">
          <img src={logoPath} alt={`${smbName} Logo`} className="h-10 mr-3" />
          <h1 className="text-2xl poppins font-bold">{smbName}</h1>
        </div>

        {user ? (
          <button
            onClick={handleLogout}
            className="bg-[#F3D946] px-4 py-2 urbanist text-black font-bold rounded hover:bg-[#c2ae38]"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => router.push('/signin')}
            className="bg-[#F3D946] px-4 py-2 urbanist text-black font-bold rounded hover:bg-[#c2ae38]"
          >
            Sign In
          </button>
        )}
      </header>
    </div>
  );
};

export default Navbar;