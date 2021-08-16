import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ShowAllProducts from '../ShowAllProducts/showAllProducts';

const Home = () => {
    const [products, setProducts] = useState([]);
  
    useEffect (
        () => {
        axios.get('https://localhost:44394/api/product/')
        .then(res => setProducts(res.data))
        }, [])    

    return (  
        // <Navbar />
        // <Categories />
        <ShowAllProducts products={products} />
    );
}
 
export default Home;