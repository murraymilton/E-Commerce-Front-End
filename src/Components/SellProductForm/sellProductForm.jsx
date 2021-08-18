import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom';
import jwtDecode from 'jwt-decode'
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import useForm from '../UseForm/useForm';
import axios from 'axios';



export default function SellerNewProduct(){

    const[token, setToken] = useState(null);
    const[redirect, setRedirect] = useState(false);
    const{values, handleChange, handleSubmit} = useForm(submitForm);
    const[newProductId, setNewProductId] = useState(null);
  
    useEffect(() => {
        const jwt = localStorage.getItem('token')
        try{
            const user = jwtDecode(jwt);
            this.setState({user})
            setToken(jwt);
        }
        catch{};
    }, []);

    async function submitForm(){
        let newProduct;
        try{
            newProduct = {Name: values.Name, Description: values.Description, Category: values.Category, Price:parseFloat(values.Price)};
        }
        catch(error){
            alert("Your product could not be added " + error)
        }
        try{
            let response = await axios.post('https://localhost:44394/api/products', newProduct, { headers: {Authorization: 'Bearer ' + token}});
            setNewProductId(response.data.productId);
            console.log(response);
            setRedirect(true);
        }
        catch(error){
            alert(error);
        }
    }

    return( <div className='row text-center'>
    {redirect && 
    <Redirect to={{pathname: '/product', state: { productId: newProductId}}} /> }
    <div className='col' />
    <div className='col'>
        <h1>New Listing</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="Name">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control type="text" name="Name" onChange={handleChange} value={values.Name} required={true} />
                </Form.Group>
                <Form.Group controlId="Category">
                    <Form.Label>Category</Form.Label>
                    <Form.Control type="text" name="Category" onChange={handleChange} value={values.Category} required={true} />
                </Form.Group>
                <Form.Group controlId="Price">
                    <Form.Label>Price</Form.Label>
                    <InputGroup>
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control type="number" min={0.01} step={0.01} name="Price" onChange={handleChange} value={values.Price} required={true} />
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="Description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" as="textarea" rows={5} name="Description" onChange={handleChange} value={values.Description} required={true} />
                </Form.Group>
                <Button className='mt-2' type="submit">Submit</Button>
            </Form>
        </div>
        <div className='col' />
</div>

)
};
