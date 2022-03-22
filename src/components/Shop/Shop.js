import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import './Shop.css'

const Shop = () => {
    const[products,setProducts]=useState([])
    const[cart,setCart]=useState([])
    const[price,setPrice]=useState(0)

    
    useEffect(()=>{
        fetch('products.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])

    const handleCart=(product)=>{
       const  newCart=[...cart, product]
       const newSum= price+product.price;
       setCart(newCart)
       setPrice(newSum)
    }
    return (
        <div className='container'>
            <div className="products-container">

                {
                    products.map(product=><Product key={product.id} product={product} handleCart={handleCart}></Product>)
                }




        </div>

            <div className="cart-container">
                <h2>Order Summary</h2>
                <p>Total Orders:{cart.length} </p>
                <p>Total Sum:{price} </p>
            </div>
        </div>
    );
};

export default Shop;