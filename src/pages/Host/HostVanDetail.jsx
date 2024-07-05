import React from 'react'
import { Outlet, Link, NavLink, useLoaderData } from 'react-router-dom';
import { getHostVans } from '../../api/API';

export const loader = async () => {
  return getHostVans(params.id)
}

const HostVanDetail = () => {
  const van = useLoaderData();

  return (
    <>
      <section>
        <Link 
          to={'..'} 
          relative='path' 
          className='back-button' 
        > &larr; <span>Back to all vans</span>
        </Link>
        <div className="host-van-detail-layout-container">
          {
            van ? (
              <div className="host-van-detail">
                <img src={van.imageUrl} alt="" width={150} />
                <div className="host-van-detail-info-text">
                  <i className={`van-type van-type-${van.type}`}>{van.type}</i>
                  <h3>{van.name}</h3>
                  <h4>${van.price}/day</h4>
                </div>
              </div>
            ) : (
              <h2>Loading...</h2>
            )
          }

          <nav className="host-van-detail-nav">
            <NavLink 
              to={'.'}
              className={({ isActive }) => isActive ? 'active-link' : null}
            >
              Details
            </NavLink>
            <NavLink 
              to={'pricing'}
              className={({ isActive }) => isActive ? 'active-link' : null}
            >
              Pricing
            </NavLink>
            <NavLink 
              to={'photos'}
              className={({ isActive }) => isActive ? 'active-link' : null}
            >
              Photos
            </NavLink>
          </nav>
          <Outlet context={{ van }} />
        </div>
      </section>
        
    </>
  )
}

export default HostVanDetail;