import { combineReducers } from "redux";
import { iceReducer } from "./reducers/iceReducer";
import { cakeReducer } from "./reducers/cakeReducer";
import { createStore } from "redux";
const rootReducer = combineReducers({
    cake:cakeReducer,
    ice:iceReducer
})

export const store = createStore(rootReducer);