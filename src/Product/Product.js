import React from 'react';
import './Product.css'

const Product = (props) => {
   const{img,price,name,seller,ratings,}=props.product
   
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
               <button className='btn-cart'>
                   <p>Add To Cart</p>
               </button>
           </div>

        </div>
    );
};

export default Product;