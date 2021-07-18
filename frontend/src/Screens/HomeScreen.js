import React from 'react'
import './HomeScreen.css'
import {useSelector, useDispatch} from 'react-redux'; 
import {useEffect} from 'react';

// COMPONENT
import Product from './Product'

// ACTION 
import {getProducts as listProducts} from '../redux/actions/productActions'


const HomeScreen= ()=> {

    const dispacth = useDispatch();

    const getProducts = useSelector(state=> state.getProducts)

    const {products, loading, error} = getProducts;

    useEffect(()=>{
        dispacth(listProducts())
    }, [dispacth]);

    return (
        <div className='homeScreen'>
            <h2 className='homeScreenTittle'>Latest Products</h2>

            <div className='homeScreenProduct'>
                {loading ? (<h2>Loading...</h2>
                ) : error ? (
                <h2>{error}</h2>
                ) : (products.map((product) => <Product 
                key={product._id} 
                productId={product._id} 
                name={product.name}
                imageUrl={product.imageUrl}
                description={product.description}
                price={product.price}
                />)
                )}
            </div>
        </div>
    )
}

export default HomeScreen
