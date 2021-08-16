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