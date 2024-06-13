import { useState } from "react";
import React from "react";

import Navbar from "./component/Navbar/Navbar";
import ContentComponent from "./UI/ContentComponent/ContentComponent";
import FormButton from "./UI/FormButton/FormButton";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/profile" element={null}/>
      <Route path="/quests" element={null}/>
    </Routes>
  );
}

export default App;
