import * as ACTION_TYPES from '../actions/action_types';

const initialState = {
    numCakes : 10,
    qty:0
}

export const cakeReducer = (state=initialState,action) =>{
    switch(action.type)
    {
        case ACTION_TYPES.BUY_CAKE:
            return{
                ...state,
                numCakes : state.numCakes - 1,
                qty: state.qty + 1
            }

        case ACTION_TYPES.ADD_CAKE:
            return{
                ...state,
                numCakes : state.numCakes + 1
                
            }
        default:
            return state;
    }
}