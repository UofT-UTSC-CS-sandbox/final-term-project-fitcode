/*
Example implementation of Log in Textfields and Labels using the form components
*/
import React from 'react';
import FormLabel from './form_label';
import FormInput from './form_input';
import './form_component.css';


const LoginForm = () =>{
    return(
        <div className = "login-form" >
            <FormLabel title = "Username or Email"></FormLabel>
            <FormInput></FormInput>
            <FormLabel title = "Password"></FormLabel>
            <FormInput></FormInput>
        </div>

    );
}

export default LoginForm