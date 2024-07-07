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

    const onClick = async (curQuest) =>{
      try{
        console.log(curQuest.quest_id);
        const resp = await fetch(`/complete_user_quest/${curQuest.quest_id}/`);
        if (!resp.ok) {
          throw new Error('Network response was not ok');
        }
        const compeltedQuest = await resp.json();
        if(compeltedQuest.status === "success"){
          console.log(allOngoingQuests.filter(quest => quest.quest_id == curQuest.quest_id));
          setOngoingQuests(allOngoingQuests.filter(quest => quest.quest_id !== curQuest.quest_id)); //Filter Current Quest out of state so we remove from screen
        }
        console.log("test");
      }catch (e){
        console.log(e);
    } 
  }

  const handleClick = (curQuest) => () => { // wrap onCLick function so we can pass it to our buttons
    onClick(curQuest);
  };

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
              onClick={handleClick(curQuest)}
            />)
        })}
        
      </div>
    </>
  );
};

export default OngoingQuests;
