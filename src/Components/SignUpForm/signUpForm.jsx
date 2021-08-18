import React from 'react'
import axios from 'axios';
import useForm from '../UseForm/useForm';
import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';


const SignUpForm = (props) => {
  const history = useHistory();
  
  const { values, handleChange, handleSubmit } = useForm(user_authenticated);
  
  function user_authenticated() {
    register();
    history.push("/");
  }
  
  const register = async () => {
    await axios.post(`https://localhost:44394/api/authentication`, values)
    .then(response => { props.getUser(response.data); props.getItemsInCart(response.data) } ) // token
    .catch(error => console.log(error));
}
  
  return (  
        <>
        <section className="white-section">
            <h1>Sign Up</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="FirstName">
                    <Form.Label>
                        First Name:
                    </Form.Label>
                    <InputGroup>
                        <Form.Control
                        id="firstName"
                        type="text"
                        name="firstname"
                        onChange={handleChange}
                        value={values.firstname}
                        required={true}
                        />
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="LastName">
                    <Form.Label>
                        Last Name:
                    </Form.Label>
                    <InputGroup>
                        <Form.Control
                        id="lastName"
                        type="text"
                        name="lastname"
                        onChange={handleChange}
                        value={values.lastname}
                        required={true}
                        />
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="UserName">
                    <Form.Label>
                        Username:
                    </Form.Label>
                    <InputGroup>
                        <Form.Control
                        id="userName"
                        type="text"
                        name="username"
                        onChange={handleChange}
                        value={values.username}
                        required={true}
                        />
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="Password">
                    <Form.Label>
                        Password:
                    </Form.Label>
                    <InputGroup>
                        <Form.Control
                        id="passWord"
                        type="password"
                        name="password"
                        onChange={handleChange}
                        value={values.password}
                        required={true}
                        />
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="Email">
                    <Form.Label>
                        Email:
                    </Form.Label>
                    <InputGroup>
                        <Form.Control
                        id="email"
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                        required={true}
                        />
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="Phone">
                    <Form.Label>
                        Phone Number:
                    </Form.Label>
                    <InputGroup>
                        <Form.Control
                        id="phoneNumber"
                        type="text"
                        name="phonenumber"
                        onChange={handleChange}
                        value={values.phonenumber}
                        required={true}
                        />
                    </InputGroup>
                </Form.Group>
                <Button className='mt-2' type="submit">Submit</Button>
            </Form>
        </section>
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