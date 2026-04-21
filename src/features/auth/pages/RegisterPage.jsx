
import { AtSign, Lock, ArrowRight, Grid3x3, User } from "lucide-react";
import Input from "../../../shared/components/Input";
import { NavLink } from "react-router";
import Button from "../../../shared/components/Button";
import { useAuth } from "../hooks/useAuth";

const RegisterPage = () => {

    const { register,handleRegister, errors, handleSubmit } = useAuth()

    return (
        /* Used the custom gradient variable here */
        <div className="min-h-screen bg-(--bg-gradient-login) px-4 py-8 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="w-full max-w-105 text-center">

                {/* Logo Section - Using primary color */}
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary shadow-lg">
                    <Grid3x3 className="h-6 w-6 text-accent" strokeWidth={2.4} />
                </div>

                <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-main">
                    Nexus ERP
                </h1>
                <p className="mt-2 text-sm sm:text-base text-text-muted">
                    Welcome to the Administrator Terminal
                </p>

                {/* Card Section - Using surface, shadow-erp-card, and border-light */}
                <form
                    onSubmit={handleSubmit(handleRegister)}
                    className=" mt-3 rounded-xl bg-surface px-5 py-3 text-left shadow-erp-card border border-border-light flex flex-col gap-1.5">

                    <Input
                        register={register}
                        name={"name"}
                        rules={{ required: "Name is mandatory." }}
                        error={errors.name}
                        label={"Administrator Name"}
                        type={"text"}
                        placeholder={"John Doe"}
                        icon={User}
                    />
                    <Input
                        register={register}
                        name={"email"}
                        rules={{ required: "Email is mandatory." }}
                        error={errors.email}
                        label={"Administrator Email"}
                        type={"email"}
                        placeholder={"name@nexus-erp.com"}
                        icon={AtSign}
                    />


                    <div className="flex flex-col gap-2 mt-2">

                        <Input
                            register={register}
                            name={"password"}
                            rules={{
                                required: "password is mandatory.",
                                minLength: {
                                    value: 6,
                                    message: "Atleast 6 characters are required"
                                }
                            }}
                            error={errors.password}
                            label={"Secure Password"}
                            type={"password"}
                            placeholder="••••••••"
                            icon={Lock}
                        />

                    </div>

                    {/* Button Section - Using primary and erp-shadow */}
                    <Button
                        text={"Sign Up to Terminal"}
                        icon={ArrowRight}
                    />

                    <p className="mt-6 text-center text-sm text-text-muted">
                        Already have an account?{" "}
                        <NavLink to="/" className="font-semibold text-text-main hover:underline">
                            Login
                        </NavLink>
                    </p>
                </form>

                {/* Stats Section - Using text-dim */}
                <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-3 sm:gap-4 text-center">
                    {[
                        { label: "Uptime", value: "99.9%" },
                        { label: "Encryption", value: "256-bit" },
                        { label: "MFA", value: "Enabled" },
                    ].map((stat) => (
                        <div key={stat.label}>
                            <div className="text-base sm:text-lg font-semibold text-text-dim">
                                {stat.value}
                            </div>
                            <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-text-dim">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                <p className="mt-12 text-xs text-text-dim">
                    © 2026 Nexus Enterprise Systems. All internal rights reserved.
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;