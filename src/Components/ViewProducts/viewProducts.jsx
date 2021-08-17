import axios from 'axios'
import React, { useState, useEffect } from 'react'


const ViewProducts = ({ products, token, currentUser}) => {

    if (token !== null)
    {
        return (
            <>
                {
                    console.log(products)
                }
                {
                    console.log(currentUser)
                }
                <h1>Hi {currentUser.id}!</h1>
            </> 
        );
    }
}
 
export default ViewProducts;