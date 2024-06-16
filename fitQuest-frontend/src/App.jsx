import React, { useState } from "react";

import Navbar from "./component/Navbar/Navbar";
import ContentComponent from "./UI/ContentComponent/ContentComponent";
import FormButton from "./UI/FormButton/FormButton";
import UserProfile from "./pages/UserProfile/UserProfile";
import { Route, Routes } from "react-router-dom";
import WorkoutSelection from "./pages/WorkoutSelection/WorkoutSelection";
import QuestSelect from "./pages/QuestSelect/QuestSelect";
function App() {
  return (
    <Routes>
      <Route path="/profile" element={<UserProfile/>}/>
    </Routes>
  );
}

export default App;
