import React from 'react';
import EmployeeTable from '../components/EmployeeTable'; // path check kar lena
import { UserPlus, Filter, Search } from 'lucide-react';
import { NavLink } from 'react-router';

const EmployeePage = () => {
  // Dummy Data
  const employees = [
    { id: 1, name: "Sarah Jenkins", email: "sarah.j@nexus.com", role: "Senior UX Designer", department: "Product & Design", status: "Active", joinedDate: "Oct 24, 2023", img: "https://i.pravatar.cc/150?u=sarah" },
    { id: 2, name: "Marcus Thorne", email: "m.thorne@nexus.com", role: "Full Stack Developer", department: "Engineering", status: "On Leave", joinedDate: "Jan 12, 2024", img: "https://i.pravatar.cc/150?u=marcus" },
    { id: 3, name: "Amara Okoro", email: "amara.o@nexus.com", role: "Operations Lead", department: "Operations", status: "Active", joinedDate: "Mar 05, 2023", img: "https://i.pravatar.cc/150?u=amara" },
    { id: 4, name: "David Miller", email: "d.miller@nexus.com", role: "Marketing Manager", department: "Marketing", status: "Terminated", joinedDate: "Jun 18, 2023", img: "https://i.pravatar.cc/150?u=david" },
  ];

  return (
    <div className="p-8 bg-[var(--color-bg-page)] min-h-full">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[var(--color-text-main)]">Employee Directory</h1>
          <p className="text-sm text-[var(--color-text-dim)] font-medium">Manage and view all your organization members.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-[var(--color-border-light)] px-4 py-2.5 rounded-xl text-sm font-bold text-[var(--color-text-muted)] hover:bg-gray-50 transition-all shadow-sm">
            <Filter size={18} />
            Filter
          </button>
          <NavLink to="/dashboard/registration" className="flex items-center gap-2 bg-[var(--color-primary)] text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:bg-[var(--color-primary-hover)] shadow-md transition-all">
            <UserPlus size={18} />
            Add New
          </NavLink>
        </div>
      </div>

      {/* Directory Table Card */}
      <div className="bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border-light)] shadow-[var(--shadow-erp-card)] overflow-hidden">
        <EmployeeTable employees={employees} />
      </div>
    </div>
  );
};

export default EmployeePage;