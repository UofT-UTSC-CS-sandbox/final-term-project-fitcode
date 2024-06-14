import React from "react";
import "./ContentComponent.css";
/* All props must be lowercased strings.
   There are three possible values for buttonType: questList (button on home screen), 
   otherHome (the rectangle non-QuestList buttons on home screen), and questType (default)
 */
const ContentComponent = ({buttonType, text }) => {
    let defaultText = "Placeholder Workout";
    let componentClass = "contentComponent questType";
  
    if (buttonType) {
      if (buttonType === "questList"){
        componentClass = "contentComponent questList";
      } 

      if (buttonType === "otherHome") {
        componentClass = "contentComponent otherHome"
      }
    }

    if (text) defaultText = text;
  
    return (
      <button className={componentClass} onClick={() => {}}>
        <p className="componentFont">{defaultText}</p>
      </button>
    );
  };
  
  export default ContentComponent;