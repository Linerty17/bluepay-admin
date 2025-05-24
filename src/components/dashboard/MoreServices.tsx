
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
  User,
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const items = [
    {
      title: "Quick Actions",
      actions: [
        {
          label: "Platform",
          icon: <MessageCircle className="h-6 w-6 text-blue-500" />,
          bg: "bg-blue-100",
          path: "/platform",
        },
        {
          label: "Buy BPC",
          icon: <CreditCard className="h-6 w-6 text-green-500" />,
          bg: "bg-green-100",
          path: "/buy-bpc",
        },
        {
          label: "Watch",
          icon: <PlayCircle className="h-6 w-6 text-purple-500" />,
          bg: "bg-purple-100",
          path: "/watch",
        },
        {
          label: "Airtime",
          icon: <PhoneCall className="h-6 w-6 text-orange-500" />,
          bg: "bg-orange-100",
          path: "/airtime",
        },
      ],
    },
    {
      title: "More Services",
      actions: [
        {
          label: "Data",
          icon: <BarChart2 className="h-6 w-6 text-cyan-500" />,
          bg: "bg-cyan-100",
          path: "/data",
        },
        {
          label: "FAQ",
          icon: <HelpCircle className="h-6 w-6 text-yellow-500" />,
          bg: "bg-yellow-100",
          path: "/faq",
        },
        {
          label: "Support",
          icon: <MessageSquare className="h-6 w-6 text-indigo-500" />,
          bg: "bg-indigo-100",
          path: "/support",
        },
        {
          label: "Profile",
          icon: <User className="h-6 w-6 text-red-500" />,
          bg: "bg-red-100",
          path: "/profile",
        },
      ],
    },
  ];

  return (
    <div className="space-y-6">
      {items.map((section) => (
        <div key={section.title} className="bg-white rounded-xl p-4 shadow-sm">
          <h3 className="font-medium mb-4">{section.title}</h3>
          <div className="grid grid-cols-4 gap-6">
            {section.actions.map((action) => (
              <div
                key={action.label}
                className="flex flex-col items-center cursor-pointer"
                onClick={() => navigate(action.path)}
              >
                <div className={`h-12 w-12 ${action.bg} rounded-full mb-2 flex items-center justify-center`}>
                  {action.icon}
                </div>
                <p className="text-xs">{action.label}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
