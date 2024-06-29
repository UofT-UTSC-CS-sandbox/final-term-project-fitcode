import { useState } from "react";
import React from "react";

import ContentComponent from "../../UI/ContentComponent/ContentComponent";
import FormButton from "../../UI/FormButton/FormButton";
import LoginForm from "../../UI/Form_Component/login_form";
import "./login_page.css"

function Login_Page() {
  return (
    <div className="login-page">
        <div className = "login-text">Log In</div>
        <div className = "google-container">
         <div className = "google-placeholder">Sign up With Google</div>
        </div>
        <div className = "login-or">OR</div>
        <LoginForm></LoginForm>
        <FormButton></FormButton>

    </div>
  );
}

export default Login_Page;
