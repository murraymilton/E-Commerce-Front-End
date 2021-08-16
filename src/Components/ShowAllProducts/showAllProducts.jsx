import React from 'react'

const ShowAllProducts = ({ products }) => {
    return ( 
        <>
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
        </>
    );
}
 
export default ShowAllProducts;