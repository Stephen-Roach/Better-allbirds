import * as actionTypes from './cart-types';
import store from '../store';

//This will add an item
export const addToCart = (id) => {
  const cart = store.getState().cart.items;
  const itemTotal = store.getState().dataLayer.find((item) => id === item.id)
    .price;
  return {
    type: actionTypes.ADD_TO_CART,
    id,
    itemTotal,
    cart,
  };
};

//This will subtract the quantity of an item
export const subQuantity = (id) => {
  const cart = store.getState().cart.items;
  const itemTotal = store.getState().dataLayer.find((item) => id === item.id)
    .price;
  return {
    type: actionTypes.SUB_QUANTITY,
    id,
    cart,
    itemTotal,
  };
};

//This will add the quantity of a single item
export const addQuantity = (id) => {
  const cart = store.getState().cart.items;
  const itemTotal = store.getState().dataLayer.find((item) => id === item.id)
    .price;
  return {
    type: actionTypes.ADD_QUANTITY,
    id,
    cart,
    itemTotal,
  };
};

//This will remove an item completely
export const removeFromCart = (id) => {
  const cart = store.getState().cart.items;
  const itemTotal = store.getState().dataLayer.find((item) => id === item.id)
    .price;
  return {
    type: actionTypes.REMOVE_FROM_CART,
    id,
    cart,
    itemTotal,
  };
};

//This will empty the entire cart
export const emptyCart = () => {
  return {
    type: actionTypes.EMPTY_CART,
  };
};
