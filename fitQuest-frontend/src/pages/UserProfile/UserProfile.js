import React, { useEffect, useState } from "react";

import "./UserProfile.css";
import Navbar from "../../component/Navbar/Navbar";
import ComponentButton from "../../UI/ComponentButton/ComponentButton";


const UserProfile = () => {

  const [username, setUsername] = useState("default")
  const [points, setPoints] = useState(0)

  useEffect( () => {

    const getProfileData = async () => {
      try {
        const response = await fetch("/profile_data")
        const profile_data = await response.json()
        setUsername(profile_data.username)
        setPoints(profile_data.points)
        console.log(profile_data);
      }
      catch (err) {
        console.log(err)
      }
    }
    getProfileData()
  })

  const exampleInfo = { Username: username, Points: points };

  return (
    <>
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
