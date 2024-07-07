import React, { useState } from 'react';
import "./ComponentButton.css";
/* Each props used must be string and lowercased.
 * Default button is Back button; its text and style is already set, so no need to pass props for Back button.
 * For Navbar button, need to pass in text and buttonType. For main (quest button), all 4 needs to be passed in.
 * For more info, see the logic of the code to see what props need to be passed in.
 */

const ComponentButton = ({ buttonType, text, points, difficulty, onClickComplete, onClickCancel }) => {
  let defaultFontText = "Back";
  let pointsText = "";
  let backgroundClass = "defaultBackground";
  // Initialize state at the top level
  const [isAccordionVisible, setIsAccordionVisible] = useState(false);

  if (buttonType) {
    if (buttonType === "navbar") backgroundClass += " navbarBackground";
    if (buttonType === "main" || buttonType === "main ongoing") {
      backgroundClass += " mainBackground";
      backgroundClass +=
        difficulty === "easy"
          ? " easy"
          : difficulty === "medium"
          ? " medium"
          : " hard";
      pointsText = points + " points";
    }
    if (buttonType === "accept") backgroundClass += " acceptBackground";
  }
  if (text) defaultFontText = text;

  // Define toggleAccordion to conditionally toggle based on buttonType
  const toggleAccordion = () => {
    if (buttonType === "main ongoing") {
      setIsAccordionVisible(!isAccordionVisible);
    } else
    if (buttonType === "main") {
      setIsAccordionVisible(!isAccordionVisible);
    }
  };

  // let accordionClassName = "accordion " + difficulty;

  // Simple Accordion Component for demonstration
  const AccordionContent = () => {
    if (buttonType === "main ongoing") {
      return (
        <div className={`accordion ${difficulty}`}>
          <button className="defaultBackground acceptBackground" onClick={onClickCancel}>
            <p className="defaultFont">Cancel</p>
          </button>
          <button className="defaultBackground acceptBackground" onClick={onClickComplete}>
            <p className="defaultFont">Complete</p>
          </button>
        </div>
      );
    } else if (buttonType === "main") {
      return (
        <div className={`accordion ${difficulty}`}>
          <div className="quest-description-text">This is where the quest description goes.</div>
          <button className="defaultBackground acceptBackground" onClick={() => {}}>
          <p className="defaultFont">Accept Quest</p>
          </button>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <button className={backgroundClass} onClick={toggleAccordion}>
        <p className="defaultFont">{defaultFontText}</p>
        {pointsText && <p className="defaultFont">{pointsText}</p>}
      </button>
      {/* Conditional rendering based on isAccordionVisible and buttonType */}
      {isAccordionVisible && <AccordionContent />}
    </>
  );
}; //I just added another Accordion using the same logic for ongoing quests - Dan
 
export default ComponentButton;