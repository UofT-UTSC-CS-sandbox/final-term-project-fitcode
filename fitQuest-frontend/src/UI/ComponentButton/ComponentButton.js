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
    if (buttonType === "accept") backgroundClass += " acceptBackground";
  }
  if (text) defaultFontText = text;

  // Define toggleAccordion to conditionally toggle based on buttonType
  const toggleAccordion = () => {
    if (buttonType === "main") {
      setIsAccordionVisible((curState) => !curState);
    }
  };

  let accordionClassName = "accordion " + difficulty;

  // Simple Accordion Component for demonstration
  const Accordion = () => (
    <div className={accordionClassName} onClick={toggleAccordion}>
      <div className="quest-description-text">
        This is where the quest description goes.
      </div>
      <ComponentButton
        buttonType="accept"
        text="Accept Quest"
        onClick={curQuestId && updateQuest}
      />
    </div>
  );

  const checkButtonType = buttonType === "main" ? toggleAccordion : onClick;

  return (
    <>
      <button className={backgroundClass} onClick={checkButtonType}>
        <p className="defaultFont">{defaultFontText}</p>
        {pointsText && <p className="defaultFont">{pointsText}</p>}
      </button>
      {isAccordionVisible && buttonType === "main" && <Accordion />}
    </>
  );
};

export default ComponentButton;
