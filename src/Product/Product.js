import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css'

const Product = ({handleCart,product}) => {
//     const{handleCart}=props
   const{img,price,name,seller,ratings}=product

//   console.log(props)
  
   
    return (
        <div className='product-container'>
            <img className='image' src={img} alt="" />

           <div className='product-info'>
           <p className='p-text'>{name}</p>
            <p>Price: ${price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Ratings: {ratings}</small></p>
           </div>

           <div>
               <button onClick={()=>handleCart(product)} className='btn-cart'>
                   <p className='btn-text'>Add To Cart</p>
                   <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
               </button>
           </div>

        </div>
    );
};

export default Product;