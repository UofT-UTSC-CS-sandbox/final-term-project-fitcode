import React, { useState } from "react";

import Navbar from "./component/Navbar/Navbar";
import ContentComponent from "./UI/ContentComponent/ContentComponent";
import FormButton from "./UI/FormButton/FormButton";
import UserProfile from "./pages/UserProfile/UserProfile";
import HomePage from "./pages/HomePage/HomePage";

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<Navbar/>}>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/profile" element={<UserProfile/>}/>
      </Route>
      
    </Routes>
  );
}

export default App;
