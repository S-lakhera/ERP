import React from 'react';
import EmployeeTable from '../components/EmployeeTable'; // path check kar lena
import { UserPlus, Filter, Search } from 'lucide-react';
import { NavLink } from 'react-router';
import { useEmployeeContext } from '../../../shared/hooks/useContextData';

const EmployeePage = () => {
  // Dummy Data
  const {employees} = useEmployeeContext();

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