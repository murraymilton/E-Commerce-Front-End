import axios from 'axios'
import React, { useState, useEffect } from 'react'


const ViewProducts = ({ products }) => {
    const token = null; // Invalid until userId is passed in as props
    const userId = "bf53369e-a68a-4ac5-892d-d83ed892d7f4"
    const username = "Current User"
    const [shoppingCart, setShoppingCart] = useState([]);

    useEffect(() => {
        axios.get(`https://localhost:44394/api/shoppingcart/`)
        .then(res => setShoppingCart(res.data))
    }, [])

    if (token != null)
    {
        return (
            <>
            {
                console.log(shoppingCart)
            }
            {
                console.log(products)
            }
            <h1>Hi {username}! Here are the items in your cart: </h1>
                {
                    
                }
            </> 
        );
    }
    else{
        return (
            <>
                <button type="button" className="btn btn-dark" onClick="" >Home</button>
            </>
        );
    }
}
 
export default ViewProducts;