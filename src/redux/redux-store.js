import {applyMiddleware, combineReducers, createStore} from "redux";
import productReducer from "./productReducer";
import thunkMiddleware from 'redux-thunk';
import infoProductReducer from "./infoProductReducer";
import cartReducer from "./cartReducer";


let reducers = combineReducers({
    products: productReducer,
    infoProduct: infoProductReducer,
    cart: cartReducer
});


let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;


export default store;