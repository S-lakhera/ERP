import React from 'react';
import { Edit2, Trash2, MoreVertical } from 'lucide-react';

const EmployeeTable = ({ employees }) => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-[var(--color-border-light)]">
            <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Employee</th>
            <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Role & Dept</th>
            <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Status</th>
            <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Joined Date</th>
            <th className="px-6 py-4 text-right text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {employees.map((emp) => (
            <tr key={emp.id} className="hover:bg-gray-50/50 transition-colors group">
              <td className="px-6 py-4">
                <div className="flex items-center gap-3">
                  <img src={emp.img} alt="" className="w-10 h-10 rounded-full border border-gray-100 object-cover" />
                  <div>
                    <div className="text-sm font-bold text-[var(--color-text-main)]">{emp.name}</div>
                    <div className="text-[11px] text-[var(--color-text-dim)] font-medium">{emp.email}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="text-sm font-semibold text-[var(--color-text-main)]">{emp.role}</div>
                <div className="text-[11px] text-[var(--color-text-muted)]">{emp.department}</div>
              </td>
              <td className="px-6 py-4">
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight ${
                  emp.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 
                  emp.status === 'On Leave' ? 'bg-amber-50 text-amber-600' : 'bg-red-50 text-red-600'
                }`}>
                  {emp.status}
                </span>
              </td>
              <td className="px-6 py-4 text-sm font-medium text-[var(--color-text-muted)]">
                {emp.joinedDate}
              </td>
              <td className="px-6 py-4 text-right">
                <div className="flex justify-end gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                  <button className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-blue-500 border border-transparent hover:border-gray-200 transition-all cursor-pointer">
                    <Edit2 size={16} />
                  </button>
                  <button className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-red-500 border border-transparent hover:border-gray-200 transition-all cursor-pointer">
                    <Trash2 size={16} />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;