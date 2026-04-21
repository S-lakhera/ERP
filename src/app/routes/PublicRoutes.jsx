import React from 'react'
import { Navigate, Outlet } from 'react-router'
import { useAuthContext } from '../../shared/hooks/useContextData'

const PublicRoutes = () => {
    const {loggedInAdmin} = useAuthContext()
    
    if(loggedInAdmin)
    {
        return <Navigate to="/dashboard" />
    }
  return <Outlet/>
}

export default PublicRoutes
