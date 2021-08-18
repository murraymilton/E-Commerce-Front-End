import React from 'react'
import { Redirect } from 'react-router-dom';
import Rating from '../Rating/Rating';


const ShowAllProducts = ({ products, productsInCart }) => { // reviews.. from App.js
  if (products === undefined)
  {
    return <Redirect to="/dashboard" />;
  }
  return (  
    <>
      {        
        products.map((item) => {
          if (item.productId === 1) // Shirt ...
          {
            return (
              <>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p>{item.price}</p>
                <Rating 
                  rating={item.rating} 
                  numReviews={item.numReviews} >
                </Rating>
              </>
            );
          }
        })
      }
    </>
  );
}
 
export default ShowAllProducts;