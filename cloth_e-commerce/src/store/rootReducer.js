import { combineReducers} from "redux";
import { userReducer } from "./reducers/userReducer";
import { cartReducer } from "./reducers/cartReducer";

import { persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { shopReducer } from "./reducers/shopReducers";
const persistConfig ={
    key: 'root',
    storage,
    whitelist: ['cart']
}
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer);//modified version of  root reducer with persistConfig