import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ComponentButton from "../../UI/ComponentButton/ComponentButton";
import ContentComponent from "../../UI/ContentComponent/ContentComponent";
import "./WorkoutSelection.css";
import "../UserProfile/UserProfile.css";

const WorkoutSelection = () => {
  const navigate = useNavigate();

  const getQuests = async (type) => {
    try {
      console.log(type);
      const resp = await fetch(`/available_quests?type=${type}`);
      console.log(resp);
      const allQuests = await resp.json();

      navigate("/quests", {
        state: { workoutType: type, availableQuests: allQuests },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleSelectionClick = (workoutType) => {
    getQuests(workoutType);
  };

  console.log("test");

  return (
    <>
      <div className="titleSection">
        <ComponentButton />
        <p className="mainTitle">Quests</p>
        <button className="fillerButton" />
      </div>

      <div className="workoutBody">
        <ContentComponent
          buttonType="questType"
          text="Push Workout"
          onClick={() => handleSelectionClick("push")}
        />
        <ContentComponent
          buttonType="questType"
          text="Pull Workout"
          onClick={() => handleSelectionClick("pull")}
        />
        <ContentComponent
          buttonType="questType"
          text="Arms Workout"
          onClick={() => handleSelectionClick("arms")}
        />
        <ContentComponent
          buttonType="questType"
          text="Chest Workout"
          onClick={() => handleSelectionClick("chest")}
        />
        <ContentComponent
          buttonType="questType"
          text="Lower Body Workout"
          onClick={() => handleSelectionClick("lower")}
        />
        <ContentComponent
          buttonType="questType"
          text="Placeholder Workout"
          onClick={() => handleSelectionClick("Placeholder")}
        />
      </div>
    </>
  );
};

export default WorkoutSelection;
