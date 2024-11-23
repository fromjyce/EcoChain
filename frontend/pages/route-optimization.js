"use client";
import Sidebar from './components/sidebar';
import Head from "next/head";
import { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import Papa from 'papaparse';

const RouteOptimization = () => {
  const handleLogout = () => {
    console.log("User logged out");
  };

  const [isClient, setIsClient] = useState(false);
  const [cityOptions, setCityOptions] = useState([]);
  const [selectedSource, setSelectedSource] = useState('');
  const [selectedDestination, setSelectedDestination] = useState('');
  const [intermediateStops, setIntermediateStops] = useState([]);
  const [newStop, setNewStop] = useState('');

  const [routeDetails, setRouteDetails] = useState(null);
  const distanceData = [50, 100, 200, 300, 400, 500];
  const timeData = [30, 60, 120, 150, 200];
  const emissionsData = [5, 10, 15, 20, 25];

  useEffect(() => {
    setIsClient(true);
    const fetchCities = async () => {
      try {
        console.log("Fetching CSV...");
        const response = await fetch('/dataset/cities.csv');
        const csvText = await response.text();
        console.log("CSV fetched:", csvText);
        Papa.parse(csvText, {
          header: true,
          complete: (results) => {
            const uniqueCities = new Set();
            results.data.forEach((row) => {
              if (row.Origin) uniqueCities.add(row.Origin.trim());
              if (row.Destination) uniqueCities.add(row.Destination.trim());
            });
            setCityOptions([...uniqueCities]);
          },
        });
      } catch (error) {
        console.error("Error fetching or parsing the CSV file", error);
      }
    };

    fetchCities();
  }, []);

  const handleAddStop = () => {
    if (newStop && !intermediateStops.includes(newStop)) {
      setIntermediateStops([...intermediateStops, newStop]);
      setNewStop('');
    }
  };

  const handleRemoveStop = (stop) => {
    setIntermediateStops(intermediateStops.filter((s) => s !== stop));
  };

  const handleOptimizeRoute = () => {
    if (selectedSource && selectedDestination) {
      const randomDistance = distanceData[Math.floor(Math.random() * distanceData.length)];
      const randomTime = timeData[Math.floor(Math.random() * timeData.length)];
      const randomEmissions = emissionsData[Math.floor(Math.random() * emissionsData.length)];

      setRouteDetails({
        distance: randomDistance,
        time: randomTime,
        emissions: randomEmissions,
      });
    } else {
      alert("Please select both source and destination.");
    }
  };

  return (
    <>
      <Head>
        <title>EcoChain | Plan Deliveries</title>
        <meta name="description" content="Empowering SMBs with sustainable logistics solutions." />
      </Head>
      <div className="content">
        <div className="flex h-screen">
          <Sidebar />
          <div className="bg-[#fefee3ff] flex-1">
            <Navbar smbName="EcoDelight Crafts" logoPath="/dummy/smblogo.png" onLogout={handleLogout} />
            <div className="p-6">
              <h1 className="text-5xl font-bold text-[#102409] mb-6 urbanist">Plan Your Deliveries</h1>
              
              <div className="mb-6">
                <label className="block text-xl font-bold mb-2 urbanist text-[#2c6e49ff]">Select Source City:</label>
                <select
                  value={selectedSource}
                  onChange={(e) => setSelectedSource(e.target.value)}
                  className="p-2 border rounded w-full poppins"
                >
                  <option value="">-- Select Source --</option>
                  {cityOptions.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-xl font-bold mb-2 urbanist text-[#2c6e49ff]">Select Destination City:</label>
                <select
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value)}
                  className="p-2 border rounded w-full poppins"
                >
                  <option value="">-- Select Destination --</option>
                  {cityOptions.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-xl font-bold mb-2 urbanist text-[#2c6e49ff]">Add Intermediate Stops:</label>
                <div className="flex items-center">
                  <select
                    value={newStop}
                    onChange={(e) => setNewStop(e.target.value)}
                    className="p-2 border rounded flex-1 poppins"
                  >
                    <option value="">-- Select Stop --</option>
                    {cityOptions.map((city, index) => (
                      <option key={index} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={handleAddStop}
                    className="ml-4 p-2 bg-[#F3D946] text-black font-semibold text-[#102409] rounded poppins"
                  >
                    Add Stop
                  </button>
                </div>
                <ul className="mt-4">
                  {intermediateStops.map((stop, index) => (
                    <li key={index} className="flex justify-between items-center bg-[#f4f4f4] p-2 rounded mb-2">
                      {stop}
                      <button
                        onClick={() => handleRemoveStop(stop)}
                        className="text-red-500 font-bold kumbh_sans"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className="p-4 bg-[#102409] text-white rounded w-full font-bold poppins"
                onClick={handleOptimizeRoute}
              >
                Optimize Route
              </button>

              {routeDetails && (
                <div className="mt-6">
                  <h2 className="text-3xl font-semibold urbanist text-[#102409]">Route Details</h2>
                  <ul className="mt-2">
                    <li className='poppins text-xl mb-1'><strong>Distance:</strong> {routeDetails.distance} km</li>
                    <li className='poppins text-xl mb-1'><strong>Time:</strong> {routeDetails.time} minutes</li>
                    <li className='poppins text-xl mb-1'><strong>Estimated Emissions:</strong> {routeDetails.emissions} kg CO2</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RouteOptimization;
