import React from 'react';
import './CheckoutProduct.css';

function CheckoutProduct(props) {
  function handleAddQuantity(e) {
    e.preventDefault();
    props.addQuantity(props.id);
  }

  function handleSubQuantity(e) {
    e.preventDefault();
    props.subQuantity(props.id);
  }

  function handleRemoveItem(e) {
    e.preventDefault();
    props.removeFromCart(props.id);
  }

  return (
    <div className='checkoutProduct'>
      <div className='checkoutProduct__left'>
        <img className='checkoutProduct__image' src={props.image} alt='' />
      </div>
      <div className='checkoutProduct__middle'>
        <h3>{props.title}</h3>
        <p>{props.subTitle}</p>
        <button
          className='checkoutProduct__decrease'
          onClick={handleSubQuantity}>
          -1 Qty
        </button>{' '}
        <br />
        <p>Quantity: {props.quantity}</p>
        <button
          className='checkoutProduct__increase'
          onClick={handleAddQuantity}>
          +1 Qty
        </button>
      </div>
      <div className='checkoutProduct__right'>
        <button className='checkoutProduct__delete' onClick={handleRemoveItem}>
          X
        </button>

        <p className='checkoutProduct__price'>${props.price}</p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
