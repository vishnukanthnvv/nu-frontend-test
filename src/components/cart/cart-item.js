import React from 'react';
import './cart-item.scss';

const CartItem = ({ itemData: { currency, id, imageURL, name, price, quantity }, remove }) => (
        <div className="cart-item">
            <div className="image">
                <img src={imageURL} alt="icon"></img>
            </div>
            <div className="cart-item-body">
                <div><h6>{name}</h6></div>
                <div>{currency}{price}</div>
                <div>Qty: {quantity}</div>
                <div>
                    <button className="btn btn-danger"onClick={() => { 
                        remove(id);
                    }}>Remove</button>
                </div>
            </div>
        </div>
        );

export default CartItem;
