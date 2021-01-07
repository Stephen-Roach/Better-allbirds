import * as actionTypes from './cart-types';

const initialState = {
  items: [],
  total: 0,
};

const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      let itemExists = action.cart.find((item) => item.id === action.id);
      if (itemExists) {
        itemExists.quantity++;
        return {
          ...state,
          total: state.total + action.itemTotal,
        };
      }
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: action.id,
            quantity: 1,
          },
        ],
        total: state.total + action.itemTotal,
      };
    case actionTypes.ADD_QUANTITY:
      let addItem = action.cart.find((item) => item.id === action.id);
      addItem.quantity++;
      return {
        ...state,
        total: state.total + action.itemTotal,
      };
    case actionTypes.SUB_QUANTITY:
      let subItem = action.cart.find((item) => item.id === action.id);

      if (subItem.quantity > 1) {
        subItem.quantity--;
        return {
          ...state,
          total: state.total - action.itemTotal,
        };
      } else {
        return state;
      }
    case actionTypes.REMOVE_FROM_CART:
      const newCart = action.cart.filter((item) => item.id !== action.id);

      return {
        ...state,
        items: newCart,
        total: state.total - action.itemTotal,
      };
    case actionTypes.EMPTY_CART:
      return {
        items: [],
        total: 0,
      };

    default:
      return state;
  }
};
export default CartReducer;
