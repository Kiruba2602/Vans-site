import React from 'react';
import { useOutletContext } from 'react-router-dom';

const HostVanPhotos = () => {
  const { van } = useOutletContext();

  if(!van) {
    return <h2>Loading...</h2>
  }
  return (
    <img src={van.imageUrl} alt="" className='host-van-detail-image' />
  )
}

export default HostVanPhotos;