export const ADD_ITEM_TO_CART = 'ADD_ITEM_TO_CART';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';

export const addItemToCart = item => dispatch => 
    dispatch({
        type: ADD_ITEM_TO_CART,
        item
    });

export const removeCartItem = itemId => dispatch => 
    dispatch({
        type: REMOVE_CART_ITEM,
        itemId
    });

