import './CartItem.css'
import {Link} from 'react-router-dom'

const CartItem = ({item, qtyChangeHandler,removeFromCart}) => {
    return (
        <div className='cartItem'>
            <div className='cartItemImg'>
                <img src={item.imageUrl} alt={item.name}/>
            </div>

            <Link to={`/product/${item.product}`} className='cartItemName'>
                <p>{item.name}</p>
            </Link>
            
            <p className='cartItemPrice'>IDR.{item.price}</p>

            <select 
            className='cartItemSelect' 
            value={item.qty} 
            onChange={(e)=> qtyChangeHandler(item.product, e.target.value)}>

                {[...Array(item.countInStock).keys()].map(x => (
                    <option key={x+1} value={x+1}>{x+1}</option>
                ))}

            </select>

            <button 
            className='cartItemDeleteBtn' 
            onClick={()=> removeFromCart(item.product)}>
                <i className='fas fa-trash'></i>
            </button>
        </div>
    )
}

export default CartItem
