import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";
import productsReducer from './reducers/products-reducer';
import cartReducer from './reducers/cart-reducer';
import App from './components/app/app';

const rootReducer = combineReducers({
  productsReducer,
  cartReducer
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(<Provider store={store}><App /></ Provider>, document.getElementById('root'));
