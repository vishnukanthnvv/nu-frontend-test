import React, { Component } from 'react';
import Item from './item';
import './products.scss';

export default class Products extends Component {
    componentDidMount () {
        this.props.getProducts();
    }

    render () {
        return (
            <div className="products">
                <h3>Products</h3>
                <div className="product-list">
                    {
                        this.props.products.map(item => <Item key={item.id} item={item} add={this.props.addItemToCart} />)
                    }
                </div>
            </div>
        );
    }
}
