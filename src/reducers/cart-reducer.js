import { ADD_ITEM_TO_CART, REMOVE_CART_ITEM } from '../actions/cart-actions';

const initialState = {
    items: []
};

const cartReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ITEM_TO_CART:
            const items = [...state.items];
            const existingItem = items.find(item => item.id === action.item.id);
            if(existingItem) {
                items.forEach(item => {
                    if(item.id === action.item.id) {
                        item.quantity += 1;
                    }
                });
                return {items};
            }
            return { items: [    
                ...state.items,
                {...action.item, quantity: 1}
            ]};
        case REMOVE_CART_ITEM:
            return {
                items: state.items.filter(item => item.id !== action.itemId)
            };
        default: return state;
    }
};

export default cartReducer;