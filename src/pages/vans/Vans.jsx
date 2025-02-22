import React, { Suspense } from 'react';
import { defer, Await, Link, useLoaderData, useSearchParams } from 'react-router-dom';
import { getVans } from '../../api/API';

export const loader = () => {
  return defer({vans: getVans()});
}

const Vans = () => {
  const dataPromise = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');

  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
        if (value === null) {
            prevParams.delete(key)
        } else {
            prevParams.set(key, value)
        }
        return prevParams
    })
  }

  function renderVanElements(vans) {
      const displayedVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans;
      
      const vanElements = displayedVans.map(van => (
        <div key={van.id} className="van-title">
          <Link to={van.id} state={{search: `?${searchParams.toString()}`, type: typeFilter}}>
            <img src={van.imageUrl} alt="" width={'100px'}/>
            <div className="van-info">
              <h3>{van.name}</h3>
              <p>${van.price}<span>/day</span></p>
            </div>
            <i className={`van-type ${van.type} selected`}>{van.type}</i>
          </Link>
        </div>
      ))
      return (
      <>
        <div className='van-list-filter-buttons'>
          <button 
            onClick={() => handleFilterChange("type", "simple")} 
            className={`van-type simple ${typeFilter === 'simple' ? 'selected' : ''}`}
          >
            Simple
          </button>
          <button 
            onClick={() => handleFilterChange("type", "rugged")} 
            className={`van-type rugged ${typeFilter === 'rugged' ? 'selected' : ''}`}
          >
            Rugged
          </button>
          <button 
            onClick={() => handleFilterChange("type", "luxury")} 
            className={`van-type luxury ${typeFilter === 'luxury' ? 'selected' : ''}`}
          >
            Luxury
          </button>
          { typeFilter ? (
            <button 
              onClick={() => setSearchParams({})} 
              className='van-type clear-filters'
              >
                Clear filter
              </button>
            ): null}
        </div>
        <div className="van-list">
          {vanElements}
        </div>
      </>
      )
  }

  return (
    <div className='van-list-container'>
      <h1>Explore our van options</h1>
      <Suspense fallback={<h2>Loading Vans...</h2>}>
        <Await resolve={dataPromise.vans}>
          {renderVanElements}
        </Await>
      </Suspense>
      
    </div> 
  )
}

export default Vans;