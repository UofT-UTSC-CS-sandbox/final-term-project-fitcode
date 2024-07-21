import React, { useState } from "react";
import "./QuestButtonBase.css";
/* Each props used must be string and lowercased.
 * Default button is Back button; its text and style is already set, so no need to pass props for Back button.
 * For Navbar button, need to pass in text and buttonType. For main (quest button), all 4 needs to be passed in.
 * For more info, see the logic of the code to see what props need to be passed in.
 */
const QuestButtonBase = ({
  buttonType,
  text="Default",
  points,
  onClick = () => {},
  accordianContent
}) => {
  let pointsText = "";
  let backgroundClass = "defaultBackground mainBackground";
  // Initialize state at the top level
  const [isAccordionVisible, setIsAccordionVisible] = useState(false);

  const showDifficulty = (points) =>
    points === 100 ? "easy" : points === 200 ? "medium" : "hard";
  let difficulty = showDifficulty(points)

  backgroundClass +=
    difficulty === "easy"
      ? " easy"
      : difficulty === "medium"
      ? " medium"
      : " hard";
  pointsText = points + " points";

  // Define toggleAccordion to conditionally toggle based on buttonType
  const toggleAccordion = () => {
    if (buttonType === "accordian") {
      setIsAccordionVisible((curState) => !curState);
    } 
  };

  // let accordionClassName = "accordion " + difficulty;

  const checkButtonType =
    buttonType === "accordian"
      ? toggleAccordion
      : onClick;

  return (
    <>
      <button className={backgroundClass} onClick={checkButtonType}>
        <p className="defaultFont">{text}</p>
        {pointsText && <p className="defaultFont">{pointsText}</p>}
      </button>
      {isAccordionVisible && 
        <div className={`accordion ${difficulty}`}>
          {accordianContent}
        </div>
      }
    </>
  );
}; 

export default QuestButtonBase;
