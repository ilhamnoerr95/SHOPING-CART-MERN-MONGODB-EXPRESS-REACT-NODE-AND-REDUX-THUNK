import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';


//reducer: 
import {cartReducer} from './reducer/cartReducers' 
import {
    getProductsReducer, 
    getProductsDetailReducer} from './reducer/productReducers'


const reducer= combineReducers({
    cart: cartReducer,
    getProducts: getProductsReducer,
    getProductDetails: getProductsDetailReducer
})

const middleWare = [thunk];

// LOCAL STORAGE
const cartFromLocalStorage = localStorage.getItem('cart') ?JSON.parse(localStorage.getItem('cart')) : []

const INITIAL_STATE = {
    cart:{
        cartItems: cartFromLocalStorage
    }
}

const store = createStore(
    reducer, 
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;