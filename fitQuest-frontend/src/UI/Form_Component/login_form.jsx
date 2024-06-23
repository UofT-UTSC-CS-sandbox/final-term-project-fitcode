/*
Example implementation of Log in Textfields and Labels using the form components
*/
import React from 'react';
import FormLabel from './form_label';
import FormInput from './form_input';
import './form_component.css';
import FormButton from '../FormButton/FormButton';


const LoginForm = () =>{
    return(
        <form method="post" action="/accounts/login/" >
            <div className="login-form">
                <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
                <FormLabel title = "Username or Email"></FormLabel>
                <input name="username" type="text" className="form-input"/>
                <FormLabel title = "Password"></FormLabel>
                <input name="password" type="text" className="form-input"/>
                <FormButton></FormButton>
                <input type="hidden" name="next" value="/"/>
            </div>
        </form>

    );
}

export default LoginForm