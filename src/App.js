import axios from 'axios';
import React, { useState, useEffect } from 'react';
import LoginForm from './Components/LoginForm/loginForm';
import SignUpForm from './Components/SignUpForm/signUpForm';
import Home from './Components/Home/home';
import LandingPage from './Components/LandingPage/landingPage';
import NavigationBar from './Components/NavigationBar/navigationBar';
import jwtDecode from "jwt-decode";
import { BrowserRouter as Router, Redirect, Switch, Route, Link } from "react-router-dom";

function App() {
  const [token, setToken] = useState(); // The token inside of localStorage.

  const setUserToken = (token) => {
    localStorage.setItem("token", token);
    setToken(token);
    window.location = "/";
  };

  const logout = () => {
    localStorage.clear();
    window.location.href = "/Login";
  }

  useEffect(() => {
    const jwtToken = localStorage.getItem("token");
    setToken(jwtToken);
    try {
      const user = jwtDecode(jwtToken);
      setToken(user);
    } catch {
      setToken("...")
    }
  }, []);

  return (
    <>
      <Router>
        <NavigationBar logout={logout} />
        
        {console.log(token)}

        <Switch>
          <Route exact path="/login" render={ (props) => <LoginForm {...props} setToken={setToken} /> } />
          <Route path="/signup" render={ (props) => <SignUpForm  {...props} setToken={setToken} /> } />
          {
            token ? <Route path="/dashboard" component={Home} /> : <></>
          }
        </Switch>
      </Router>
    </>
  );   
}

export default App;


{/* <Route 
                    path='/sellProductForm' 
                    render={props => {
                        if (!user){
                            return <Redirect to="/" />;
                        }
                        else{
                            return <sellProductForm {...props} user={user}/>
                        }
                    }} /> */}