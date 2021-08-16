import axios from 'axios';
import React, { useState, useEffect } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  
  useEffect (
    () => {
      axios.get('https://localhost:44394/api/product/')
      .then(res => setProducts(res.data))
    }, [])
  
  return (
    <>
      <section className="colored-section">
        {
          products.map((product) => {
            return (
              <React.Fragment key={product.id}>
                <h1>Details of A Product</h1>
        
                <p>Name: {product.name}</p>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
                <p>Category: {product.category}</p>
                <p>Price: {product.price}</p>
                <p>Average Rating: {product.reviews}</p>
              </React.Fragment>
            )
          })
        }
      </section>
    </>
  );
}

export default App;
