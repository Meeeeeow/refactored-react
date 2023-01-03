import * as ACTION_TYPES from './action_types';

export const create_user = (user) =>{
    return {
        type: ACTION_TYPES.CREATE_NEW_USER,
        payload: user
    }
}

//cart 

export const toggle_hidden = () =>{
    return{
        type: ACTION_TYPES.TOGGLE_CART_HIDDEN
    }
}
export const add_item = (item) =>{
    console.log(item);
    return {
        type:ACTION_TYPES.ADD_ITEM,
        payload: item
    }
}

export const remove_item = (item) =>{
    return {
        type:ACTION_TYPES.REMOVE_ITEM,
        payload:item
    }
}

export const remove_item_arrows = (item) =>{
    return {
        type: ACTION_TYPES.REMOVE_ITEM_ARROWS,
        payload: item
    }
}