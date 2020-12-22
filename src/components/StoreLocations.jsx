import React from 'react';
import './StoreLocations.css';

function StoreLocations(props) {
  return (
    <div className='storeLocations'>
      <div className='StoreLocations__left'>
        <img className='storeLocations__leftImg' src={props.img} alt='' />
      </div>
      <div className='storeLocations__right'>
        <h2>{props.city}</h2>
        <p>{props.description}</p>
        <strong>
          <h3>Location</h3>
        </strong>
        <p>{props.locationStreet}</p>
        <p>{props.locationCity}</p>
        <strong>
          <h3>Hours</h3>
        </strong>
        <p>{props.hours}</p>
        <p>{props.daysClosed}</p>
        <strong>
          <h3>Phone</h3>
        </strong>
        <p>{props.phone}</p>
      </div>
    </div>
  );
}

export default StoreLocations;
