import React from 'react'
import './ProductScreen.css'
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

// Actions
import {getProductDetails} from '../redux/actions/productActions'
import {addTocart} from '../redux/actions/cartActions'

const ProductScreen = ({match, history})=> {

    const [qty,setQty] = useState(1);
    const dispatch = useDispatch();

    const productDetails = useSelector(state => state.getProductDetails)
    const {loading,error,product} = productDetails

    useEffect(() => {
        // apabila produk ada
        if(product && match.params.id !== product._id){ 
            dispatch(getProductDetails(match.params.id))
        }
       
    }, [dispatch, product, match])
    
    const addToCartHandler = ()=>{
        dispatch(addTocart(product._id, qty));
        history.push('/cart')
    }

    return (
        <div className='productScreen'>

            {loading? (
            <h2>Loading...</h2>
            ): error? (
            <h2>error</h2>):(
                <>
                    <div className='productScreenLeft'>
                        <div className='leftImg'>
                            <img src={product.imageUrl} alt={product.name}/>
                        </div>

                        <div className='leftInfo'>
                            <p className='leftName'>{product.name}</p>
                            <p>Price: IDR. {product.price}</p>
                            <p>Description: {product.description}</p>
                        </div>
                    </div>

                    <div className='productScreenRight'>
                        <div className='rightInfo'>
                            <p>
                                Price: <span>IDR. {product.price}</span>
                            </p>
                            <p>
                                Status: <span>{product.countInStock > 0 ?'In Stock' : 'out Of Stock'}</span>
                            </p>
                            <p>
                                Qty 
                                <select value={qty} onChange={(e)=> setQty(e.target.value)}>
                                    {[...Array(product.countInStock).keys()].map((x)=> (
                                        <option key={x+1} value={x+1}> {x+1}</option>
                                    ))}
                                </select>
                            </p>
                            <p>
                                <button type="button" onClick={addToCartHandler}>
                                    Add To Cart
                                </button>
                            </p>
                        </div>
                    </div>
                </>

            )}
           
        </div>
    )
}

export default ProductScreen
