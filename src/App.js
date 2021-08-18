import './App.css';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import Home from './Components/Home/home';
import React, { useState, useEffect } from 'react';
import LoginForm from './Components/LoginForm/loginForm';
import SignUpForm from './Components/SignUpForm/signUpForm';
import ShoppingCart from './Components/ShoppingCart/shoppingCart';
import NavigationBar from './Components/NavigationBar/navigationBar';
import { BrowserRouter as Router, Redirect, Switch, Route, Link } from "react-router-dom";
import ViewProducts from './Components/ViewProducts/viewProducts';

function App() {
  const [token, setToken] = useState(); // The token inside of localStorage.
  const [currentUser, setCurrentUser] = useState({}); // Current IdentityUser in localStorage.
  const [products, setProducts] = useState([{}]); // Products in general (all products inside the database).
  const [productsInCart, setProductsInCart] = useState([{}]); // Products in a user's cart.
  
  const logout = () => {
    localStorage.clear();
    window.location.href = "/Login";
  }
  
  useEffect(() => {
    const jwtToken = localStorage.getItem("token");
    try {
      const decodedToken = jwt_decode(jwtToken);
      setToken(decodedToken);
      localStorage.setItem("token", decodedToken);
    } catch (error) {
      console.log(error + " There was no token or user loaded, so we're loading null ones.")
      const notLoaded = null;
      setToken(notLoaded);
      setCurrentUser(notLoaded);
    }
    getAllProducts();
    getItemsInCart();
  }, []);

  const getUser = async (decodedToken) => {
    await axios.get("https://localhost:44394/api/users/user", { headers: { Authorization: 'Bearer ' + decodedToken.token } })
    .then(response => setCurrentUser(response.data))
    .catch(error => console.log(error));
  }
  
  const getItemsInCart = async (decodedToken) => {
    try {
      await axios.get("https://localhost:44394/api/shoppingcart/", { headers: { Authorization: 'Bearer ' + decodedToken.token } })
        .then(response => setProductsInCart(response.data))
    } catch (error) {
      console.log(error);
    }
  }

  const getAllProducts = async () => {
    await axios.get("https://localhost:44394/api/product/")
      .then(response => setProducts(response.data))
      .catch(error => console.log(error));
  }

  return (
    <>
    { console.log(productsInCart) }
    { console.log(products) } 
      <section className="navigation-section">
        <Router>
          <NavigationBar logout={logout} currentUser={currentUser} />
          <Switch>
            <>
              <Route exact path="/login" render={(props) => <LoginForm {...props} getUser={getUser} getItemsInCart={getItemsInCart} /> } />
              <Route exact path="/signup" render={ (props) => <SignUpForm {...props} getUser={getUser} getItemsInCart={getItemsInCart} /> } />
              <Route exact path="/dashboard" render={ (props) => <Home {...props} currentUser={currentUser} /> }  />
              <Route exact path="/shoppingcart" render={ (props) => <ShoppingCart {...props} products={products} productsInCart={productsInCart} currentUser={currentUser} /> } />
              <Route exact path="/hub" render={ (props) => <ViewProducts {...props} products={products} currentUser={currentUser} /> } />
            </>
          </Switch>
        </Router>
      </section>
      <section className="footer-section">
        <div>footer</div>
      </section>
    </>
  );   
}

export default App;