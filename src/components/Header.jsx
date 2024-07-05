import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import userIcon from '../assets/user-icon.png';

const Header = () => {
  return (
    <header>
        <Link to={'/'} className='site-logo'>#VANLIFE</Link>
        <nav>
            <NavLink 
              to={'/host'} 
              className={({ isActive }) => isActive ? 'active-link' : null} 
            >
              Host
            </NavLink>
            <NavLink 
              to={'/about'} 
              className={({ isActive }) => isActive ? 'active-link' : null} 
            >
              About
            </NavLink>
            <NavLink 
              to={'/vans'} 
              className={({ isActive }) => isActive ? 'active-link' : null} 
            >
              Vans
            </NavLink>
            <Link to={'/login'} className='login-link'>
              <img src={userIcon} alt="" className='login-icon' />
            </Link>
        </nav>
    </header>
  )
}

export default Header;