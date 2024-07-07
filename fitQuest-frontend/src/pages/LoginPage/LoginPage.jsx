import { useState } from "react";
import React from "react";

import ContentComponent from "../../UI/ContentComponent/ContentComponent";
import FormButton from "../../UI/FormButton/FormButton";
import LoginForm from "../../UI/Form_Component/login_form";
import "./LoginPage.css"

function LoginPage() {
  return (
    <div className="login-page">
        <div className = "login-text">Log In</div>
        <div className = "google-container">
         <div className = "google-placeholder">Sign up With Google</div>
        </div>
        <div className = "login-or">OR</div>
        <LoginForm></LoginForm>
        <div className = "login-or">
          <a style={{textDecoration: "none", cursor: "pointer", color:"white"}} href="/accounts/register">Dont have an account? Sign up here!</a>
        </div>
    </div>
  );
}

export default LoginPage;
