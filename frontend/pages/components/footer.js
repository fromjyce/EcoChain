"use client";
import { useEffect, useState } from "react";

export default function Footer() {
  const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
    }, []);
  return (
        <footer className="bg-[#102409] text-white py-2 poppins">
          <div className="container mx-auto text-center">
            <p>Developed by <strong>Team Pravah</strong> for <strong>Amazon Smbhav Hacakthon 2024</strong></p>
          </div>
        </footer>
  );
}
