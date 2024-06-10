import { useState } from "react";
import React from "react";
import Navbar from "./component/Navbar/Navbar";
import ContentComponent from "./UI/ContentComponent/ContentComponent";
import FormButton from "./UI/FormButton/FormButton";

function App() {
  return (
    <>
      <Navbar/>
      <ContentComponent/>
      <ContentComponent buttonType={"questList"} text={"Quest List"}/>
      <ContentComponent buttonType={"otherHome"} text={"Ongoing Quests"}/>
    </>
  );
}

export default App;
