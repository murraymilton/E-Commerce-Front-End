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
            <section className="white-section">
            {
                console.log(currentUser)
            }
            <div className="lead">Welcome, {currentUser.firstName}</div>
            </section>
        </> 
    );
}
 
export default ViewProducts;