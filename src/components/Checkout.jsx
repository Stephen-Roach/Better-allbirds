import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CheckoutProduct from './CheckoutProduct';
import './Checkout.css';
import { emptyCart } from '../redux/Cart/cart-actions';

function Checkout({ cart, amount, emptyCart }) {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  function handleSubmit() {
    emptyCart();
  }

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items = amount;
      price = item.price * amount;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, amount, setTotalPrice, setTotalItems]);
  return (
    <div className='checkout'>
      <div className='checkout__column'>
        <h2 className='checkout__title'>
          Congrats! You get free standard shipping.{' '}
          <img
            src='https://cdn.allbirds.com/image/upload/v1571355416/icons/peace.svg'
            alt=''
          />
        </h2>
        {cart?.map((item, idx) => (
          <CheckoutProduct
            id={item.id}
            key={idx}
            title={item.title}
            image={item.image}
            price={item.price}
            subTitle={item.subTitle}
          />
        ))}
        <div className='checkout__footer'>
          <div className='checkout__footerSubtotal'>
            <strong>
              <p>Subtotal</p>
            </strong>
            <p>${totalPrice} USD</p>
          </div>
          <div className='checkout__footerShipping'>
            <strong>
              <p>Shipping</p>
            </strong>
            <p>Free</p>
          </div>
          <button onClick={handleSubmit} className='checkout__clearButton'>
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
    amount: state.cart.amount,
  };
};

const mapDispatchToProps = (dispatch) => ({
  emptyCart: () => dispatch(emptyCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
