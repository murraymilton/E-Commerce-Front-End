import React, { useState, useEffect } from 'react';
import useForm from '../useForm/useForm';
import axios from 'axios';



export default function SellerNewProduct(props){

    const[token, setToken] = useState(null);
    const[redirect, setRedirect] = useState(false);
    const {values, handleChange, handleSubmit, setValues} = useForm(submitForm);
    const[newProductId, setNewProductId] = useState(null);
    const[products, setProducts] = useState(null);
  
    useEffect(() => {
        const jwt = localStorage.getItem('token')
        try{
            setToken(jwt);
        }
        catch{};
        getAllProducts();
    }, []);

    async function getAllProducts(){
        try{
            let res = await axios.get('https//localhost:44394/api/products');
            let allProducts = res.data;
            setValues({Name: "", Description:"", ProductName: allProducts[0].Name, Price:0})
            setNewProductId(allProducts)
        }
        catch(error){
            alert(error);
        }
    }

    function ProductEntryOptions(){
        let productNameEntry= products.map(entry => {return <option key={entry.name}>{entry.name}</option>});
        return productNameEntry;
     
    async function submitForm(){
        let productformEntry = products.filter(entry => entry.name === values.productformEntry);
        let ProductAdd;
        try{
            ProductAdd = {Name: values.Name, Description: values.Description, ProductId: productformEntry[0].productId, Price:decimal(values.Price)};
        }
        catch(err){
            alert("Your product could not be added \n" + error)
        }
        try{
            let response = await axios.post('https://localhost:44394/api/products', newProductId, { headers: {Authorization: 'Bearer ' + token}});
            setProducts(response.data.productId);
            setRedirect(true);
        }
        catch(err){
            alert(err);
        }
    }

    return(
        
    )
    }
    export default SellerNewProduct

    

    