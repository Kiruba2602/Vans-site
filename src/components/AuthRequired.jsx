import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const AuthRequired = () => {
  
    const isLoggedIn = localStorage.getItem("loggedin");
    const location = useLocation();

    if(!isLoggedIn) {
        return (
            <Navigate to={'/login'} state ={{
                message: "You must login first.",
                from: location.pathname
            }}
            replace
            />
        )
    }
    return <Outlet />
}

export default AuthRequired;