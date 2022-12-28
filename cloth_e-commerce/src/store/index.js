import { applyMiddleware, combineReducers, createStore } from "redux";
import { userReducer } from "./reducers/userReducer";
import logger from "redux-logger";

const  middlewares = [logger];
const rootReducer = combineReducers({
    user: userReducer
})

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
