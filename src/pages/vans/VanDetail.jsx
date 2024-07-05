import React from 'react'
import { Link, useLocation, useLoaderData } from 'react-router-dom';
import { getVans } from '../../api/API';

export const loader = ({ params }) => {
    return getVans(params.id);
}

const VanDetail = () => {
    const location  = useLocation();
    const van = useLoaderData();

    const type  = location.state?.type || 'all';

  return (
    <div className="van-detail-container">
        <Link 
        to={`..${location.state?.search}`} 
        relative='path' 
        className='back-button' 
        > &larr; <span>Back to {type} vans</span>
        </Link>
        {van ? (
            <div className="van-detail">
                <img src={van.imageUrl} alt="" />
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
                <h2>{van.name}</h2>
                <p className="van-price"><span>${van.price}</span>/day</p>
                <p>{van.description}</p>
                <button className="link-button">Rent this van</button>
            </div>
        ) : (
            <h2>Loading...</h2>
        )}
    </div> 
  )
}

export default VanDetail;