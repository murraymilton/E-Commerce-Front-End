import React, { useState, useEffect } from 'react';
// import axios from 'axios';



export default function SearchResults(props){

    const [results, setResults] = useState(null);
    

    useEffect(() => {
        if(typeof props.location.state !== 'undefined'){
            allSearch()
        }
    }, [props]);

    // async function allSearch(){
    //     if (!props.location.state.showAll){
    //         try {
    //             let response = await axios.get(`https://localhost:44394/api/product/`);
    //             setResults(response.data);
    //         }
    //         catch(err){
    //             alert(err);
    //         }
    //     }