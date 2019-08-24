import React from 'react';
import './app.scss';
import Products from '../../containers/products';
import Cart from '../../containers/cart';

const App = () => (
    <div className="app container-fluid">
        <Products />
        <Cart />
    </div>
);

export default App;