import React from 'react';
import { 
  Users, UserPlus, Calendar, ClipboardCheck, 
  ArrowUpRight, Download, ChevronRight, Check, 
  Banknote
} from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-[var(--color-bg-page)] h-fit p-1 text-[var(--color-text-main)]">
      
      {/* Header Section */}
      <div className="flex justify-between items-end mb-8">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-muted)] font-bold mb-1">
            Nexus Executive Suite
          </p>
          <h1 className="text-3xl font-bold">Organization Overview</h1>
        </div>
        <div className="flex gap-3">
          <div className="flex items-center gap-2 bg-[var(--color-surface)] px-4 py-2 rounded-lg border border-[var(--color-border-light)] shadow-sm">
            <Calendar size={16} className="text-[var(--color-text-dim)]" />
            <span className="text-sm font-medium">Oct 24, 2023 - Nov 23, 2023</span>
          </div>
          <button className="p-2 bg-[var(--color-surface)] rounded-lg border border-[var(--color-border-light)] shadow-sm hover:bg-gray-50 transition-all">
            <Download size={18} className="text-[var(--color-text-main)]" />
          </button>
        </div>
      </div>

      {/* Stats Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard icon={<Users />} label="Total Employees" value="1,284" change="+12%" progress={65} />
        <StatCard icon={<UserPlus />} label="New Hires" value="48" change="New" subtext="8% increase from last month" />
        <StatCard icon={<Calendar />} label="Attendance Rate" value="94.2%" badge="Stable" subtext="Within optimal performance range" hasCheck />
        <StatCard icon={<ClipboardCheck />} label="Pending Requests" value="14" badge="Action" badgeColor="bg-red-50" badgeText="text-red-500" subtext="3 urgent approvals required" isWarning />
      </div>

      {/* Middle Section: Distribution & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Department Distribution (2/3 width) */}
        <div className="lg:col-span-2 bg-[var(--color-surface)] p-6 rounded-2xl border border-[var(--color-border-light)] shadow-[var(--shadow-erp-card)]">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-bold text-lg">Department Distribution</h2>
            <div className="flex gap-4 text-[10px] font-bold uppercase tracking-wider">
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[var(--color-primary)]"></span> Full-time</div>
              <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-[var(--color-accent)]"></span> Contract</div>
            </div>
          </div>
          
          <div className="space-y-6">
            <ProgressBar label="Engineering" count="422" fullTime={75} contract={15} />
            <ProgressBar label="Product & Design" count="156" fullTime={55} contract={30} />
            <ProgressBar label="Operations" count="310" fullTime={85} contract={8} />
            <ProgressBar label="Marketing & Sales" count="284" fullTime={45} contract={40} />
          </div>
        </div>

        {/* Recent Activity (1/3 width) */}
        <div className="bg-[var(--color-surface)] p-6 rounded-2xl border border-[var(--color-border-light)] shadow-[var(--shadow-erp-card)] flex flex-col">
          <h2 className="font-bold text-lg mb-6">Recent Activity</h2>
          <div className="space-y-6 flex-1">
            <ActivityItem 
              img="https://i.pravatar.cc/150?u=sarah" 
              name="Sarah Jenkins" 
              action="Onboarded as Senior UX Designer" 
              time="2 hours ago" 
              statusIcon={<Check size={12} className="text-white"/>} 
              statusBg="bg-green-400"
            />
            <ActivityItem 
              icon={<Banknote className="text-[var(--color-text-main)]" size={18}/>} 
              name="Payroll Disbursed" 
              action="Q4 Performance bonuses processed for 84 employees" 
              time="5 hours ago" 
            />
            <ActivityItem 
              img="https://i.pravatar.cc/150?u=marcus" 
              name="Marcus Thorne" 
              action="Updated security credentials and VPN access levels" 
              time="Yesterday" 
              statusIcon={<div className="w-1 h-3 bg-white rotate-12"></div>}
              statusBg="bg-slate-900"
            />
          </div>
          <button className="mt-6 w-full text-center text-sm font-bold text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors flex items-center justify-center gap-1">
            View Full Audit Log
          </button>
        </div>
      </div>
    </div>
  );
};

/* --- Helper Components for Clean Code --- */

const StatCard = ({ icon, label, value, change, progress, subtext, badge, badgeColor="bg-gray-100", badgeText="text-gray-500", hasCheck, isWarning }) => (
  <div className="bg-[var(--color-surface)] p-5 rounded-2xl border border-[var(--color-border-light)] shadow-sm hover:shadow-[var(--shadow-erp-card)] transition-all group">
    <div className="flex justify-between items-start mb-4">
      <div className="p-2.5 bg-[var(--color-bg-page)] rounded-xl group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all text-[var(--color-text-main)]">
        {React.cloneElement(icon, { size: 20 })}
      </div>
      <span className={`text-[10px] font-bold px-2 py-1 rounded-md ${isWarning ? 'bg-red-50 text-red-500' : 'bg-green-50 text-[var(--color-accent)]'}`}>
        {change || badge}
      </span>
    </div>
    <p className="text-[var(--color-text-muted)] text-xs font-semibold mb-1">{label}</p>
    <h3 className="text-2xl font-bold mb-3">{value}</h3>
    {progress && (
      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-[var(--color-primary)]" style={{ width: `${progress}%` }}></div>
      </div>
    )}
    {subtext && (
      <p className={`text-[10px] flex items-center gap-1 font-medium ${isWarning ? 'text-red-500' : 'text-[var(--color-text-dim)]'}`}>
        {hasCheck && <Check size={12} className="text-blue-500" />}
        {isWarning && <span className="font-bold">!</span>}
        {subtext}
      </p>
    )}
  </div>
);

const ProgressBar = ({ label, count, fullTime, contract }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-xs font-bold">
      <span className="uppercase tracking-wider text-[var(--color-text-muted)]">{label}</span>
      <span>{count} EMPLOYEES</span>
    </div>
    <div className="w-full h-8 bg-gray-50 rounded-lg flex overflow-hidden p-1">
      <div className="h-full bg-[var(--color-primary)] rounded-md transition-all" style={{ width: `${fullTime}%` }}></div>
      <div className="h-full bg-[var(--color-accent)] rounded-md mx-1 transition-all" style={{ width: `${contract}%` }}></div>
    </div>
  </div>
);

const ActivityItem = ({ img, icon, name, action, time, statusIcon, statusBg }) => (
  <div className="flex gap-4 relative">
    <div className="relative">
      {img ? (
        <img src={img} className="w-10 h-10 rounded-full object-cover" alt={name} />
      ) : (
        <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
          {icon}
        </div>
      )}
      {statusIcon && (
        <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${statusBg} rounded-full border-2 border-white flex items-center justify-center`}>
          {statusIcon}
        </div>
      )}
    </div>
    <div className="flex-1">
      <h4 className="text-sm font-bold leading-tight">{name}</h4>
      <p className="text-[11px] text-[var(--color-text-muted)] font-medium mt-0.5">{action}</p>
      <span className="text-[10px] text-[var(--color-text-dim)] block mt-1">{time}</span>
    </div>
  </div>
);

export default Home;