import React from 'react';
import { Search, Bell, Grid, UserPlus } from 'lucide-react';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <div className="h-20 w-full bg-white border-b border-gray-100 flex items-center justify-between px-8">
      {/* Left: Search Bar */}
      <div className="relative w-96">
        <span className="absolute inset-y-0 left-3 flex items-center text-gray-400">
          <Search size={18} />
        </span>
        <input
          type="text"
          placeholder="Global search..."
          className="w-full bg-[#F1F5F9] border-none rounded-full py-2.5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-slate-200 transition-all outline-none"
        />
      </div>

     

      {/* Right: Actions & Profile */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4 text-gray-500">
          <div className="relative cursor-pointer hover:text-gray-800 transition-colors">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
          </div>
          <Grid size={20} className="cursor-pointer hover:text-gray-800 transition-colors" />
        </div>

        <NavLink to="/dashboard/registration" className="flex items-center gap-2 bg-[#064E3B] text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:bg-[#065f46] transition-all shadow-sm">
          <UserPlus size={18} />
          ADD EMPLOYEE
        </NavLink>

        <div className="w-10 h-10 rounded-lg overflow-hidden border-2 border-gray-100 cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;