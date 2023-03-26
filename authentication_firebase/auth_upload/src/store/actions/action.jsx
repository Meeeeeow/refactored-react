import * as ACTION_TYPES from './action_type';

export const create_user = (user) =>{
    return {
        type: ACTION_TYPES.CREATE_NEW_USER,
        payload: user
    }
}
