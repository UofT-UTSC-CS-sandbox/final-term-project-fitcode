import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ComponentButton from "../../UI/ComponentButton/ComponentButton";

import "../UserProfile/UserProfile.css";
import "./QuestSelect.css";
import ToastManager from "../../Toast/ToastManager";

const QuestSelect = (props) => {
  const location = useLocation();
  const { availableQuests } = location.state || {};
  console.log(availableQuests);
  const { toasts, showToast } = ToastManager();
  const showDifficulty = (points) =>
  points === 100 ? "easy" : points === 200 ? "medium" : "hard";

  const handleButtonClick = (quest) => {
    // You can customize the mxessage and duration here
    showToast(`You selected ${quest.name} (${showDifficulty(quest.quest_points)} difficulty)`, 3000);
  };

  return (
    <>
      <div className="titleSection">
        <ComponentButton />
        <p className="mainTitle">Quests</p>
        <button className="fillerButton" />
      </div>

      <div className="questBody">
        {availableQuests &&
          availableQuests.map((curQuest) => {
            return (
              <ComponentButton
                key={curQuest.quest_id}
                buttonType="main"
                points={curQuest.quest_points.toString()}
                text={curQuest.name}
                difficulty={showDifficulty(curQuest.quest_points)}
                onClick={() => handleButtonClick(curQuest)}
              />
            );
          })}
        {toasts}
      </div>
      
    </>
  );
};

export default QuestSelect;
