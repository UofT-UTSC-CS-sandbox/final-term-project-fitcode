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
    if (buttonType === "main") {
      setIsAccordionVisible(!isAccordionVisible);
    }
  };

  let accordionClassName = "accordion " + difficulty;

  // Simple Accordion Component for demonstration
  const Accordion = () => (
    <div className={accordionClassName} onClick={toggleAccordion}>
      <div class="quest-description-text">The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. Line up at the start. The running speed starts slowly, but gets faster each minute after you hear this signal. [beep] A single lap should be completed each time you hear this sound. [ding] Remember to run in a straight line, and run as long as possible. The second time you fail to complete a lap before the sound, your test is over. The test will begin on the word start. On your mark, get ready, start.</div>
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