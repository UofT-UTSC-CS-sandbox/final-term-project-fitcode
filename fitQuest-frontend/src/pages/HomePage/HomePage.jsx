import { useEffect, useState } from "react";
import React from "react";
import Navbar from "../../component/Navbar/Navbar"
import ContentComponent from "../../UI/ContentComponent/ContentComponent";
import "./HomePage.css"
import { useNavigate } from "react-router-dom";

const HomePage = () => {

  const navigate = useNavigate();

    const handleOngoingQuestsClick = () =>{
    getOngoingQuests();
  };

  return (
    <>
      <div className="row">
            <div className="column">
              <a href="/select" style={{textDecoration: "none", cursor: "pointer"}}>
                <ContentComponent buttonType={"questList"} text={"Quest List"}/>
                </a>
            </div>
            <div className="column">
              <a href="/ongoing_quests" style={{textDecoration: "none", cursor: "pointer"}}>
                <ContentComponent buttonType={"otherHome"} text={"Ongoing Quests"} />
              </a>
                <ContentComponent buttonType={"otherHome"} text={"PvP"}/>
                <ContentComponent buttonType={"otherHome"} text={"Leaderboards"}/>
            </div>
        </div>
    </>
  );
}

export default HomePage;