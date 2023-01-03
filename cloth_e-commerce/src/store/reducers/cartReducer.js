import * as ACTION_TYPES from '../actions/action_types';
import { addItemsToCart, removeItemsfromCart } from '../cartUtils';

const initialState = {
    cartItems: [],
    hidden: false,
}

export const cartReducer = (state = initialState, action) =>{
    console.log(action.payload);
    switch(action.type){
        case ACTION_TYPES.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
        case ACTION_TYPES.ADD_ITEM:
            return{
                ...state,
                cartItems:addItemsToCart(state.cartItems, action.payload)
            }
        case ACTION_TYPES.REMOVE_ITEM:
            return{
                ...state,
                cartItems: state.cartItems.filter((cartItem)=> cartItem.id !== action.payload.id)
            }
        case ACTION_TYPES.REMOVE_ITEM_ARROWS:
            return {
                ...state,
                cartItems: removeItemsfromCart(state.cartItems, action.payload)
            }
        default:
            return state;
    }
}