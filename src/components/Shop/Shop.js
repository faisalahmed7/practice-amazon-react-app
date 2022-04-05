import React, { useEffect, useState } from 'react';
import Product from '../../Product/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])



    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, [])


    useEffect(() => {
        const storedCart = getStoredCart()
        const savedCart = []
        for (const id in storedCart) {
            const addedProducts = products.find(product => product.id === id)
            if (addedProducts) {
                const quantity = storedCart[id]
                addedProducts.quantity = quantity;
                savedCart.push(addedProducts)

            }
        }
        setCart(savedCart)
    }, [products])

    const handleCart = (product) => {

        let newCart = []
        const exist = cart.find(pd => pd.id === product.id)
        if (!exist) {
            product.quantity = 1;
            newCart = [...cart, product]
        }
        else{
            const rest=cart.filter(pd=> pd.id!== product.id)
            exist.quantity=exist.quantity+1;
            newCart=[...rest, exist]
        }


        setCart(newCart)
        addToDb(product.id)

    }
    return (
        <div className='container'>
            <div className="products-container">

                {
                    products.map(product => <Product key={product.id} product={product} handleCart={handleCart}></Product>)
                }

            </div>

            <div className="cart-container">
                <Cart cart={cart}></Cart>

            </div>
        </div>
    );
};

export default Shop;