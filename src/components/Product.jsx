import React from 'react';

import './Product.css';

function Product(props) {
  function handleSubmit(e) {
    e.preventDefault();
    props.addItem(props.id);
  }

  return (
    <div className='product'>
      <div className='product__left'>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <img src={props.image} alt='' />
        <div className='product__info'>
          <p>
            <strong>{props.title}</strong>
          </p>{' '}
          <p>{props.subTitle}</p>
          <p className='product__price'>${props.price}</p>
        </div>
        <button className='product__addButton' onClick={handleSubmit}>
          Add Me!
        </button>
      </div>
      <div className='product__right'>
        <img src={props.image2} alt='' />
      </div>
    </div>
  );
}

export default Product;
