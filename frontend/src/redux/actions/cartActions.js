import * as actionTypes from '../constants/cartConstant';
import axios from 'axios'

// getState 

export const addTocart = (id,qty)=> async (dispatch, getState) =>{
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
        type:actionTypes.ADD_TO_CART,
        payload: {
            product: data._id,
            name: data.name,
            imageUrl: data.imageUrl,
            price: data.price,
            countInStock: data.countInStock,
            qty
        }
    })
    // setItem untuk ngubah, 'cart' nama yg akan disave 
    // getState().cart, cart diambil dari rootreducer yg ada di store
    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
}  

export const removefromCart = (id)=> (dispatch, getState)=>{
    dispatch({
        type: actionTypes.REMOVE_TO_CART,
        payload: id
    })

    localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
}