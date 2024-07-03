import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Vans = () => {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch("/api/vans")
    .then(response => response.json())
    .then(data => setVans(data.vans))
  }, []);

  return (
    <div className='van-list-container'>
      <h1>Explore our van options</h1>
      <div className="van-list">
        {vans.map(van => (
          <div key={van.id} className="van-title">
            <Link to={`/vans/${van.id}`}>
              <img src={van.imageUrl} alt="" width={'200px'}/>
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