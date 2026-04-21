import React from "react";
import { AtSign, Lock, ArrowRight, Grid3x3 } from "lucide-react";
import Input from "../../../shared/components/Input";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";
import Button from "../../../shared/components/Button";
import { useAuthContext } from "../../../shared/hooks/useContextData";
import { useAuth } from "../hooks/useAuth";

const LoginPage = () => {

    const {register, handleLogin, handleSubmit, errors } = useAuth()

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
                    Access the Administrator Terminal
                </p>

                {/* Card Section - Using surface, shadow-erp-card, and border-light */}
                <form
                    onSubmit={handleSubmit(handleLogin)}
                    className="mt-8 sm:mt-10 rounded-xl bg-surface px-5 py-6 sm:px-8 sm:py-9 text-left shadow-erp-card border border-border-light">

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

                        <div className="mb-2 flex items-center justify-between gap-4">
                            <label className="block text-xs font-semibold uppercase tracking-wide text-text-muted">

                            </label>
                            <button
                                type="button"
                                className="text-xs font-semibold text-text-muted hover:text-text-main whitespace-nowrap"
                            >
                                Forgot Password?
                            </button>
                        </div>
                    </div>

                    {/* Button Section*/}
                    <Button
                        text={"Sign In to Terminal"}
                        icon={ArrowRight}
                    />

                    <p className="mt-7 text-center text-sm text-text-muted">
                        Don't have an account?{" "}
                        <NavLink to="/register" className="font-semibold text-text-main hover:underline">
                            Register
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

export default LoginPage;