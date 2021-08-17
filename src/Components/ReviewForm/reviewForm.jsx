import React, { useState, useEffect } from 'react';
import {Redirect} from 'react-router-dom';
import { Rating } from '@material-ui/lab';
import jwtDecode from 'jwt-decode'
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap/Button';
import useForm from '../useForm/useForm';
import axios from 'axios';

export default function Reviews(props){
    const [rating, setRating] = useState(null);
    const {values, handleChange, handleSubmit} = useForm(userReview);
    const [reviews, setReviews] = useState(null);
    const [seller, setSeller] = useState(false);

    useEffect(() =>{
        getAllProductReviews();
    },
    []);
}