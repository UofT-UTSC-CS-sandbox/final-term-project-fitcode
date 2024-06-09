import React from "react";
import "./FormButton.css";

/* For this button, there are only two options for text: Log In and Sign Up.
   The prop formButtonType indicates the role of the button in the forms.
   The default value for the text for all FormButtons is "Log In".
   However, you can switch the text to "Sign Up" by inputting "s" as the 
   prop formButtonType.
 */

const FormButton = ({ formButtonType }) => {
    let text = "Log In";
    if (formButtonType === "s")    text = "Sign Up";
    return (
        <button className="form-button">{text}</button>
    );
};

export default FormButton;