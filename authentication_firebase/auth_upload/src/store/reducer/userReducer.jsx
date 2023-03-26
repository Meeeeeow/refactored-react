import * as ACTION_TYPES from '../actions/action_type';

const initialState ={
    currentUser: null
}

export const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case ACTION_TYPES.CREATE_NEW_USER:
            return{
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}
