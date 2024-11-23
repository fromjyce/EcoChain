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
  const [isEditingSMB, setIsEditingSMB] = useState(false);
  const [isEditingUser, setIsEditingUser] = useState(false);
  const [smbDetails, setSmbDetails] = useState({
    photo: "/dummy/smblogo.png",
    name: "EcoDelight Crafts",
    address: "New Perungalathur",
    city: "Chennai",
    state: "Tamil Nadu",
    country: "India",
    website: "https://www.ecodelight.com",
    phone: "+91 76575 74485",
  });

  const [userDetails, setUserDetails] = useState({
    name: "EDCRoot",
    email: "root@gmail.com",
    password: "********",
  });

  const activities = [
    { id: 1, action: "Optimized a delivery route", time: "2 hours ago" },
    { id: 2, action: "Reused 10 packaging items", time: "Yesterday" },
    { id: 3, action: "Earned 50 EcoPoints", time: "2 days ago" },
    { id: 4, action: "Participated in a sustainability webinar", time: "3 days ago" },
    { id: 5, action: "Reduced emissions by 20% on route X", time: "4 days ago" },
    { id: 6, action: "Integrated a new packaging material", time: "Last week" },
    { id: 7, action: "Earned 30 EcoPoints", time: "2 weeks ago" },
    { id: 8, action: "Updated business profile details", time: "2 weeks ago" },
    { id: 9, action: "Downloaded monthly sustainability report", time: "3 weeks ago" },
    { id: 10, action: "Saved 15 packaging materials", time: "3 weeks ago" },
    { id: 11, action: "Logged into the dashboard", time: "3 weeks ago" },
    { id: 12, action: "Completed a carbon offset program", time: "Last month" },
    { id: 13, action: "Shared EcoPoints with a partner SMB", time: "Last month" },
    { id: 14, action: "Earned the 'EcoLeader' badge", time: "2 months ago" },
    { id: 15, action: "Reviewed sustainability goals", time: "2 months ago" },
  ];

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleSMBEdit = () => {
    if (isEditingSMB) {
      const confirmed = confirm("Are you sure you want to save changes to the business details?");
      if (!confirmed) return;
    }
    setIsEditingSMB(!isEditingSMB);
  };

  const handleSMBChange = (e) => {
    const { name, value } = e.target;
    setSmbDetails({ ...smbDetails, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSmbDetails({ ...smbDetails, photo: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleUserEdit = () => {
    if (isEditingUser) {
      const confirmed = confirm("Are you sure you want to save changes to your account details?");
      if (!confirmed) return;
    }
    setIsEditingUser(!isEditingUser);
  };

  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  return (
    <>
      <Head>
        <title>EcoChain | Your Profile</title>
        <meta name="description" content="Empowering SMBs with sustainable logistics solutions." />
      </Head>
      <div className="content">
        <div className="flex">
          <Sidebar />
          <div className="bg-[#fefee3ff] flex-1">
            <Navbar smbName={smbDetails.name} logoPath={smbDetails.photo} onLogout={handleLogout} />
            <div className="p-6">
              <h1 className="text-5xl font-bold text-[#102409] mb-6 urbanist">Your Profile.</h1>
              <section className="mb-10">
                <h2 className="text-3xl font-bold mb-4 urbanist text-[#102409]">Your Business Details</h2>
                <div className='bg-[#f4f4f4] p-6 rounded rounded-lg shadow-xl poppins'>
                <div className="flex items-center gap-6">
                  <img src={smbDetails.photo} alt="SMB Logo" className="w-48 h-48 rounded-full" />
                  <div>
                    <div className="mb-4">
                      <label className="block text-lg font-semibold text-[#4c956cff]" htmlFor="name">Business Name</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={smbDetails.name}
                        onChange={handleSMBChange}
                        className={`text-2xl font-bold mb-2 px-4 py-2 border px-4 py-2" bg-white w-full h-12`}
                        readOnly={!isEditingSMB}
                      />
                    </div>
                    <div className="flex gap-4 mb-4">
                      <div className="flex-1">
                        <label className="block text-lg font-semibold text-[#4c956cff]" htmlFor="address">Address</label>
                        <input
                          type="text"
                          name="address"
                          id="address"
                          value={smbDetails.address}
                          onChange={handleSMBChange}
                          className="border px-4 py-2 bg-white w-full h-12"
                          readOnly={!isEditingSMB}
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-lg font-semibold text-[#4c956cff]" htmlFor="city">City</label>
                        <input
                          type="text"
                          name="city"
                          id="city"
                          value={smbDetails.city}
                          onChange={handleSMBChange}
                          className="border px-4 py-2 bg-white w-full h-12"
                          readOnly={!isEditingSMB}
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-lg font-semibold text-[#4c956cff]" htmlFor="state">State</label>
                        <input
                          type="text"
                          name="state"
                          id="state"
                          value={smbDetails.state}
                          onChange={handleSMBChange}
                          className="border px-4 py-2 bg-white w-full h-12"
                          readOnly={!isEditingSMB}
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-lg font-semibold text-[#4c956cff]" htmlFor="country">Country</label>
                        <input
                          type="text"
                          name="country"
                          id="country"
                          value={smbDetails.country}
                          onChange={handleSMBChange}
                          className="border px-4 py-2 bg-white w-full h-12"
                          readOnly={!isEditingSMB}
                        />
                      </div>
                    </div>
                    <div className="flex gap-4 mb-4">
                      <div className="flex-1">
                        <label className="block text-lg font-semibold text-[#4c956cff]" htmlFor="website">Website</label>
                        <input
                          type="text"
                          name="website"
                          id="website"
                          value={smbDetails.website}
                          onChange={handleSMBChange}
                          className="text-blue-600 underline border px-4 py-2 bg-white w-full h-12"
                          readOnly={!isEditingSMB}
                        />
                      </div>
                      <div className="flex-1">
                        <label className="block text-lg font-semibold text-[#4c956cff]" htmlFor="phone">Phone</label>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          value={smbDetails.phone}
                          onChange={handleSMBChange}
                          className="border px-4 py-2 bg-white w-full h-12"
                          readOnly={!isEditingSMB}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {isEditingSMB && (
                  <div className="flex gap-4 mt-4">
                    <label htmlFor="image-upload" className="bg-[#F3D946] text-black font-bold px-4 py-2 rounded cursor-pointer w-full text-center">
                      Upload New Logo
                    </label>
                    <input
                      type="file"
                      id="image-upload"
                      className="hidden"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                    <button
                      onClick={toggleSMBEdit}
                      className="bg-[#F3D946] text-black font-bold px-4 py-2 rounded w-full"
                    >
                      Save Details
                    </button>
                  </div>
                )}
                {!isEditingSMB && (
                  <button
                    onClick={toggleSMBEdit}
                    className="mt-4 bg-[#F3D946] text-black font-bold px-4 py-2 rounded"
                  >
                    Edit Details
                  </button>
                )}
                </div>
              </section>
              <section className='mb-10'>
                <h2 className="text-3xl font-bold mb-4 urbanist text-[#102409]">Your Account</h2>
                <div className='bg-[#f4f4f4] p-6 rounded rounded-lg shadow-xl poppins'>
                <div className="flex flex-wrap gap-6 mb-4">
                  <div className="flex-1">
                    <label className="block text-lg font-semibold text-[#4c956cff]" htmlFor="user-name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="user-name"
                      value={userDetails.name}
                      onChange={handleUserChange}
                      className="border px-4 py-2 w-full h-12"
                      readOnly={!isEditingUser}
                    />
                  </div>

                  <div className="flex-1">
                    <label className="block text-lg font-semibold text-[#4c956cff]" htmlFor="user-email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="user-email"
                      value={userDetails.email}
                      onChange={handleUserChange}
                      className="border px-4 py-2 w-full h-12"
                      readOnly={!isEditingUser}
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-lg font-semibold text-[#4c956cff]" htmlFor="user-password">Password</label>
                  <input
                    type="password"
                    name="password"
                    id="user-password"
                    value={userDetails.password}
                    onChange={handleUserChange}
                    className="border px-4 py-2 w-full h-12"
                    readOnly={!isEditingUser}
                  />
                </div>

                <button
                  onClick={toggleUserEdit}
                  className="mt-4 bg-[#F3D946] text-black font-bold px-4 py-2 rounded"
                >
                  {isEditingUser ? "Save Changes" : "Edit Details"}
                </button>
                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold mb-4 urbanist text-[#102409]">Your Activity Feed</h2>
                <div className="h-48 overflow-y-auto bg-[#f4f4f4] p-4 rounded rounded-lg shadow-xl">
                  {activities.map((activity) => (
                    <div key={activity.id} className="mb-2 flex justify-between items-center">
                      <p className="font-bold text-[#102409] poppins">{activity.action}</p>
                      <p className="text-black text-sm kumbh_sans">{activity.time}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
