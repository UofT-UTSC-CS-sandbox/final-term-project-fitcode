import React, { useState } from "react";
import "./ComponentButton.css";
/* Each props used must be string and lowercased.
 * Default button is Back button; its text and style is already set, so no need to pass props for Back button.
 * For Navbar button, need to pass in text and buttonType. For main (quest button), all 4 needs to be passed in.
 * For more info, see the logic of the code to see what props need to be passed in.
 */
const ComponentButton = ({
  buttonType,
  text,
  points,
  difficulty,
  onClick = () => {},
  curQuestId,
  onClickComplete,
  onClickCancel,
}) => {
  let defaultFontText = "Back";
  let pointsText = "";
  let backgroundClass = "defaultBackground";
  // Initialize state at the top level
  const [isAccordionVisible, setIsAccordionVisible] = useState(false);

  // PLZ UPDATE THIS DEBT BELOW!!! NEED TO FETCH THE QUEST_ID IN THE FUTURE AND DO THIS SOMEWHERE ELSE!!!
  const updateQuest = async () => {
    try {
      const resp = await fetch("quests/accept", {
        method: "POST",
        body: JSON.stringify({ quest_id: curQuestId }),
        headers: {
          "X-CSRFToken": csrftoken,
        },
      });
      const updatedResp = await resp.json();
      console.log(updatedResp.message);
    } catch (err) {
      console.log(err);
    }
  };

  if (buttonType) {
    if (buttonType === "navbar") backgroundClass += " navbarBackground";
    if (buttonType === "main" || buttonType === "main ongoing" || buttonType === "main friend") {
      backgroundClass += " mainBackground";
      backgroundClass +=
        difficulty === "easy"
          ? " easy"
          : difficulty === "medium"
          ? " medium"
          : " hard";
      if(!points){
        pointsText = ''
      } else pointsText = points + " points";
    }
    if (buttonType === "accept") backgroundClass += " acceptBackground";
  }
  if (text) defaultFontText = text;

  // Define toggleAccordion to conditionally toggle based on buttonType
  const toggleAccordion = () => {
    if (buttonType === "main ongoing") {
      setIsAccordionVisible((curState) => !curState);
    } else if (buttonType === "main") {
      setIsAccordionVisible((curState) => !curState);
    }
    else if (buttonType === "main friend") {
      setIsAccordionVisible((curState) => !curState);
    }
    console.log("Check");
  };

  // let accordionClassName = "accordion " + difficulty;

  // Simple Accordion Component for demonstration
  const AccordionContent = () => {
    if (buttonType === "main ongoing") {
      return (
        <div className={`accordion ${difficulty}`}>
          <button
            className="defaultBackground acceptBackground"
            onClick={onClickCancel}
          >
            <p className="defaultFont">Cancel</p>
          </button>
          <button
            className="defaultBackground acceptBackground"
            onClick={onClickComplete}
          >
            <p className="defaultFont">Complete</p>
          </button>
        </div>
      );
    } else if (buttonType === "main") {
      return (
        <div className={`accordion ${difficulty}`}>
          <div className="quest-description-text">
            This is where the quest description goes.
          </div>
          <button
            className="defaultBackground acceptBackground"
            onClick={curQuestId && updateQuest}
          >
            <p className="defaultFont">Accept Quest</p>
          </button>
        </div>
      );
    }
    else if (buttonType === "main friend") {
      return (
        <div className={`accordion easy`}>
          <div className="quest-description-text">
            Remove A Friend
          </div>
          <button
            className="defaultBackground acceptBackground"
            onClick={onClickComplete}
          >
            <p className="defaultFont">Remove</p>
          </button>
        </div>
      );
    }
    return null;
  };

  const checkButtonType =
    buttonType === "main" || buttonType === "main ongoing" || buttonType ==="main friend"
      ? toggleAccordion
      : onClick;

  return (
    <>
      <button className={backgroundClass} onClick={checkButtonType}>
        <p className="defaultFont">{defaultFontText}</p>
        {pointsText && <p className="defaultFont">{pointsText}</p>}
      </button>
      {isAccordionVisible && <AccordionContent />}
    </>
  );
}; //I just added another Accordion using the same logic for ongoing quests - Dan

export default ComponentButton;
