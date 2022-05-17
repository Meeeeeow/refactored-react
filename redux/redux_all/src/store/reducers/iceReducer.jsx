import * as ACTION_TYPES from '../actions/action_types';

const initialState = {
    numIces : 15,
    qty:0
}

export const iceReducer = (state=initialState,action) =>{
    switch(action.type)
    {
        case ACTION_TYPES.BUY_ICECREAM:
            return{
                ...state,
                numIces : state.numIces - 1,
                qty:state.qty + 1
            }

        case ACTION_TYPES.ADD_ICECREAM:
            return{
                ...state,
                numIces : state.numIces + 1
            }
        default:
            return state;
    }
}