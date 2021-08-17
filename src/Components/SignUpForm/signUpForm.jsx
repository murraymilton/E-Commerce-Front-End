import React from 'react'
import axios from 'axios';
import useForm from '../UseForm/useForm';
import { useHistory } from "react-router-dom";



const SignUpForm = (props) => {
  const history = useHistory();
  
  const { values, handleChange, handleSubmit } = useForm(user_authenticated);
  
  function user_authenticated() {
    register();
    history.push("/");
  }
  
  const register = async () => {
    await axios.post(`https://localhost:44394/api/authentication`, values)
    .then(res => props.setToken(res.data))
    .catch(error => console.log(error));
  }
  
  return (  
    <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">
                        First Name:
                    </label>
                    <input
                    id="firstName"
                    type="text"
                    name="firstname"
                    onChange={handleChange}
                    value={values.firstname}
                    required={true}
                    />
                    <label htmlFor="lastName">
                        Last Name:
                    </label>
                    <input
                    id="lastName"
                    type="text"
                    name="lastname"
                    onChange={handleChange}
                    value={values.lastname}
                    required={true}
                    />
                    <label htmlFor="username">
                        Username:
                    </label>
                    <input
                    id="userName"
                    type="text"
                    name="username"
                    onChange={handleChange}
                    value={values.username}
                    required={true}
                    />
                    <label htmlFor="password">
                        Password:
                    </label>
                    <input
                    id="passWord"
                    type="text"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    required={true}
                    />
                    <label htmlFor="email">
                        Email:
                    </label>
                    <input
                    id="email"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    required={true}
                    />
                    <label htmlFor="phonenumber">
                        Phone Number:
                    </label>
                    <input
                    id="phoneNumber"
                    type="text"
                    name="phonenumber"
                    onChange={handleChange}
                    value={values.phonenumber}
                    required={true}
                    />
                </div>
                <button type="submit" className="btn btn-dark">Submit</button>
            </form>
        </>
    );
  }
  
  export default SignUpForm;
  
  // {
  //   "firstname": "Murray",
  //   "lastname": "Milton",
  //   "username": "masterm",
  //   "password": "pass12345",
  //   "email": "milton357@mm.com",
  //   "phonenumber": "555-555-5555"
  // }