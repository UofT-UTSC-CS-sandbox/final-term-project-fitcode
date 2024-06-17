import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import ComponentButton from "../../UI/ComponentButton/ComponentButton";
import ContentComponent from "../../UI/ContentComponent/ContentComponent";
import "./WorkoutSelection.css";
import "../UserProfile/UserProfile.css";

// Make sure to add the type prop to React Router so when workout is selected in WorkoutSelection,
// it passes it to QuestSelect and not ContentComponent

const WorkoutSelection = () => {
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
        ></ContentComponent>
        <a href="/quests" style={{ textDecoration: "none", cursor: "pointer" }}>
          <ContentComponent
            buttonType="questType"
            type="pull"
            text="Pull Workout"
          ></ContentComponent>
        </a>
        <ContentComponent
          buttonType="questType"
          text="Arms Workout"
        ></ContentComponent>
        <ContentComponent
          buttonType="questType"
          text="Chest Workout"
        ></ContentComponent>
        <ContentComponent
          buttonType="questType"
          text="Lower Body Workout"
        ></ContentComponent>
        <ContentComponent
          buttonType="questType"
          text="PlaceHolder Workout"
        ></ContentComponent>
      </div>
    </>
  );
};
export default WorkoutSelection;
