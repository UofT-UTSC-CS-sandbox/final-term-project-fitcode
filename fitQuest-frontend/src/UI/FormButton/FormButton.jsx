import React from "react";
import "./FormButton.css";

const FormButton = ({ formButtonType }) => {
    let text = "";
    if (formButtonType) formButtonType === "login" ? text = "Log In" : text = "Sign Up";
    return (
        <button className="form-button">{text}</button>
    );
};

export default FormButton;