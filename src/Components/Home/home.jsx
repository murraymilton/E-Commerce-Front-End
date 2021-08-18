import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ShowAllProducts from '../ShowAllProducts/showAllProducts';
import ViewProducts from '../ViewProducts/viewProducts';


const Home = (props) => {
    const [products, setProducts] = useState([]);

    useEffect (() => {
        axios.get('https://localhost:44394/api/product/')
        .then(res => setProducts(res.data))
        .catch(error => console.log(error))
    }, [])    

    return (  
        <>
            <section className="colored-section">
                <h1>User Home</h1>
                <ViewProducts products={products} token={props.token} currentUser={props.currentUser} />
            </section>
        </>
    );
}
 
export default Home;