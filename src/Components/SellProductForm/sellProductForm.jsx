import axios from 'axios';
import './sellProductForm.css'
import React, {useState} from 'react';

const sellProductForm = (props) => {
    let id;
    let getAllProducts = props.getAllProducts;
    let userCategoryId = props.userCategoryId;
    if(props.currentUser !== undefined) {id = props.currentUser.user.id;
}
const sellerInput = {
    CategoryId: "",
    Description:"",
    Name:"",
    Price: 0,
    UserId: id
}
const[userEntry, setUserEntry] = useState(userInput)
const[nameEntry, setNameEntry] = useState({})
const[descriptionEntry, setDescriptionEntry] = useState({})
const[productPriceEntry, setProductPriceEntry] = useState({})
}

const addProductEntrySubmission = () => {
    userEntry.CategoryId = "";
    let priceProductEntry =
}

const submitProductEntry = async () =>{
    let productEntry

}
return(
    <React
)
