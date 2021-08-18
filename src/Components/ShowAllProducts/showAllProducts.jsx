import React from 'react'
import Rating from './Components/Rating/rating';


const ShowAllProducts = ({ products }) => {
    return ( 
        <>
        {
            products.map((product) => {
              return (
                <div>
                <section className="colored-section" key={product.id}>  
                  <h1>Details of A Product</h1>
                  <p>Name: {product.name}</p>
                  <p>Price: {product.price}</p>
                  <p>Description: {product.description}</p>
                  <p>Category: {product.category}</p>
                  <p>Price: {product.price}</p>
                  <p>Average Rating: {product.reviews}</p>
                </section>
                <Rating 
                rating={product.rating} 
                numReviews={product.numReviews}>
                </Rating>
                </div>
              )
            })
        }
        </>
    );
}
 
export default ShowAllProducts;