import { createStore, applyMiddleware } from "redux";
import CartReducer from "./features/cart/CartSlice";
import { combineReducers } from "redux";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
    cart: CartReducer
})
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store