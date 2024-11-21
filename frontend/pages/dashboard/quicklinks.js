import { FaRoute, FaTruck, FaChartLine } from 'react-icons/fa';
import { LuPackageOpen } from "react-icons/lu";

const QuickLinks = () => {
  const links = [
    {
      id: 1,
      question: "Want to optimize your next delivery route?",
      name: "Plan Deliveries",
      url: "/route-optimization",
      icon: <FaRoute />,
    },
    {
      id: 2,
      question: "Looking for green couriers to reduce your carbon footprint?",
      name: "Find Green Couriers",
      url: "/low-emission-couriers",
      icon: <FaTruck />,
    },
    {
      id: 3,
      question: "Curious about how your sustainability efforts are going?",
      name: "Track Your Impact",
      url: "/analytics",
      icon: <FaChartLine />,
    },
    {
      id: 4,
      question: "Ready to exchange reusable packaging for a greener future?",
      name: "Smart Packaging Exchange",
      url: "/spen",
      icon: <LuPackageOpen />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {links.map((link) => (
        <div key={link.id} className="bg-[#f4f4f4] p-5 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-center space-x-4">
            <div className="text-3xl text-[#4c956cff]">{link.icon}</div>
            <div>
              <p className="text-xl font-semibold text-[#102409] urbanist">{link.question}</p>
              <a
                href={link.url}
                className="text-[#2c6e49ff] mt-2 inline-block text-lg font-semibold kumbh_sans hover:text-[#0d2116]"
              >
                Go to {link.name}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuickLinks;
