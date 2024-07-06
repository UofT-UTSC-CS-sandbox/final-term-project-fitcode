import { useEffect, useState } from "react";
import React from "react";
import Navbar from "../../component/Navbar/Navbar"
import ContentComponent from "../../UI/ContentComponent/ContentComponent";
import "./HomePage.css"

const HomePage = () => {
  return (
    <>
      <div className="row">
            <div className="column">
              <a href="/select" style={{textDecoration: "none", cursor: "pointer"}}>
                <ContentComponent buttonType={"questList"} text={"Quest List"}/>
                </a>
            </div>
            <div className="column">
                <ContentComponent buttonType={"otherHome"} text={"Ongoing Quests"}/>
                <ContentComponent buttonType={"otherHome"} text={"Completed Quests"} onClick={()=>{window.location.href="/completed_quests"}}/>
                <ContentComponent buttonType={"otherHome"} text={"Leaderboards"}/>
            </div>
        </div>
    </>
  );
}

export default HomePage;