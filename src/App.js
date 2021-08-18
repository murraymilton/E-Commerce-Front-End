import './App.css';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import Home from './Components/Home/home';
import React, { useState, useEffect } from 'react';
import LoginForm from './Components/LoginForm/loginForm';
import SignUpForm from './Components/SignUpForm/signUpForm';
import ShoppingCart from './Components/ShoppingCart/shoppingCart';
import NavigationBar from './Components/NavigationBar/navigationBar';
import ShowAllProducts from './Components/ShowAllProducts/showAllProducts';
import { BrowserRouter as Router, Redirect, Switch, Route, Link } from "react-router-dom";

function App() {
  const [token, setToken] = useState(); // The token inside of localStorage.
  const [currentUser, setCurrentUser] = useState({}); // Current IdentityUser in localStorage.

  useEffect(() => {
    const jwtToken = localStorage.getItem("token");
    try {
      const decodedToken = jwt_decode(jwtToken);
      setToken(decodedToken);
    } catch (error) {
      console.log(error + " There was no token or user loaded, so we're loading null ones.")
      const notLoaded = null;
      setToken(notLoaded);
      setCurrentUser(notLoaded);
    }
  }, []);
  
  const logout = () => {
    localStorage.clear();
    window.location.href = "/Login";
  }

  const getUser = async (decodedToken) => {
    await axios.get("https://localhost:44394/api/users/user", { headers: { Authorization: 'Bearer ' + decodedToken.token } })
    .then(response => setCurrentUser(response.data))
    .catch(error => console.log(error));
  }

  return (
    <>
    { console.log(currentUser) }
      <section className="navigation-section">
        <Router>
          <NavigationBar logout={logout} currentUser={currentUser} />
          <Switch>
            <>
              <Route exact path="/login" render={(props) => <LoginForm {...props} getUser={getUser} /> } />
              <Route exact path="/signup" render={ (props) => <SignUpForm {...props} getUser={getUser} /> } />
              <Route exact path="/dashboard" render={ (props) => <Home {...props} currentUser={currentUser} getUser={getUser} /> }  />
              <Route exact path="/products" render={ (props) => <ShowAllProducts {...props} currentUser={currentUser} getUser={getUser} /> } />
              {/* <Route exact path="/shoppingcart" render={ (props) => <ShoppingCart {...props} currentUser={currentUser} getUser={getUser} /> } /> */}
            </>
          </Switch>
        </Router>
      </section>
      <section className="white-section">
        <div>Sterling</div>
      </section>
    </>
  );   
}

export default App;
