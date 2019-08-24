export const GET_PRODUCTS = 'GET_PRODUCTS';

export const getProducts = () => dispatch => 
    fetch('/items', {method: 'get'})
    .then(res => res.json())
    .then(({ catalog }) => dispatch({
        type: GET_PRODUCTS,
        products: catalog
    }));


