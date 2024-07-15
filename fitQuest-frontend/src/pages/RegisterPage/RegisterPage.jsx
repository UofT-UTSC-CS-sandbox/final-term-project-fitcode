import { useState } from "react";
import React from "react";

import ContentComponent from "../../UI/ContentComponent/ContentComponent";
import FormButton from "../../UI/FormButton/FormButton";
import "../LoginPage/LoginPage.css"
import SignupForm from "../../UI/Form_Component/signup_form";

function RegisterPage() {
  return (
    <div className="login-page">
        <div className = "login-text">Sign Up</div>
        <div className = "google-container">
         <div className = "google-placeholder">Sign up With Google</div>
        </div>
        <div className = "login-or">OR</div>
        <SignupForm></SignupForm>
        <div className = "login-or">
          <a style={{textDecoration: "none", cursor: "pointer", color:"white"}} href="/accounts/login">Have an account? Log in here!</a>
        </div>
    </div>
  );
}

export default RegisterPage;
