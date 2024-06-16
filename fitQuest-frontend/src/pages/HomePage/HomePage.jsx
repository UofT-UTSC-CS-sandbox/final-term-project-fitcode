import { useEffect, useState } from "react";
import React from "react";
import Navbar from "../../component/Navbar/Navbar"
import ContentComponent from "../../UI/ContentComponent/ContentComponent";
import "./HomePage.css"

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <div className="row">
            <div className="column">
                <ContentComponent buttonType={"questList"} text={"Quest List"}/>
            </div>
            <div className="column">
                <ContentComponent buttonType={"otherHome"} text={"Ongoing Quests"}/>
                <ContentComponent buttonType={"otherHome"} text={"PvP"}/>
                <ContentComponent buttonType={"otherHome"} text={"Leaderboards"}/>
            </div>
        </div>
    </>
  );
}

export default HomePage;