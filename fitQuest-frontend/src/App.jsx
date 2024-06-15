import { useState } from "react";
import React from "react";

import Navbar from "./component/Navbar/Navbar";
import ContentComponent from "./UI/ContentComponent/ContentComponent";
import FormButton from "./UI/FormButton/FormButton";
import Login_Page from "./pages/login_pages/login_page";

function App() {
  return (
    <>
    <Login_Page></Login_Page>
      {/* <Navbar/>
      <ContentComponent/>
      <ContentComponent buttonType={"questList"} text={"Quest List"}/>
      <ContentComponent buttonType={"otherHome"} text={"Ongoing Quests"}/> */}
    </>
  );
}

export default App;
