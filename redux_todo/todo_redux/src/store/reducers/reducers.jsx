import * as ACTION_TYPES from '../actions/action_types';

const initialState = {
    tasks: {}
}

export const rootRedcuer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.ADD_TASK:
            return{
                ...state,
                tasks:{
                    ...state.tasks,
                    [action.payload.id.toString()]: action.payload
                }
            }
        default:
            return state;
    }
}
