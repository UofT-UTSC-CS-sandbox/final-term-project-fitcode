import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ComponentButton from "../../UI/ComponentButton/ComponentButton";

import "../UserProfile/UserProfile.css";
import "./QuestSelect.css";

const QuestSelect = (props) => {
  const location = useLocation();
  const { availableQuests } = location.state || {};
  console.log(availableQuests);

  const showDifficulty = (points) =>
    points === 100 ? "easy" : points === 200 ? "medium" : "hard";

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
              />
            );
          })}
      </div>
    </>
  );
};

export default QuestSelect;

