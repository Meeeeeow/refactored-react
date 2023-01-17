import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./rootRedcuer";
import logger from "redux-logger";

const middlewares = [logger];
export const store = createStore(rootReducer,applyMiddleware(...middlewares));