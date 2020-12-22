import React from 'react';
import { connect } from 'react-redux';
import './Product.css';
import { addToCart } from '../redux/Cart/cart-actions';

function Product(props) {
  function handleSubmit() {
    props.addToCart({
      id: props.id,
      title: props.title,
      subTitle: props.subTitle,
      price: props.price,
      image: props.image,
    });
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

const mapDispatchToProps = (dispatch) => ({
  addToCart: (id) => dispatch(addToCart(id)),
});

export default connect(null, mapDispatchToProps)(Product);
