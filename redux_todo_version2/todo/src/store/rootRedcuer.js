import { taskReducer } from "./reducer/addTaskReducer";
import { combineReducers } from 'redux';


export const rootReducer = combineReducers({
    tasks: taskReducer
})