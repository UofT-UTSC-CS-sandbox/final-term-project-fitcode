import React, { useEffect, useState } from "react";
import ComponentButton from "../../UI/ComponentButton/ComponentButton";
import { useNavigate } from "react-router-dom";

import "../UserProfile/UserProfile.css";
import "./CompletedQuests.css";


const CompletedQuests = () => {
  const [completedQuests, setCompletedQuests] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getQuests = async () => {
      try {
        const resp = await fetch(`/get_completed_quests`);
        const data = await resp.json();
        setCompletedQuests(data["quests"]);

        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    getQuests();
  }, []);

  const showDifficulty = (points) =>
    points === 100 ? "easy" : points === 200 ? "medium" : "hard";
  
  return (
    <>
      <div className="titleSection">
        <ComponentButton onClick={() => navigate(-1)}/>
        <p className="mainTitle">Completed Quests</p>
        <button className="fillerButton" />
      </div>

      <div className="questBody">
        {completedQuests.map((userQuest) => {
          console.log(userQuest)
          return (
            <ComponentButton
              key={userQuest.quest_id}
              buttonType="main completed"
              points={userQuest.quest_points.toString()}
              text={userQuest.name}
              difficulty={showDifficulty(userQuest.quest_points)}
            />
          );
        })}
      </div>
    </>
  );
};

export default CompletedQuests;
