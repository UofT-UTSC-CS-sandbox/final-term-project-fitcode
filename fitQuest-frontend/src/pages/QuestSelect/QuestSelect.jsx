import React from "react";
import Navbar from "../../component/Navbar/Navbar";
import ComponentButton from "../../UI/ComponentButton/ComponentButton";
import ContentComponent from "../../UI/ContentComponent/ContentComponent";

import "../UserProfile/UserProfile.css"
import "./QuestSelect.css"
const QuestSelect = () => {

    const handleClick = (value) => {
        console.log(value);
      };

    return(
        <>
            <div className="titleSection">
                <ComponentButton />
                <p className="mainTitle">Quests</p>
                <button className="fillerButton" />
            </div>

            <div className="questBody">
                <ContentComponent buttonType= "questExcercise" 
                text= "Beginner Exercise" value = "100" onClick={() => handleClick(100)} ></ContentComponent>

                <ContentComponent buttonType= "questExcercise" text= "Intermediate Exercise" value = "200"
                 onClick={() => handleClick(200)} ></ContentComponent>

                <ContentComponent buttonType= "questExcercise" 
                text= "Advanced Exercise" value = "300" onClick={() => handleClick(300)} ></ContentComponent>
            </div>
        </>
    );
};

export default QuestSelect;