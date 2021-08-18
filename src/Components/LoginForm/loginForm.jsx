import React from 'react'
import axios from 'axios';
import useForm from '../UseForm/useForm';
import { useHistory } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

const LoginForm = (props) => {
    const history = useHistory();

    const { values, handleChange, handleSubmit } = useForm(user_authenticated);

    function user_authenticated() {
        login();
        history.push("/");
    }

    const login = async () => {
        await axios.post(`https://localhost:44394/api/authentication/login`, values)
        .then(response => { props.getUser(response.data); props.getItemsInCart(response.data) } )    
        .catch(error => console.log(error));
    }

    return (  
        <>
            <section className="colored-section">
                <h1>Login</h1>
                <Form onSubmit={handleSubmit}>
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
                    <Button className='mt-2' type="submit">Submit</Button>
                </Form>
            </section>
        </>
    );
}
 
export default LoginForm;