import React from "react";
import "./ComponentButton.css";
/* Each props used must be string and lowercased.
 * Default button is Back button; its text and style is already set, so no need to pass props for Back button.
 * For Navbar button, need to pass in text and buttonType. For main (quest button), all 4 needs to be passed in.
 * For more info, see the logic of the code to see what props need to be passed in.
 */
const ComponentButton = ({ buttonType, text, points, difficulty, onClick }) => {
  let defaultFontText = "Back";
  let pointsText = "";
  let backgroundClass = "defaultBackground";

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

  return (
    <button className={backgroundClass} onClick={onClick}>
      <p className="defaultFont">{defaultFontText}</p>
      {pointsText && <p className="defaultFont">{pointsText}</p>}
    </button>
  );
};

export default ComponentButton;
