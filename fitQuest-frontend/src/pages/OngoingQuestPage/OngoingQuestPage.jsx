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

    const onClick = async (curQuest) =>{
      try{
        console.log(curQuest.quest_id);
        const resp = await fetch(`/complete_user_quest/${curQuest.quest_id}/`); // will change into post later
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
              buttonType="main ongoing"
              points={curQuest.points.toString()}
              text={curQuest.name}
              difficulty={"easy"}
              onClickComplete={handleClick(curQuest)}
            />)
        })}
        
      </div>
    </>
  );
};

export default OngoingQuests;
