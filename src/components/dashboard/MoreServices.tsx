
import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  MessageCircle, 
  CreditCard, 
  PlayCircle, 
  PhoneCall, 
  BarChart2, 
  HelpCircle, 
  MessageSquare, 
  User 
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const actions = [
    { label: "Platform", icon: <MessageCircle className="h-6 w-6 text-blue-500" />, bg: "bg-blue-100", to: "/platform" },
    { label: "Buy BPC", icon: <CreditCard className="h-6 w-6 text-green-500" />, bg: "bg-green-100", to: "/buy-bpc" },
    { label: "Watch", icon: <PlayCircle className="h-6 w-6 text-purple-500" />, bg: "bg-purple-100", to: "/watch" },
    { label: "Airtime", icon: <PhoneCall className="h-6 w-6 text-orange-500" />, bg: "bg-orange-100", to: "/airtime" },
  ];

  const services = [
    { label: "Data", icon: <BarChart2 className="h-6 w-6 text-cyan-500" />, bg: "bg-cyan-100", to: "/data" },
    { label: "FAQ", icon: <HelpCircle className="h-6 w-6 text-yellow-600" />, bg: "bg-yellow-100", to: "/faq" },
    { label: "Support", icon: <MessageSquare className="h-6 w-6 text-indigo-500" />, bg: "bg-indigo-100", to: "/support" },
    { label: "Profile", icon: <User className="h-6 w-6 text-rose-500" />, bg: "bg-rose-100", to: "/profile" },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h3 className="font-medium mb-4">Quick Actions</h3>
        <div className="grid grid-cols-4 gap-6">
          {actions.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => navigate(item.to)}
            >
              <div className={`h-12 w-12 ${item.bg} rounded-full mb-2 flex items-center justify-center`}>
                {item.icon}
              </div>
              <p className="text-xs">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm">
        <h3 className="font-medium mb-4">More Services</h3>
        <div className="grid grid-cols-4 gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => navigate(item.to)}
            >
              <div className={`h-12 w-12 ${item.bg} rounded-full mb-2 flex items-center justify-center`}>
                {item.icon}
              </div>
              <p className="text-xs">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
