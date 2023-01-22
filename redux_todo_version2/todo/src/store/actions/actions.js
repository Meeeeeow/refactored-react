import * as ACTION_TYPES from './action_types';

export const add_task = (task) =>{
    return {
        type: ACTION_TYPES.ADD_TASK,
        payload: task
    }
}

export const order_same_col = (column) =>{
    return{
        type: ACTION_TYPES.ORDER_SAME_COL,
        payload: column
    }
}

export const order_another_col = (colsChanged) =>{
    return{
        type:ACTION_TYPES.ORDER_ANOTHER_COL,
        payload: colsChanged
    }
}