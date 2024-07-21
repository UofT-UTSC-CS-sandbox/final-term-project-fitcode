import React, { useState } from "react";
import "./QuestButtonBase.css";
import QuestButtonBase from "./QuestButtonBase";

const QuestVerificationButton = ({
  questName="Default",
  points,
  onClick = () => {}
}) => {

  let accordianContent = (<>
    <div className="quest-description-text">
      Insert Photo/Video Here
    </div>
    <button
      className="defaultBackground acceptBackground"
      onClick={onClick}
    >
      <p className="defaultFont">Submit Quest</p>
    </button>
  </>);

  return (
    <QuestButtonBase
      buttonType="accordian"
      points={points}
      text={questName}
      accordianContent={accordianContent}
    ></QuestButtonBase>
  );
}; 

export default QuestVerificationButton;
