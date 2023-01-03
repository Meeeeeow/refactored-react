import { applyMiddleware, combineReducers, createStore } from "redux";
import { userReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";
import logger from "redux-logger";

const  middlewares = [logger];
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
