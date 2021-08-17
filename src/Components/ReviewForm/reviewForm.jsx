import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { Button, Alert, Form } from 'react-bootstrap';
import {FaStar } from  'react-icons/fa';
import useForm from '../useForm/useForm';
import jwtDecode from 'jwt-decode';

export default function Reviews(props){

    const stars = Array(5).fill(0);
    const [userRating, setUserRating] = useState(null);
    const [hoverValue, setHoverValue] = useState(null);
    const { values, handleChange, handleSubmit } = useForm(postReview);
    const [reviews, setReviews] = useState(null);
    const [canPost, setCanPost] = useState(false);
    const [avgRating, setAvgRating] = useState(null);
    const [isCreator, setIsCreator] = useState(false);
    const initialReview = {
        description: "",
        category: null,
        productId: null,
    };

    useEffect(() => {
        getAllReviews();
    }, []);

    async function getAllReviews(){
        try{
            let res = await axios.get(`https://localhost:44394/api/reviews`);
            let res = res.data;

        }
    }
    const submitReview = async () => {
        const isValid = reviewFormValidation()
        let review = userEntry;
        review.rating = currentRating;
        review.productId = currentProductId
    }

    function checkCanPost(reviewsArray){
        const jwt = localStorage.getItem('token');
        const user = jwtDecode(jwt);
        let ids = reviewsArray.map(r => r.userId);
        if (!ids.includes(user.id)){
            setCanPost(true);
        }
        if (props.sellerId === user.id){
            setIsCreator(true);
            setCanPost(false);
        }
    }

    function generateReviewsDisplay(){
        let display = reviews.map((review) => {
            return(
                <div key={review.userName} className='mt-1 mb-1'>
                    <Alert variant='dark'>
                        <h3 className='text-left'>{review.userName} ({review.rating} <FaStar className="star align-top"  size={30} color={"#ffc107"}/>)</h3>
                        <Alert variant='light'>{review.comment}</Alert>
                    </Alert>
                </div>
            )
        })
        return display;
    }

    async function postReview(){
        try{
            const jwt = localStorage.getItem('token');
            let newReview = {ProductId: props.productId, Comment: values.comment, Rating: rating};
            let res = await axios.post(`https://localhost:44394/api/reviews`, newReview, { headers: {Authorization: 'Bearer ' + jwt}});
            setCanPost(false);
            getReviews();
        }   
        catch(err){
            alert(err);
        }
    }