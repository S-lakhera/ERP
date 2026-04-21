import React from 'react'
import { Navigate, Outlet, useNavigate } from 'react-router'
import { useAuthContext } from '../../shared/hooks/useContextData'

const ProtectedRoutes = () => {
    let navigate = useNavigate()
    const {loggedInAdmin} = useAuthContext()

    if(!loggedInAdmin)
    {
        return <Navigate to="/" />
    }
  return <Outlet/>
}

export default ProtectedRoutes
