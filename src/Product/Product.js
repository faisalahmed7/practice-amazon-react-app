import React from 'react';
import './Product.css'

const Product = (props) => {
   const{img,price,name,seller,ratings}=props.product
    return (
        <div className='product-container'>
            <img className='image' src={img} alt="" />

           <div>
           <p className='p-text'>{name}</p>
            <p>Price: ${price}</p>
            <p><small>Seller: {seller}</small></p>
            <p><small>Ratings: {ratings}</small></p>
           </div>

        </div>
    );
};

export default Product;