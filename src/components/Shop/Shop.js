import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import './Shop.css'

const Shop = () => {
    const[products,setProducts]=useState([])


//     const handledCart=(id)=>{
// console.log('Chudi',id)
// }
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])
    return (
        <div className='container'>
            <div className="products-container">

                {
                    products.map(product=><Product key={product.id} product={product}></Product>)
                }




        </div>

            <div className="cart-container">
                <h2>Order Summary</h2>
                <p>Total Orders: </p>
            </div>
        </div>
    );
};

export default Shop;