import React from 'react'
import axios from 'axios';
import useForm from '../UseForm/useForm';
import { useHistory } from "react-router-dom";

const LoginForm = (props) => {

    const history = useHistory();

    const { values, handleChange, handleSubmit } = useForm(user_authenticated);

    function user_authenticated() {
        login();
        history.push("/");
    }

    const login = async () => {
        await axios.post(`https://localhost:44394/api/authentication/login`, values)
        .then(response => props.getUser(response.data))    
        .catch(error => console.log(error));
    }

    return (  
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
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
                    type="password"
                    name="password"
                    onChange={handleChange}
                    value={values.password}
                    required={true}
                    />
                </div>
                <button type="submit" className="btn btn-dark">Login</button>
            </form>
        </>
    );
}
 
export default LoginForm;