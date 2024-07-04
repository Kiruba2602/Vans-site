import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const HostLayout = () => {
  return (
    <>
        <nav className='host-nav'>
            <Link 
              to={'.'}
              className={({ isActive }) => isActive ? 'active-link' : null}
            >
              Dashboard
            </Link>
            <Link 
              to={'income'}
              className={({ isActive }) => isActive ? 'active-link' : null}
            >
              Income
            </Link>
            <Link 
              to={'vans'}
              className={({ isActive }) => isActive ? 'active-link' : null}
            >
              Vans
            </Link>
            <Link 
              to={'reviews'}
              className={({ isActive }) => isActive ? 'active-link' : null}
            >
              Reviews
            </Link>
        </nav>
        <Outlet />
    </>
  )
}

export default HostLayout;