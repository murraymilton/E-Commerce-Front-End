import React from 'react';
import { Redirect } from 'react-router-dom';
import ShowAllProducts from '../ShowAllProducts/showAllProducts';

const ShoppingCart = ({ currentUser, productsInCart, products }) => {
    if (currentUser === null)
    {
        return <Redirect to="/login" />
    }
    else if (productsInCart.userId !== null)
    {
        return (
            <section className="white-section">
                <h1>Here's Your Cart, {currentUser.firstName}:</h1>
                <ShowAllProducts products={productsInCart} products={products} />
            </section>
        );
    }
    else {
        return (  
            <section className="white-section">
                <h1>Your Cart is Empty, {currentUser.firstName}:</h1>
                <button>View All Products</button>
            </section>
        );
    }
}
 
export default ShoppingCart;