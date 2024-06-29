/*
Example implementation of sign up form without button
*/
import React from 'react';
import FormLabel from './form_label';
import FormInput from './form_input';
import './form_component.css';


const SignupForm = () =>{
    return(
        <div className = "signup-form" >
            <FormLabel title = "Enter Email Address:"></FormLabel>
            <FormInput></FormInput>
            <FormLabel title = "Enter Username"></FormLabel>
            <FormInput></FormInput>
            <FormLabel title = "Enter Password:"></FormLabel>
            <FormInput></FormInput>
            <FormLabel title = "Confirm Password"></FormLabel>
            <FormInput></FormInput>
        </div>

    );
}

export default SignupForm