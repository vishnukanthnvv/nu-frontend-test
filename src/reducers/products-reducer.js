import { GET_PRODUCTS } from '../actions/product-actions';

const initialState = {
    products: []
};


const productsReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_PRODUCTS:
            return {
                products: action.products,
            };
        default: return state;
    }
};

export default productsReducer;