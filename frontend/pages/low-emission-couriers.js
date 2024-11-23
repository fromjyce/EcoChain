"use client";
import Sidebar from './components/sidebar';
import Head from "next/head";
import { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import { withAuth } from './components/withAuth';

const couriers = [
    { id: 1, name: "DHL Express", source: "Mumbai", destination: "Delhi", productType: "Glass", emissions: "Low", cost: 120, deliveryTime: "1-2 days" },
    { id: 2, name: "DTDC Express", source: "Bangalore", destination: "Hyderabad", productType: "Food", emissions: "Moderate", cost: 100, deliveryTime: "2-3 days" },
    { id: 3, name: "Franch Express Couriers", source: "Chennai", destination: "Kolkata", productType: "Electronics", emissions: "Low", cost: 150, deliveryTime: "Same Day" },
    { id: 4, name: "ST Couriers", source: "Pune", destination: "Goa", productType: "Glass", emissions: "High", cost: 80, deliveryTime: "3-5 days" },
    { id: 5, name: "DTDC Couriers", source: "Jaipur", destination: "Ahmedabad", productType: "Food", emissions: "Low", cost: 130, deliveryTime: "1-2 days" },
    { id: 6, name: "EcoWheels", source: "Thiruvananthapuram", destination: "Kumbakanom", productType: "Food", emissions: "Low", cost: 130, deliveryTime: "1-2 days" },
    { id: 7, name: "DHL Express", source: "Jaipur", destination: "Delhi", productType: "Food", emissions: "Low", cost: 130, deliveryTime: "1-2 days" },
];

const LowEmissionCouriers = () => {
    const [isClient, setIsClient] = useState(false);
    const [filteredCouriers, setFilteredCouriers] = useState(couriers);
    const [selectedCouriers, setSelectedCouriers] = useState([]);
    const [filters, setFilters] = useState({
        emissions: "",
        cost: "",
        deliveryTime: "",
    });

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilters({ ...filters, [name]: value });

        const filtered = couriers.filter((courier) => {
            return (
                (filters.emissions ? courier.emissions === filters.emissions : true) &&
                (filters.cost ? courier.cost <= parseInt(filters.cost) : true) &&
                (filters.deliveryTime ? courier.deliveryTime === filters.deliveryTime : true)
            );
        });
        setFilteredCouriers(filtered);
    };

    const handleCourierSelect = (courier) => {
        setFilteredCouriers((prev) => prev.filter((c) => c.id !== courier.id));
        setSelectedCouriers((prev) => [...prev, courier]);
    };

    const handleUndoSelection = (courier) => {
        setSelectedCouriers((prev) => prev.filter((c) => c.id !== courier.id));
        setFilteredCouriers((prev) => [...prev, courier]);
    };

    const handleConfirmSelection = () => {
        if (window.confirm("Are you sure you want to confirm your selection?")) {
            setSelectedCouriers([]);
            alert("Success! Your couriers have been scheduled for delivery.");
        } else {
            alert("Selection canceled.");
        }
    };

    const handleClearFilters = () => {
        setFilters({
            emissions: "",
            cost: "",
            deliveryTime: "",
        });
        setFilteredCouriers(couriers);
    };

    return (
        <>
            <Head>
                <title>EcoChain | Find Green Couriers</title>
                <meta name="description" content="Empowering SMBs with sustainable logistics solutions." />
            </Head>
            <div className="content">
                <div className="flex">
                    <Sidebar />
                    <div className="bg-[#fefee3ff] flex-1">
                        <Navbar smbName="EcoDelight Crafts" logoPath="/dummy/smblogo.png"/>
                        <div className="p-6 ">
                            <h1 className="text-5xl font-bold text-[#102409] mb-6 urbanist">Find Your Couriers.</h1>
                            <div className="mb-6">
                                <div className="flex flex-wrap gap-4">
                                    <select name="emissions" className="p-2 border rounded poppins" onChange={handleFilterChange}>
                                        <option value="">Select Emissions</option>
                                        <option value="Low">Low</option>
                                        <option value="Moderate">Moderate</option>
                                        <option value="High">High</option>
                                    </select>
                                    <select name="deliveryTime" className="p-2 border rounded poppins" onChange={handleFilterChange}>
                                        <option value="">Select Delivery Time</option>
                                        <option value="Same Day">Same Day</option>
                                        <option value="1-2 days">1-2 days</option>
                                        <option value="2-3 days">2-3 days</option>
                                        <option value="3-5 days">3-5 days</option>
                                    </select>
                                    <input
                                        type="number"
                                        name="cost"
                                        placeholder="Max Cost"
                                        className="p-2 border rounded poppins"
                                        onChange={handleFilterChange}
                                    />
                                    <button
                                        onClick={handleClearFilters}
                                        className="px-4 py-2 bg-[#2C6E49] text-white rounded kumbh_sans font-semibold"
                                    >
                                        Clear Filters
                                    </button>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {filteredCouriers.map((courier) => (
                                    <div key={courier.id} className="p-4 border rounded bg-[#f4f4f4] shadow-md flex flex-col justify-between">
                                        <h3 className="text-xl font-bold text-[#183d15] poppins">{courier.name}</h3>
                                        <p className='kumbh_sans'><strong>Source:</strong> {courier.source}</p>
                                        <p className='kumbh_sans'><strong>Destination:</strong> {courier.destination}</p>
                                        <p className='kumbh_sans'><strong>Product Type:</strong> {courier.productType}</p>
                                        <p className='kumbh_sans'><strong>Cost:</strong> ₹{courier.cost}</p>
                                        <p className='kumbh_sans'><strong>Delivery Time:</strong> {courier.deliveryTime}</p>
                                        <p className='kumbh_sans'><strong>Emissions:</strong> {courier.emissions} <span className="text-sm italic">(Predicted)</span></p>
                                        <button
                                            onClick={() => handleCourierSelect(courier)}
                                            className="mt-4 px-4 py-2 bg-[#4C956C] text-white font-semibold rounded poppins"
                                        >
                                            Select Courier
                                        </button>
                                    </div>
                                ))}
                            </div>
                            {selectedCouriers.length > 0 && (
                                <div className="mt-8">
                                    <h2 className="text-3xl font-semibold text-[#183d15] mb-4 urbanist">Selected Couriers</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                        {selectedCouriers.map((courier) => (
                                            <div key={courier.id} className="p-4 border rounded bg-[#f4f4f4] shadow-md">
                                                <h3 className="text-lg font-bold text-[#183d15] poppins">{courier.name}</h3>
                                                <p className='kumbh_sans'>Source: {courier.source}</p>
                                                <p className='kumbh_sans'>Destination: {courier.destination}</p>
                                                <p className='kumbh_sans'>Cost: ₹{courier.cost}</p>
                                                <button
                                                    onClick={() => handleUndoSelection(courier)}
                                                    className="mt-4 px-4 py-2 bg-[#2C6E49] text-white rounded kumbh_sans font-semibold"
                                                >
                                                    Remove from Selection
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                    <button
                                        onClick={handleConfirmSelection}
                                        className="mt-8 px-4 py-2 bg-[#1F4D33] text-white rounded poppins font-semibold"
                                    >
                                        Confirm Selection
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default withAuth(LowEmissionCouriers);