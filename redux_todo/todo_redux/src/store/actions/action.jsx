import * as ACTION_TYPES from './action_types';

export const ADD_TODO = (task) => {
    return {
        type: ACTION_TYPES.ADD_TASK,
        payload: task
    }
}