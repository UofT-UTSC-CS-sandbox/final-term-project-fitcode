import React, { useEffect, useState } from "react";
import ComponentButton from "../../UI/ComponentButton/ComponentButton";

import "../UserProfile/UserProfile.css";
import "./OngoingQuestPage.css";

const typePara = "type=Pull";

const OngoingQuests = () => {
  const [availableUserQuests, setAvailableUserQuests] = useState([]);

  useEffect(() => {
    const getQuests = async () => {
      try {
        const resp = await fetch(`/ongoing_quests?${typePara}`);
        const allUserQuests = await resp.json();
        setAvailableUserQuests(allUserQuests);
        console.log(allUserQuests);
      } catch (err) {
        console.log(err);
      }
    };
    getQuests();
  }, []);

//   const handleClick = (value) => {
//     console.log(value);
//   };

  const showDifficulty = (points) =>
    points === 100 ? "easy" : points === 200 ? "medium" : "hard";

  return (
    <>
      <div className="titleSection">
        <ComponentButton />
        <p className="mainTitle">Ongoing Quests</p>
        <button className="fillerButton" />
      </div>

      <div className="questBody">
        {availableUserQuests.map((curQuest) => {
          return (
            <ComponentButton
              key={curQuest.quest_id}
              buttonType="main"
              text={'hi'}
              difficulty={'easy'}
              points={100}
            />
          );
        })}
      </div>
    </>
  );
};

export default OngoingQuests;
