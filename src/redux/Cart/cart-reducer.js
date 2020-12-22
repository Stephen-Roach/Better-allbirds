import * as actionTypes from './cart-types';

const initialState = {
  products: [],
  cart: [],
  amount: 0,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: state.cart.concat(action.payload),
        amount: state.amount + 1,
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
        amount: state.amount - 1,
      };
    case actionTypes.ADD_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.SUB_QUANTITY:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.id
            ? {
                ...product,
                quantity: product.quantity !== 1 ? product.quantity - 1 : 1,
              }
            : product
        ),
      };
    case actionTypes.EMPTY_CART:
      return {
        ...state,
        cart: [],
        amount: 0,
      };
    default:
      return state;
  }
};
export default CartReducer;
