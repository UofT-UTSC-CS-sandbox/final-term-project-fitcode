import React, { useEffect, useState } from "react";
import ComponentButton from "../../UI/ComponentButton/ComponentButton";

import "../UserProfile/UserProfile.css";
import "./OngoingQuestPage.css";


const OngoingQuests = () => {
  const [allOngoingQuests, setOngoingQuests] = useState([]);

 
  useEffect(() => {
  const getOngoingQuests = async () => {
    try{
      const resp = await fetch(`/ongoing_quest_list`);
      if (!resp.ok) {
        throw new Error('Network response was not ok');
      }
      const allOngoingQuests = await resp.json();
      setOngoingQuests(allOngoingQuests);
      console.log(allOngoingQuests);
    }catch (e){
      console.log(e);
    }
  };
  getOngoingQuests();
  },[]);

  return (
    <>
      <div className="titleSection">
        <ComponentButton />
        <p className="mainTitle">Ongoing Quests</p>
        <button className="fillerButton" />
      </div>

      <div className="questBody">
        {allOngoingQuests.map((curQuest) => {
          return (
            <ComponentButton
              key={curQuest.quest_id}
              buttonType="main"
              points={0}
              text={"Temp Quest"}
              difficulty={"easy"}
            />)
        })}
        
      </div>
    </>
  );
};

export default OngoingQuests;
