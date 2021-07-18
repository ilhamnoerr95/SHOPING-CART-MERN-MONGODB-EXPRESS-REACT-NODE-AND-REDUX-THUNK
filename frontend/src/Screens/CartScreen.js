import React from 'react'
import './CartScreen.css'
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux' 
import {Link} from 'react-router-dom';

// Compnent
import CartItem from '../component/CartItem'

// Actions
import {addTocart,removefromCart} from '../redux/actions/cartActions'

const CartScreen= ()=> {
    const dispatch = useDispatch();
    const cart = useSelector(state=> state.cart);
    const {cartItems} = cart;

    const qtyChangeHandler = (id, qty)=>{
        dispatch(addTocart(id,qty))
    }

    const removeHandler = (id) =>{
        dispatch(removefromCart(id));
    }

    const getCartCount = ()=>{
        return cartItems.reduce((qty,item)=> Number(item.qty) + qty, 0)
    }

    const getCartSubtotal = () =>{
        return cartItems.reduce((price,item)=> (item.price * item.qty) + price, 0)
    }

    return (
        <div className='cartScreen'>
            <div className='cartScreenLeft'>
                <h2> Shopping Cart</h2>
                {cartItems.length === 0 ? (
                    <div>
                        Your Cart is Empty <Link to='/'>Go Back</Link>
                    </div>
                ): cartItems.map(item =>(
                    <CartItem 
                    key={item.product}
                    item={item} 
                    qtyChangeHandler={qtyChangeHandler}
                    removeFromCart={removeHandler}/>
                ))}
            </div>
            <div className='cartScreenRight'>
                <div className='cartScreenInfo'>
                    <p>Subtotal ({getCartCount()}) items</p>
                    <p>IDR.{getCartSubtotal().toFixed(2)}</p>
                </div>
                <div>
                    <button>
                        proceed To Checkout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CartScreen;
