import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; //So we can write action creators that return a function instead of an action
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
