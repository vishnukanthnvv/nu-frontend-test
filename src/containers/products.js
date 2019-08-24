import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Products from '../components/products/products';
import { getProducts } from '../actions/product-actions';
import { addItemToCart } from '../actions/cart-actions';

const mapStateToProps = state => ({
    products: state.productsReducer.products
});

const mapDispatchToProps = dispatch => bindActionCreators({
        getProducts,
        addItemToCart
    },  
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Products);
