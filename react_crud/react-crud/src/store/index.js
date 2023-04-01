import { postsReducer } from "./reducers/userReducer";
import logger from "redux-logger";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
const  middlewares = [logger, thunk];

export const store = createStore(postsReducer, applyMiddleware(...middlewares));