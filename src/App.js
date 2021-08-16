<<<<<<< HEAD
import React, { useState, useEffect } from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Redirect,
// } from "react-router-dom";
import LoginForm from "./Components/LoginForm/LoginForm";
// import axios from "axios";

function App() {
  const [currentUser, setCurrentUser] = useState();
  const [token, setToken] = useState();
  const [loading, setLoading] = useState(true)
  

  useEffect(() => {
    // const currentProduct = window.localStorage.getItem('saved-currentProduct')
    // const savedData = JSON.parse(currentProduct)
    // if (savedData !== null) {
    //   setCurrentProduct(savedData.savedProduct)
    //   setProductReviews(savedData.savedReviews)
    // }
    // const jwtToken = localStorage.getItem("token");
    // setToken(jwtToken);
    // getAllProducts();
    // getCategories();
    
    
      const setUserToken = (token) => {
        localStorage.setItem("token", token);
        setToken(token);
        window.location = "/";
      };
      
      const logout = () => {
        localStorage.clear();
        window.location.href = "/login";
      }

    try {
      const user = jwtDecode(jwtToken);
      const expirationTime = (user.exp * 1000) - 60000
      if (Date.now() >= expirationTime) {
        console.log('here')
        logout();
      }
      setCurrentUser({ user });
      setLoading(false)
    } catch {
      setLoading(false)
    }
  }, []);



  return (
    
    <Router>
      {!loading &&
      <div>
        <NavigationBar currentUser={currentUser} logout={logout}/>
        <Switch>
          <Route
            path="/Login"
            render={(props) => (
              <LoginForm {...props} setUserToken={setUserToken} />
            )}
          />
          </Switch>
      </div>
          }
    </Router>
  );   
=======
import React from 'react';
import Home from './Components/Home/home.jsx';

function App() {
  
  return (
    <>
      {/* Leads to Login Page */}
      {/* <Login /> */}
      <Home /> 
    </>
  );
>>>>>>> 376051342d17e5ef070c0e54efdb8cce2e587d38
}


export default App;