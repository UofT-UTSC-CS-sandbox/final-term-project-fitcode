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
      const allOngoingQuests = await resp.json();
      setOngoingQuests(allOngoingQuests);
    }catch (e){
      console.log(e);
    }
  };
  getOngoingQuests();
  },[]);

  // const deleteUserQuest = async (quest_id) => {
  //   try{
  //     const resp = await fetch(`/cancel_ongoing_quest/?${quest_id}`);
  //     const newOngoingQuests = await resp.json();
  //     setOngoingQuests(newOngoingQuests);
  //     await fetch(`/ongoing_quests`);
  //   }catch(e){
  //     console.log(e);
  //   }
  // }

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
              points={curQuest.points.toString()}
              text={curQuest.name}
              difficulty={"easy"}
            />)
        })}
        
      </div>
    </>
  );
};

export default OngoingQuests;
