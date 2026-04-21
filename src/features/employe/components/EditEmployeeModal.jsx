import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { X, Save, User, Mail, Phone, MapPin, IdCard, ShieldCheck } from 'lucide-react';
import Input from '../../../shared/components/Input';
import { useEmploye } from '../hooks/useEmploye';

const EditEmployeeModal = ({ employee, onClose }) => {
  const { updateEmployee } = useEmploye();

  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      fullName: employee.fullName || '',
      email: employee.email || '',
      phone: employee.phone || '',
      city: employee.city || '',
      role: employee.role || '',
      department: employee.department || '',
    }
  });

  // Reset form values when the employee prop changes
  useEffect(() => {
    reset({
      fullName: employee.fullName || '',
      email: employee.email || '',
      phone: employee.phone || '',
      city: employee.city || '',
      role: employee.role || '',
      department: employee.department || '',
    });
  }, [employee, reset]);

  const onSubmit = (data) => {
    updateEmployee(employee.id, data);
    onClose();
  };

  return (
    // Backdrop
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm" onClick={onClose}>
      {/* Modal */}
      <div
        className="bg-[var(--color-surface)] w-full max-w-2xl rounded-2xl border border-[var(--color-border-light)] shadow-2xl overflow-hidden animate-modal-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-[var(--color-border-light)]">
          <div>
            <h2 className="text-lg font-bold text-[var(--color-text-main)]">Edit Employee</h2>
            <p className="text-xs text-[var(--color-text-dim)] font-medium mt-0.5">Update profile information for {employee.fullName}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-xl transition-colors text-[var(--color-text-muted)]"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Full Name"
              name="fullName"
              register={register}
              error={errors.fullName}
              rules={{ required: "Name is required" }}
              icon={User}
              placeholder="John Doe"
            />

            <Input
              label="Email Address"
              name="email"
              register={register}
              error={errors.email}
              rules={{
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" }
              }}
              icon={Mail}
              type="email"
              placeholder="john@nexus.com"
            />

            <Input
              label="Phone Number"
              name="phone"
              register={register}
              error={errors.phone}
              rules={{ required: "Phone is required" }}
              icon={Phone}
              placeholder="+91 00000 00000"
            />

            <Input
              label="City"
              name="city"
              register={register}
              error={errors.city}
              icon={MapPin}
              placeholder="Kanpur"
            />

            <Input
              label="Role"
              name="role"
              placeholder="Senior developer"
              register={register}
              error={errors.role}
              icon={IdCard}
            />

            <div className="space-y-2">
              <label className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-wider">
                Department
              </label>
              <div className="relative">
                <select
                  {...register("department", { required: "Department is required" })}
                  className="w-full bg-(--color-bg-input) border-none rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-ring-input outline-none appearance-none cursor-pointer"
                >
                  <option value="">Select Department</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Product & Design">Product & Design</option>
                  <option value="Operations">Operations</option>
                  <option value="Marketing">Marketing</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                  <ShieldCheck size={16} />
                </div>
              </div>
              {errors.department && (
                <div className="text-xs text-red-400 font-semibold">
                  {errors.department.message}
                </div>
              )}
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gray-50/50 px-8 py-5 flex justify-end gap-3 border-t border-[var(--color-border-light)]">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 rounded-xl text-sm font-bold text-[var(--color-text-muted)] border border-[var(--color-border-light)] hover:bg-gray-100 transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 bg-[var(--color-primary)] text-white px-8 py-2.5 rounded-xl text-sm font-bold hover:bg-[var(--color-primary-hover)] shadow-md transition-all"
            >
              <Save size={18} />
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployeeModal;
