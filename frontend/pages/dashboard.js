"use client";
import Sidebar from './components/sidebar';
import Head from "next/head";
import { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import GreenScoreWidget from './dashboard/amascore';
import EcoPointsTracker from './dashboard/ecopoints';
import ActivityFeed from './dashboard/activityfeed';
import QuickLinks from './dashboard/quicklinks';
import { withAuth } from '../components/withAuth';

const Dashboard = () => {
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
        <title>EcoChain | Your Dashboard</title>
        <meta name="description" content="Empowering SMBs with sustainable logistics solutions." />
      </Head>
      <div className='content'>
      <div className="flex">
        <Sidebar />
        <div className="bg-[#fefee3ff] flex-1">
        <Navbar smbName="EcoDelight Crafts" logoPath="/dummy/smblogo.png"/>
        <div className='p-6'>
          <h1 className="text-5xl font-bold text-[#102409] mb-6 urbanist">Your Dashboard.</h1>
          <div className="grid grid-cols-3 gap-5">
          <GreenScoreWidget todayScore={85} previousDayScore={80} nextDayScore={90} />
          <EcoPointsTracker currentPoints={1200} nextTarget={2000} />
          <ActivityFeed activities={activities} />
          </div>
          <h2 className="text-3xl font-bold text-[#102409] urbanist mt-8 mb-4">Quick Links.</h2>
          <QuickLinks />
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default withAuth(Dashboard);
