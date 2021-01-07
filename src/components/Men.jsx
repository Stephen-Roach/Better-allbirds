import React from 'react';
import Product from './Product';
import './Men.css';
import { connect, useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/Cart/cart-actions';

function Men() {
  const products = useSelector((state) => state.dataLayer);
  const dispatch = useDispatch();

  const MensProduct = products.map((item) => (
    <Product
      key={item.id}
      image={item.image}
      image2={item.image2}
      id={item.id}
      title={item.title}
      subTitle={item.subTitle}
      price={item.price}
      description={item.description}
      addItem={(id) => dispatch(addToCart(id))}></Product>
  ));

  return (
    <div className='mens__product'>
      <div className='mens__productColumn'>{MensProduct}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state.dataLayer,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Men);
