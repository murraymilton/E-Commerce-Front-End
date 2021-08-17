import axios from 'axios';
import React, { useState, useEffect } from 'react';
import LoginForm from './Components/LoginForm/loginForm';
import SignUpForm from './Components/SignUpForm/signUpForm';
import Home from './Components/Home/home';
import NavigationBar from './Components/NavigationBar/navigationBar';
import jwt_decode from "jwt-decode";
import { BrowserRouter as Router, Redirect, Switch, Route, Link } from "react-router-dom";
import './App.css';

function App() {
  const [token, setToken] = useState({}); // The token inside of localStorage.
  const [currentUser, setCurrentUser] = useState({}); // Current IdentityUser in localStorage.

  useEffect(() => {
    const jwtToken = localStorage.getItem("token");
    // const expirationTime = (jwtToken.exp * 1000) - 60000
    // if (Date.now() >= expirationTime) {
    //   console.log('Hello');
    // }
    
    try {
      const decodedToken = jwt_decode(jwtToken);
      setToken(decodedToken);
    } catch (decodedToken) {
      setToken(decodedToken);
    }
  }, []);
  
  const logout = () => {
    localStorage.clear();
    window.location.href = "/Login";
  }

  const getUser = async (decodedToken) => {
    await axios.get("https://localhost:44394/api/users/user", { headers: { Authorization: 'Bearer ' + decodedToken.token } })
    .then(response => setCurrentUser(response.data))
    .catch(response => setCurrentUser(response.data));
  }

  return (
    <>
    { console.log(currentUser) }
      <Router>
        <NavigationBar logout={logout} token={token} currentUser={currentUser} getUser={getUser} />
        

        <Switch>
          <Route exact path="/login" render={ (props) => <LoginForm {...props} getUser={getUser} /> } />
          <Route path="/signup" render={ (props) => <SignUpForm  {...props} getUser={getUser} /> } />
          {
            token ? 
            <Route exact path="/dashboard" render={ (props) => <Home {...props} token={token} currentUser={currentUser} /> } />
            : // Or print out that the user needs to login.
            <h1>Please log in to view your dashboard.</h1>
          }
        </Switch>
      </Router>
      <section className="colored-section">
        <div>Jordan</div>
      </section>
      <section className="white-section">
        <div>Brandon</div>
      </section>
      <section className="colored-section">
        <div>Murray</div>
      </section>
      <section className="white-section">
        <div>Sterling</div>
      </section>
    </>
  );   
}

export default App;
