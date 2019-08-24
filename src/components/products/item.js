import React from 'react';
import './item.scss';

const Item = ({ item, add }) => (
    <div className="item">
        <img src={item.imageURL} alt="Product img"></img>
        <span><h6>{item.name}</h6></span>
        <span>{item.currency}{item.price}</span>
        <button className="btn btn-primary" onClick={() => {
            add(item);
        }}>Add to Cart</button>
    </div>
);

export default Item;
