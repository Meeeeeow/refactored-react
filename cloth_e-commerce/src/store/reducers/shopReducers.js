import SHOP_DATA from "../../data/shop_data";

const initialState = {
    collections : SHOP_DATA
}

export const shopReducer = (state= initialState, action) =>{
    switch(action.type){
        default:
            return state;
    }
}