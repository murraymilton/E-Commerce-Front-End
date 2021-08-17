import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Sell
import ShowAllProducts from '../ShowAllProducts/showAllProducts';
import ViewProducts from '../ViewProducts/viewProducts';

const Home = () => {
    const token = "valid";
    const [products, setProducts] = useState([]);
  
    useEffect (
        () => {
        axios.get('https://localhost:44394/api/product/')
        .then(res => setProducts(res.data))
        }, [])    

    if (token !== null)
    {
        return (  
            <>
                {/* <ShowAllProducts products={products} /> */}
                <ViewProducts products={products} />
            </>
        );
    }
    else
    {
        return (
            <>
                <h1>Hey yo!</h1>
            </>
        );
    }
}
 
export default Home;