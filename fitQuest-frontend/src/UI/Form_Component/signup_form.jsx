/*
Example implementation of sign up form without button
*/
import React from 'react';
import FormLabel from './form_label';
import FormInput from './form_input';
import './form_component.css';
import FormButton from '../FormButton/FormButton';


const SignupForm = () =>{
    return(
        <form method="post" action="/accounts/register/">
            <div className="signup-form">
                <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken} />
                <FormLabel title = "Enter Email Address:"></FormLabel>
                <input name="email" type="text" className="form-input"/>
                <FormLabel title = "Enter Username"></FormLabel>
                <input name="username" type="text" className="form-input"/>
                <FormLabel title = "Enter Password"></FormLabel>
                <input name="password1" type="text" className="form-input"/>
                <FormLabel title = "Confirm Password"></FormLabel>
                <input name="password2" type="text" className="form-input"/>
                <FormButton formButtonType = "s"></FormButton>
                <input type="hidden" name="next" value="/"/>
            </div>
        </form>

    );
}

export default SignupForm