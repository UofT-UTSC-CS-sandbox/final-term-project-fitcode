import React, { useState } from "react";

import Navbar from "./component/Navbar/Navbar";
import ContentComponent from "./UI/ContentComponent/ContentComponent";
import FormButton from "./UI/FormButton/FormButton";
import UserProfile from "./pages/UserProfile/UserProfile";
import HomePage from "./pages/HomePage/HomePage";

import { Route, Routes } from "react-router-dom";
import WorkoutSelection from "./pages/WorkoutSelection/WorkoutSelection";
import QuestSelect from "./pages/QuestSelect/QuestSelect";

import { PopupProvider } from "./UI/PopUp/PopUpContext";
function App() {
  return (
    <PopupProvider>
    <Routes>
      <Route element={<Navbar/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/profile" element={<UserProfile/>}/>
        <Route path="/quests" element={<QuestSelect/>}/>
        <Route path="/select" element={<WorkoutSelection/>}/>
      </Route>
    </Routes>
    </PopupProvider>
  );
}

export default App;
