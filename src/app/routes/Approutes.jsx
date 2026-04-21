import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layouts/AuthLayout'
import LoginPage from '../../features/auth/pages/LoginPage'
import RegisterPage from '../../features/auth/pages/RegisterPage'
import DashboardLayout from '../layouts/DashboardLayout'
import Home from '../../features/dashboard/pages/Home'
import PublicRoutes from './PublicRoutes'
import ProtectedRoutes from './ProtectedRoutes'
import EmployeePage from '../../features/employe/pages/EmployeePage'
import RegistrationPage from '../../features/registration/pages/RegistrationPage'

const Approutes = () => {
    let router = createBrowserRouter([
        {
            path: "/",
            element: <PublicRoutes />,
            children: [
                {
                    path: "",
                    element: <AuthLayout />,
                    children: [
                        {
                            path: "",
                            element: <LoginPage />
                        },
                        {
                            path: "register",
                            element: <RegisterPage />
                        }
                    ]
                }
            ]
        },
        {
            path: "/dashboard",
            element: <ProtectedRoutes />,
            children: [
                {
                    path: "",
                    element: <DashboardLayout />,
                    children: [
                        {
                            path: "",
                            element: <Home />
                        },
                        {
                            path: "employee",
                            element: <EmployeePage />
                        },
                        {
                            path: "registration",
                            element: <RegistrationPage />
                        },
                    ]
                }
            ]
        }
    ])

    return <RouterProvider router={router} />
}

export default Approutes
