import { combineReducers } from 'redux';
import dataLayer from './dataLayer';
import cartReducer from './Cart/cart-reducer';

const rootReducer = combineReducers({
  dataLayer,
  cart: cartReducer,
});

export default rootReducer;
