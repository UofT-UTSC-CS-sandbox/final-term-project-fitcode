import React, { useEffect, useState } from "react";
import ComponentButton from "../../UI/ComponentButton/ComponentButton";

import "../UserProfile/UserProfile.css";
import "./QuestSelect.css";

const typePara = "type=Pull";

const QuestSelect = () => {
  const [availableQuests, setAvailableQuests] = useState([]);

  useEffect(() => {
    const getQuests = async () => {
      try {
        const resp = await fetch(`/available_quests?${typePara}`);
        const allQuests = await resp.json();
        setAvailableQuests(allQuests);
        console.log(allQuests);
      } catch (err) {
        console.log(err);
      }
    };
    getQuests();
  }, []);

  const handleClick = (value) => {
    console.log(value);
  };

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
        {availableQuests.map((curQuest) => {
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
