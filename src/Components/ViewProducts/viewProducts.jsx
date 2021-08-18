import axios from 'axios'
import React from 'react'
import { Redirect } from 'react-router-dom';


const ViewProducts = ({ currentUser }) => {
    if (currentUser === null)
    {
        return <Redirect to="/login" />;
    }
    return (
        <>
            {
                console.log(currentUser)
            }
            <h1>Hi {currentUser.firstName}!</h1>
        </> 
    );
}
 
export default ViewProducts;