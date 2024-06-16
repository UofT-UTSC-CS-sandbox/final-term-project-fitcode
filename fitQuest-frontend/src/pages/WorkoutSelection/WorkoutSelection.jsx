import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import ComponentButton from "../../UI/ComponentButton/ComponentButton";
import ContentComponent from "../../UI/ContentComponent/ContentComponent";
import "./WorkoutSelection.css"
import "../UserProfile/UserProfile.css"
const WorkoutSelection = () => {
    return(
        <>
            <div className="titleSection">
                <ComponentButton />
                <p className="mainTitle">Quests</p>
                <button className="fillerButton" />
            </div>

            <div className="workoutBody">
                <ContentComponent buttonType = "questType" text = "Push Workout"></ContentComponent>
                <ContentComponent buttonType = "questType" text = "Pull Workout"></ContentComponent>
                <ContentComponent buttonType = "questType" text = "Arms Workout"></ContentComponent>
                <ContentComponent buttonType = "questType" text = "Chest Workout"></ContentComponent>
                <ContentComponent buttonType = "questType" text = "Lower Body Workout"></ContentComponent>
                <ContentComponent buttonType = "questType" text = "PlaceHolder Workout"></ContentComponent>
            </div>
        </>

    );

};
export default WorkoutSelection;