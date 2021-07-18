import './Product.css'
import {Link} from 'react-router-dom'

const Product = ({imageUrl,name, price, description, productId}) => {
    return (
        <div className='product'>
            <img src={imageUrl} alt={name}/>

            <div className='productInfo'>
                <p className='infoName'>{name}</p>
                <p className='infoDesc'>
                    {description.substring(0,100)}...
                </p>
                <p className='infoPrice'>IDR.{price}</p>
                
                <Link to={`/product/${productId}`} className='infoButton'>View</Link>
            </div>
        </div>
    )
}

export default Product
