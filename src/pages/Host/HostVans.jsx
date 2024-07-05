import React, { Suspense } from 'react';
import { defer, Await, Link, useLoaderData } from 'react-router-dom';
import { getHostVans } from '../../api/API';

export const loader = async () => {
  return defer({ hostvans: getHostVans() })
}

const HostVans = () => {
  const dataPromise = useLoaderData();

  const renderHostVans = (vans) => {
    const hostVansElement = vans.map((van) => (
      <Link
        to={van.id}
        key={van.id}
        className='host-van-link-wrapper'
      >
        <div className="host-van-single" key={van.id}>
          <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
          <div className="host-van-info">
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
          </div>
        </div>
      </Link>
    ))
        
      return (
        <div className="host-vans-list">
            <section>
              {hostVansElement}
            </section>
        </div>
      )
      }
  
  return (
    <>
      <section>
        <h1 className='host-vans-title'>Your listed vans</h1>
          <Suspense fallback={<h2>Loading Vans...</h2>}>
            <Await resolve={(dataPromise.hostvans)}>
              {renderHostVans}
            </Await>
          </Suspense>
      </section>
        
    </>
  )
}

export default HostVans;