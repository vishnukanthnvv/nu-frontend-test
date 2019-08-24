import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Cart from '../components/cart/cart';
import { removeCartItem } from '../actions/cart-actions';

const mapStateToProps = state => ({
    items: state.cartReducer.items
});

const mapDispatchToProps = dispatch => bindActionCreators({ 
        removeCartItem
    },  
    dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
