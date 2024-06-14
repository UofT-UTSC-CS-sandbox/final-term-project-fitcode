import React from "react";

import "./UserProfile.css";
import Navbar from "../../component/Navbar/Navbar";
import ComponentButton from "../../UI/ComponentButton/ComponentButton";

const exampleInfo = { Username: "User123", Points: 5 };

const UserProfile = () => {
  return (
    <>
      <Navbar />
      <div className="titleSection">
        <ComponentButton />
        <p className="mainTitle">Profile</p>
        <button className="fillerButton" />
      </div>
      <div className="bodySection">
        {Object.keys(exampleInfo).map((cur) => {
          return (
            <div key={cur} className="bodyItem">
              <p className="items">{cur}</p>
              <p className="items">{exampleInfo[cur]}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UserProfile;
