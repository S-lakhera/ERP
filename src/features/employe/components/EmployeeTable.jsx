import React, { useState } from 'react';
import { Edit2, Trash2, Users } from 'lucide-react'; // Users icon add kiya
import { useEmploye } from '../hooks/useEmploye';
import EditEmployeeModal from './EditEmployeeModal';

const EmployeeTable = ({ employees }) => {
  const { deleteEmployee } = useEmploye();
  const [editingEmployee, setEditingEmployee] = useState(null);

  // 1. Corner Case: If employees array is empty or null
  if (!employees || employees.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4">
        <div className="bg-gray-50 p-6 rounded-full mb-4">
          <Users size={48} className="text-[var(--color-text-dim)]" />
        </div>
        <h3 className="text-lg font-bold text-[var(--color-text-main)]">No employees found</h3>
        <p className="text-sm text-[var(--color-text-dim)] text-center max-w-xs mt-1">
          It looks like you haven't added any employees yet. Start by clicking the "Add New" button.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[var(--color-border-light)]">
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Employee</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Role & Dept</th>
              <th className="px-6 py-4 text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Joined Date</th>
              <th className="px-6 py-4 text-right text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-muted)]">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {employees.map((emp) => {
              const firstLetter = emp.fullName ? emp.fullName.charAt(0).toUpperCase() : '?';

              return (
                <tr key={emp.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-[var(--color-bg-page)] font-bold text-sm shadow-md uppercase shrink-0">
                        {firstLetter}
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-[var(--color-text-main)] truncate">{emp.fullName}</div>
                        <div className="text-[11px] text-[var(--color-text-dim)] font-medium truncate">{emp.email}</div>
                      </div>
                    </div>
                  </td>
                  
                  <td className="px-6 py-4">
                    <div className="text-sm font-semibold text-[var(--color-text-main)]">{emp.role}</div>
                    <div className="text-[11px] text-[var(--color-text-muted)]">{emp.department}</div>
                  </td>
                  
                  <td className="px-6 py-4 text-sm font-medium text-[var(--color-text-muted)]">
                    {typeof emp.joiningDate === 'number' 
                      ? new Date(emp.joiningDate).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }) 
                      : emp.joiningDate}
                  </td>
                  
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={() => setEditingEmployee(emp)}
                        className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-blue-500 border border-transparent hover:border-gray-200 transition-all cursor-pointer"
                      >
                        <Edit2 size={16} />
                      </button>
                      <button
                        onClick={() => deleteEmployee(emp.id)}
                        className="p-2 hover:bg-white hover:shadow-sm rounded-lg text-red-500 border border-transparent hover:border-gray-200 transition-all cursor-pointer"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {editingEmployee && (
        <EditEmployeeModal
          employee={editingEmployee}
          onClose={() => setEditingEmployee(null)}
        />
      )}
    </>
  );
};

export default EmployeeTable;