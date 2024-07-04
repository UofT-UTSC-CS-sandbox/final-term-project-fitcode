import React, { useState } from 'react';
import "./ComponentButton.css";
/* Each props used must be string and lowercased.
 * Default button is Back button; its text and style is already set, so no need to pass props for Back button.
 * For Navbar button, need to pass in text and buttonType. For main (quest button), all 4 needs to be passed in.
 * For more info, see the logic of the code to see what props need to be passed in.
 */

const ComponentButton = ({ buttonType, text, points, difficulty }) => {
  let defaultFontText = "Back";
  let pointsText = "";
  let backgroundClass = "defaultBackground";
  // Initialize state at the top level
  const [isAccordionVisible, setIsAccordionVisible] = useState(false);

  if (buttonType) {
    if (buttonType === "navbar") backgroundClass += " navbarBackground";
    if (buttonType === "main") {
      backgroundClass += " mainBackground";
      backgroundClass +=
        difficulty === "easy"
          ? " easy"
          : difficulty === "medium"
          ? " medium"
          : " hard";
      pointsText = points + " points";
    }
  }
  if (text) defaultFontText = text;

  // Define toggleAccordion to conditionally toggle based on buttonType
  const toggleAccordion = () => {
    console.log("hello");
    if (buttonType === "main") {
      setIsAccordionVisible(!isAccordionVisible);
    }
  };

  // Simple Accordion Component for demonstration
  const Accordion = () => (
    <div className="accordion">
      <p>Quest Description Placeholder</p>
      <ComponentButton buttonType="navbar" text="Accept Quest" />
    </div>
  );

  return (
    <>
      <button className={backgroundClass} onClick={toggleAccordion}>
        <p className="defaultFont">{defaultFontText}</p>
        {pointsText && <p className="defaultFont">{pointsText}</p>}
      </button>
      {/* Conditional rendering based on isAccordionVisible and buttonType */}
      {isAccordionVisible && buttonType === "main" && <Accordion />}
    </>
  );
};

export default ComponentButton;