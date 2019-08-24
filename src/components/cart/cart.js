import React from 'react';
import './cart.scss';
import CartItem from './cart-item';

const Cart = ({ items, removeCartItem }) => (
    <div className="cart">
        <h4>Shopping Cart</h4>
        <div className="item-list">
            {
                items.length === 0 ?
                    <div className="alert alert-primary">Cart is empty.</div> : 
                    items.map(item => <CartItem key={item.id} itemData={item} remove={removeCartItem} />)
            }
        </div>
        <div className="cart-total">
            Total: ${items.reduce((total, item) => total += (item.quantity * item.price), 0 )}
        </div>
    </div>      
);

export default Cart;