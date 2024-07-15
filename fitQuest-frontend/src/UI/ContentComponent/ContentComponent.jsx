import React from "react";
import "./ContentComponent.css";
/* All props must be lowercased strings.
   There are three possible values for buttonType: questList (button on home screen), 
   otherHome (the rectangle non-QuestList buttons on home screen), and questType (default)
 */

/*
 Additional Added Ons:
 Created new type called questExercise for the excercise page.
 Also created new prop value which is the score per exercise
*/
const ContentComponent = ({ buttonType, text, value, onClick = () => {} }) => {
  let defaultText = "Placeholder Workout";
  let componentClass = "contentComponent questType";

  if (buttonType) {
    if (buttonType === "questList") {
      componentClass = "contentComponent questList";
    }

    if (buttonType === "otherHome") {
      componentClass = "contentComponent otherHome";
    }

    if (buttonType === "questExcercise") {
      componentClass = "contentComponent questExcercise";
    }
  }

  if (text) defaultText = text;

  return (
    <button className={componentClass} onClick={onClick}>
      <p className="componentFont">{defaultText}</p>
      {value && <p className="componentValue">{value}</p>}
    </button>
  );
};

export default ContentComponent;
