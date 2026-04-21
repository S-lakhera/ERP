import React from 'react';
import { useForm } from 'react-hook-form';
import { User, Mail, Phone, MapPin, Calendar, Save, ShieldCheck, IdCard } from 'lucide-react';
import Input from "../../../shared/components/Input";



const RegistrationPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="p-6 bg-[var(--color-bg-page)] min-h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-[var(--color-text-main)]">Employee Registration</h1>
        <p className="text-sm text-[var(--color-text-dim)]">Create a new profile in Nexus ERP.</p>
      </div>

      <form 
        onSubmit={handleSubmit(onSubmit)} 
        className="max-w-5xl bg-[var(--color-surface)] rounded-2xl border border-[var(--color-border-light)] shadow-[var(--shadow-erp-card)] overflow-hidden"
      >
        <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Reusing your Input Component */}
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
            type="role"
          />

          <div className="space-y-2">
                  <label className="text-xs font-bold text-[var(--color-text-muted)] uppercase tracking-wider">Department</label>
                  <div className="relative">
                    <select className="w-full bg-[var(--color-bg-input)] border-none rounded-xl py-3 px-4 text-sm focus:ring-2 focus:ring-[var(--color-ring-input)] outline-none appearance-none">
                      <option>Engineering</option>
                      <option>Product & Design</option>
                      <option>Operations</option>
                      <option>Marketing</option>
                    </select>
                    <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-400">
                      <ShieldCheck size={16} />
                    </div>
                  </div>
                </div>
        </div>

        <div className="bg-gray-50/50 p-6 flex justify-end gap-4 border-t border-[var(--color-border-light)]">
          <button type="submit" className="flex items-center gap-2 bg-[var(--color-primary)] text-white px-8 py-2.5 rounded-xl text-sm font-bold hover:bg-[var(--color-primary-hover)] shadow-md transition-all">
            <Save size={18} />
            Register Employee
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationPage;