"use client";
import Sidebar from './components/sidebar';
import { withAuth } from '../hocs/withAuth';
import Head from "next/head";
import { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import { Line, Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend, 
  ArcElement
);

const handleDownloadReport = () => {
  console.log("Download button clicked");
};

const Analytics = () => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const emissionDataFromBackend = {
    months: ['January', 'February', 'March', 'April', 'May'],
    emissions: [300, 450, 500, 600, 700],
  };

  const packagingDataFromBackend = {
    packagingTypes: ['Plastic', 'Glass', 'Cardboard', 'Metal'],
    packagingReused: [1200, 900, 650, 300],
  };

  const ecoPointsDataFromBackend = {
    quarters: ['Q1', 'Q2', 'Q3', 'Q4'],
    ecoPointsUsed: [500, 700, 600, 900],
  };

  const emissionsData = {
    labels: emissionDataFromBackend.months,
    datasets: [
      {
        label: 'Emissions Saved (kg)',
        data: emissionDataFromBackend.emissions,
        borderColor: '#586653',
        backgroundColor: '#060e04',
        fill: true,
      },
    ],
  };

  const packagingData = {
    labels: packagingDataFromBackend.packagingTypes,
    datasets: [
      {
        label: 'Packaging Reuse (kg)',
        data: packagingDataFromBackend.packagingReused,
        backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1'],
      },
    ],
  };

  const ecoPointsData = {
    labels: ecoPointsDataFromBackend.quarters,
    datasets: [
      {
        label: 'EcoPoints Usage',
        data: ecoPointsDataFromBackend.ecoPointsUsed,
        backgroundColor: ['#FFB600', '#00BFFF', '#FF6347', '#8A2BE2'],
      },
    ],
  };

  const linerecommendationText = "Great progress! To maintain this upward trend, consider adopting additional energy-efficient practices and exploring renewable energy sources for logistics. Collaborate with partners to optimize transportation routes further.";
  const barrecommendationText = "Focus on improving the reuse of metal and cardboard packaging by implementing better collection and sorting processes. Encourage customers to return used materials through incentive programs to increase recycling rates.";
  const pierecommendationText = "Capitalize on the seasonal uptick by promoting EcoPoints initiatives during high-impact quarters like Q4. Introduce limited-time bonuses and reward programs to encourage consistent usage throughout the year.";

  return (
    <>
      <Head>
        <title>EcoChain | Track Your Impact</title>
        <meta name="description" content="Empowering SMBs with sustainable logistics solutions." />
      </Head>
      <div className='content'>
        <div className="flex">
          <Sidebar />
          <div className="bg-[#fefee3ff] flex-1">
            <Navbar smbName="EcoDelight Crafts" logoPath="/dummy/smblogo.png"/>
            <div className='p-6'>
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-5xl font-bold text-[#102409] urbanist">Track Your Impact.</h1>
                <button 
                  onClick={handleDownloadReport} 
                  className="bg-[#4C956CFF] hover:bg-[#3b7a58] text-black poppins font-semibold py-2 px-4 rounded-md shadow-md">
                  Download Your Report
                </button>
              </div>
              <div className="mb-10">
                <h2 className="text-3xl font-semibold mb-4 urbanist text-[#183D15]">Emissions Saved Over Time</h2>
                <div className="flex mb-6">
                  <div className="flex-1 mr-4">
                    <Line 
                      data={emissionsData} 
                      options={{ responsive: true, plugins: { title: { display: true, text: 'Emissions Saved Over Time' } } }} 
                    />
                  </div>
                  <div className="flex-1 bg-[#F4F4F4] p-4 border rounded-md shadow-md relative">
                    <h2 className="text-2xl font-bold mb-4 poppins text-[#4c956cff]">AI Recommendations</h2>
                    <p className='kumbh_sans'>{linerecommendationText}</p>
                    <div className="absolute bottom-2 right-2 text-gray-400 poppins text-sm">
                      Powered by Meta Llama 2
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-10">
                <h2 className="text-3xl font-semibold mb-4 urbanist text-[#183D15]">Packaging Reuse Metrics</h2>
                <div className="flex mb-6">
                  <div className="flex-1 mr-4 bg-[#F4F4F4] p-4 border rounded-md shadow-md relative">
                    <h2 className="text-2xl font-bold mb-4 poppins text-[#4c956cff]">AI Recommendations</h2>
                    <p className='kumbh_sans'>{barrecommendationText}</p>
                    <div className="absolute bottom-2 right-2 text-gray-400 poppins text-sm">
                      Powered by Meta Llama 2
                    </div>
                  </div>
                  <div className="flex-1">
                    <Bar 
                      data={packagingData} 
                      options={{ responsive: true, plugins: { title: { display: true, text: 'Packaging Reuse' } } }} 
                    />
                  </div>
                </div>
              </div>
              <div className="mb-10">
                <h2 className="text-3xl font-semibold mb-4 urbanist text-[#183D15]">EcoPoints Usage Trends</h2>
                <div className="flex mb-6">
                  <div className="flex-1">
                    <Pie 
                      data={ecoPointsData} 
                      options={{ responsive: true, plugins: { title: { display: true, text: 'EcoPoints Usage' } } }} 
                    />
                  </div>
                  <div className="flex-1 bg-[#F4F4F4] p-4 border rounded-md shadow-md relative">
                    <h2 className="text-2xl font-bold mb-4 poppins text-[#4c956cff]">AI Recommendations</h2>
                    <p className='kumbh_sans'>{pierecommendationText}</p>
                    <div className="absolute bottom-2 right-2 text-gray-400 text-sm poppins">
                      Powered by Meta Llama 2
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withAuth(Analytics);