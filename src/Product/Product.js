import React from 'react';
import './Product.css'

const Product = (props) => {
   const{img,id,name,seller,ratings}=props.product
    return (
        <div>
            <img className='image' src={img} alt="" />
        </div>
    );
};

export default Product;