import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../redux/Cart/cart-actions';
import { addQuantity } from '../redux/Cart/cart-actions';
import './CheckoutProduct.css';

function CheckoutProduct(props) {
  function handleSubmit() {
    props.removeFromCart({
      id: props.id,
    });
  }

  // const handleAddQty = () => {
  //   addQuantity({
  //     id: props.id,
  //   });
  // };

  return (
    <div className='checkoutProduct'>
      <div className='checkoutProduct__left'>
        <img className='checkoutProduct__image' src={props.image} alt='' />
      </div>
      <div className='checkoutProduct__middle'>
        <h3>{props.title}</h3>
        <p>{props.subTitle}</p>
        <button className='checkoutProduct__decrease'>-1 Qty</button>
        <button className='checkoutProduct__increase'>+1 Qty</button>
      </div>
      <div className='checkoutProduct__right'>
        <button className='checkoutProduct__delete' onClick={handleSubmit}>
          X
        </button>

        <p className='checkoutProduct__price'>${props.price}</p>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (id) => dispatch(removeFromCart(id)),
  addQuantity: (id) => dispatch(addQuantity(id)),
});

export default connect(null, mapDispatchToProps)(CheckoutProduct);
