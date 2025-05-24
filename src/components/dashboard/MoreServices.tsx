
import React from "react";
import { 
  BarChart2, 
  HelpCircle, 
  RefreshCw, 
  User, 
  MessageCircle, // For Platform/Support
  CreditCard, // For Buy BPC
  PlayCircle, // For Watch
  Phone, // For Airtime
  SquareDot, // Placeholder if no exact match for Platform, could also use MessageSquare
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Define custom color classes that match the image
const colors = {
  // Quick Actions colors
  quickActionPlatformBg: "bg-blue-100", // Light blue
  quickActionPlatformOutline: "border-blue-600", // Dark blue outline
  quickActionPlatformText: "text-blue-600", // Icon color

  quickActionBuyBPCBg: "bg-green-100", // Light green
  quickActionBuyBPCOutline: "border-green-600", // Dark green outline
  quickActionBuyBPCText: "text-green-600", // Icon color

  quickActionWatchBg: "bg-purple-100", // Light purple
  quickActionWatchOutline: "border-purple-600", // Dark purple outline
  quickActionWatchText: "text-purple-600", // Icon color

  quickActionAirtimeBg: "bg-orange-100", // Light orange
  quickActionAirtimeOutline: "border-orange-600", // Dark orange outline
  quickActionAirtimeText: "text-orange-600", // Icon color

  // More Services colors (assuming different shades based on the image)
  moreServiceDataBg: "bg-cyan-100", // Light cyan
  moreServiceDataText: "text-cyan-600",

  moreServiceFAQBg: "bg-yellow-100", // Light yellow
  moreServiceFAQOutline: "border-orange-500", // Orange outline for FAQ
  moreServiceFAQText: "text-yellow-600", // Icon color (appears a bit muted)

  moreServiceSupportBg: "bg-violet-100", // Light violet/purple
  moreServiceSupportText: "text-violet-600",

  moreServiceProfileBg: "bg-pink-100", // Light pink
  moreServiceProfileText: "text-pink-600",
};


const QuickActions = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
            <h3 className="font-medium mb-4">Quick Actions</h3>
            <div className="grid grid-cols-4 gap-6">
                {/* Platform */}
                <div
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => navigate("/platform")}
                >
                    <div className={`h-12 w-12 rounded-full mb-2 flex items-center justify-center ${colors.quickActionPlatformBg} border-2 ${colors.quickActionPlatformOutline}`}>
                        <MessageCircle className={`h-6 w-6 ${colors.quickActionPlatformText}`} /> {/* Using MessageCircle, adjust if a better icon is found */}
                    </div>
                    <p className="text-xs text-gray-700">Platform</p>
                </div>

                {/* Buy BPC */}
                <div
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => navigate("/buy-bpc")}
                >
                    <div className={`h-12 w-12 rounded-full mb-2 flex items-center justify-center ${colors.quickActionBuyBPCBg} border-2 ${colors.quickActionBuyBPCOutline}`}>
                        <CreditCard className={`h-6 w-6 ${colors.quickActionBuyBPCText}`} />
                    </div>
                    <p className="text-xs text-gray-700">Buy BPC</p>
                </div>

                {/* Watch */}
                <div
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => navigate("/watch")}
                >
                    <div className={`h-12 w-12 rounded-full mb-2 flex items-center justify-center ${colors.quickActionWatchBg} border-2 ${colors.quickActionWatchOutline}`}>
                        <PlayCircle className={`h-6 w-6 ${colors.quickActionWatchText}`} />
                    </div>
                    <p className="text-xs text-gray-700">Watch</p>
                </div>

                {/* Airtime */}
                <div
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => navigate("/airtime")}
                >
                    <div className={`h-12 w-12 rounded-full mb-2 flex items-center justify-center ${colors.quickActionAirtimeBg} border-2 ${colors.quickActionAirtimeOutline}`}>
                        <Phone className={`h-6 w-6 ${colors.quickActionAirtimeText}`} />
                    </div>
                    <p className="text-xs text-gray-700">Airtime</p>
                </div>
            </div>
        </div>
    );
};


const MoreServices = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
      <h3 className="font-medium mb-4">More Services</h3>
      <div className="grid grid-cols-4 gap-6">
        {/* Data */}
        <div 
          className="flex flex-col items-center cursor-pointer"
          onClick={() => navigate("/data")}
        >
          <div className={`h-12 w-12 rounded-full mb-2 flex items-center justify-center ${colors.moreServiceDataBg}`}>
            <BarChart2 className={`h-6 w-6 ${colors.moreServiceDataText}`} />
          </div>
          <p className="text-xs text-gray-700">Data</p>
        </div>

        {/* FAQ */}
        <div 
          className="flex flex-col items-center cursor-pointer"
          onClick={() => navigate("/faq")}
        >
          <div className={`h-12 w-12 rounded-full mb-2 flex items-center justify-center ${colors.moreServiceFAQBg} border-2 ${colors.moreServiceFAQOutline}`}>
            <HelpCircle className={`h-6 w-6 ${colors.moreServiceFAQText}`} />
          </div>
          <p className="text-xs text-gray-700">FAQ</p>
        </div>

        {/* Support */}
        <div 
          className="flex flex-col items-center cursor-pointer"
          onClick={() => navigate("/support")}
        >
          <div className={`h-12 w-12 rounded-full mb-2 flex items-center justify-center ${colors.moreServiceSupportBg}`}>
            <MessageCircle className={`h-6 w-6 ${colors.moreServiceSupportText}`} /> {/* Assuming MessageCircle for Support */}
          </div>
          <p className="text-xs text-gray-700">Support</p>
        </div>

        {/* Profile */}
        <div 
          className="flex flex-col items-center cursor-pointer"
          onClick={() => navigate("/profile")}
        >
          <div className={`h-12 w-12 rounded-full mb-2 flex items-center justify-center ${colors.moreServiceProfileBg}`}>
            <User className={`h-6 w-6 ${colors.moreServiceProfileText}`} />
          </div>
          <p className="text-xs text-gray-700">Profile</p>
        </div>
      </div>
    </div>
  );
};

// You would then use these components in your main App.js or a dashboard component
// For example:
// function App() {
//   return (
//     <div className="p-4">
//       <QuickActions />
//       <MoreServices />
//     </div>
//   );
// }

export { QuickActions, MoreServices };
