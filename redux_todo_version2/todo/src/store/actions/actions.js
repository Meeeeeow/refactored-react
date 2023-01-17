import * as ACTION_TYPES from './action_types';

export const add_task = (task) =>{
    return {
        type: ACTION_TYPES.ADD_TASK,
        payload: task
    }
}