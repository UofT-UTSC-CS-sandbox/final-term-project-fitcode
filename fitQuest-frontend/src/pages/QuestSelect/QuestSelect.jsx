import React, { useEffect, useState } from "react";
import Navbar from "../../component/Navbar/Navbar";
import ComponentButton from "../../UI/ComponentButton/ComponentButton";
import ContentComponent from "../../UI/ContentComponent/ContentComponent";

import "../UserProfile/UserProfile.css";
import "./QuestSelect.css";

const typePara = "type=pull";

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
  }, []);

  const handleClick = (value) => {
    console.log(value);
  };

  return (
    <>
      <Navbar />
      <div className="titleSection">
        <ComponentButton />
        <p className="mainTitle">Quests</p>
        <button className="fillerButton" />
      </div>

      <div className="questBody">
        {availableQuests.map((curQuest) => {
          <ContentComponent
            buttonType="questExcercise"
            text="Beginner Exercise"
            value={curQuest.quest_points}
            onClick={() => handleClick(curQuest.quest_points)}
          />;
        })}
      </div>
    </>
  );
};

export default QuestSelect;
