import * as actionTypes from './cart-types';

//This will add an item
export const addToCart = (product) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: product,
  };
};
//This will remove an item completely
export const removeFromCart = (product) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: product,
  };
};
//This will subtract the quantity of an item
export const subtractQuantity = (id) => {
  return {
    type: actionTypes.SUB_QUANTITY,
    id,
  };
};

//This will add the quantity of a single item
export const addQuantity = (product) => {
  return {
    type: actionTypes.ADD_QUANTITY,
    payload: product,
  };
};

//This will empty the entire cart
export const emptyCart = () => {
  return {
    type: actionTypes.EMPTY_CART,
  };
};
