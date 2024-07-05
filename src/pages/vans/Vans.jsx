import React from 'react';
import { Link, useLoaderData, useSearchParams } from 'react-router-dom';
import { getVans } from '../../api/API';

export const loader = () => {
  return getVans();
}

const Vans = () => {
  const vans = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');

  const displayedVans = typeFilter ? vans.filter(van => van.type === typeFilter) : vans;

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

  return (
    <div className='van-list-container'>
      <h1>Explore our van options</h1>
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
        {displayedVans.map(van => (
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
        ))}
      </div>
    </div> 
  )
}

export default Vans;