import React from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import CheckoutProduct from './CheckoutProduct';
import './Checkout.css';
import {
  emptyCart,
  addQuantity,
  subQuantity,
  removeFromCart,
} from '../redux/Cart/cart-actions';

function Checkout(props) {
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotal = useSelector((state) => state.cart.total);
  const products = useSelector((state) => state.dataLayer);
  const dispatch = useDispatch();

  const itemsInCart = cartItems.map((item) => {
    for (let i = 0; i < products.length; i++) {
      if (item.id === products[i].id) {
        console.log(products[i].name);
        return (
          <CheckoutProduct
            key={products[i].id}
            id={products[i].id}
            title={products[i].title}
            price={products[i].price}
            image={products[i].image}
            quantity={item.quantity}
            addQuantity={(id) => dispatch(addQuantity(id))}
            subQuantity={(id) => dispatch(subQuantity(id))}
            removeFromCart={(id) =>
              dispatch(removeFromCart(id))
            }></CheckoutProduct>
        );
      }
    }
  });
  return (
    // <>
    //   <CheckoutWrapper>{itemsInCart}</CheckoutWrapper>
    <div className='checkout'>
      <div className='checkout__column'>
        <h2 className='checkout__title'>
          Congrats! You get free standard shipping.{' '}
          <img
            src='https://cdn.allbirds.com/image/upload/v1571355416/icons/peace.svg'
            alt=''
          />
        </h2>

        {itemsInCart}
        <div className='checkout__footer'>
          <div className='checkout__footerSubtotal'>
            <strong>
              <p>Subtotal</p>
            </strong>
            <p>${cartTotal} USD</p>
          </div>
          <div className='checkout__footerShipping'>
            <strong>
              <p>Shipping</p>
            </strong>
            <p>Free</p>
          </div>
          <button
            onClick={() => dispatch(emptyCart())}
            className='checkout__clearButton'>
            Clear All
          </button>
        </div>
      </div>
    </div>
    // </>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addQuantity: (id) => {
      dispatch(addQuantity(id));
    },
    subQuantity: (id) => {
      dispatch(subQuantity(id));
    },
    removeFromCart: (id) => {
      dispatch(removeFromCart(id));
    },
    emptyCart: () => dispatch(emptyCart),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
