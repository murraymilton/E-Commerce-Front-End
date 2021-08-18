import React from 'react'
import { Redirect } from 'react-router-dom';

const ShowAllProducts = ({ products, productsInCart }) => {
  if (products === undefined)
  {
    return <Redirect to="/dashboard" />;
  }
  return (  
    <>
      {        
        products.map((item) => {
          if (item.productId === 1)
          {
            return (
              <>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p>{item.price}</p>
              </>
            );
          }
        })
      }
    </>
  );
}
 
export default ShowAllProducts;