
import React from "react";
import { MessageSquare, CreditCard, PlayCircle, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const QuickActions = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
      <h3 className="font-medium mb-4">Quick Actions</h3>
      <div className="grid grid-cols-4 gap-6">
        <div 
          className="flex flex-col items-center cursor-pointer"
          onClick={() => navigate("/platform")}
        >
          <div className="h-12 w-12 bg-blue-100 rounded-full mb-2 flex items-center justify-center">
            <MessageSquare className="h-6 w-6 text-blue-500" />
          </div>
          <p className="text-xs">Platform</p>
        </div>
        <div 
          className="flex flex-col items-center cursor-pointer"
          onClick={() => navigate("/buy-bpc")}
        >
          <div className="h-12 w-12 bg-green-100 rounded-full mb-2 flex items-center justify-center">
            <CreditCard className="h-6 w-6 text-green-500" />
          </div>
          <p className="text-xs">Buy BPC</p>
        </div>
        <div 
          className="flex flex-col items-center cursor-pointer"
          onClick={() => navigate("/watch")}
        >
          <div className="h-12 w-12 bg-purple-100 rounded-full mb-2 flex items-center justify-center">
            <PlayCircle className="h-6 w-6 text-purple-500" />
          </div>
          <p className="text-xs">Watch</p>
        </div>
        <div 
          className="flex flex-col items-center cursor-pointer"
          onClick={() => navigate("/airtime")}
        >
          <div className="h-12 w-12 bg-orange-100 rounded-full mb-2 flex items-center justify-center">
            <Phone className="h-6 w-6 text-orange-500" />
          </div>
          <p className="text-xs">Airtime</p>
        </div>
      </div>
    </div>
  );
};

export default QuickActions;
