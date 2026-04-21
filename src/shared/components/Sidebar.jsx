import React from 'react';
import { LayoutDashboard, Users, CalendarCheck, Banknote, Settings, HelpCircle, Plus } from 'lucide-react';
import { NavLink } from 'react-router';
import { useAuthContext } from '../hooks/useContextData';

const Sidebar = () => {

  const {logoutAdmin} = useAuthContext()

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Dashboard', path: '/dashboard' },
    { icon: <Users size={20} />, label: 'Employee', path: '/dashboard/employee' },
    { icon: <CalendarCheck size={20} />, label: 'Registration', path: '/dashboard/registration' },
  ];

  return (
    <div className="w-64 h-screen bg-[#F8F9FB] border-r border-gray-200 flex flex-col p-4 shrink-0">
      {/* Logo Section */}
      <div className="flex items-center gap-3 px-2 mb-10">
        <div className="w-10 h-10 bg-[#0F172A] rounded-lg flex items-center justify-center">
          <div className="w-5 h-5 border-2 border-white rotate-45"></div>
        </div>
        <div>
          <h1 className="font-bold text-gray-900 leading-tight">Nexus ERP</h1>
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">Admin Terminal</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 space-y-1">
        {menuItems.map((item, index) => (
          <NavLink
            end
            key={index}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 rounded-md transition-all
              ${isActive
                ? 'bg-white shadow-sm border-l-4 border-[#0F172A] text-[#0F172A]'
                : 'text-gray-500 hover:bg-gray-100'}
            `}
          >
            {({ isActive }) => (
              <>
                <span className={isActive ? 'text-[#0F172A]' : 'text-gray-400'}>
                  {item.icon}
                </span>
                <span className="text-sm font-medium">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Bottom Section */}
      <div className="space-y-4">
        <button
          onClick={() => logoutAdmin()}
          className="w-full bg-[#0F172A] text-white py-3 rounded-lg flex items-center justify-center gap-2 text-sm font-semibold hover:bg-slate-800 transition-all shadow-md uppercase tracking-wider">
          Logout
        </button>
        <div className="flex items-center gap-2 px-4 py-2 text-gray-500 cursor-pointer hover:text-gray-800">
          <HelpCircle size={18} />
          <span className="text-sm">Support</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;