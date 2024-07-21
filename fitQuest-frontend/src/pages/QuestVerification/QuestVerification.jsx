import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ComponentButton from "../../UI/ComponentButton/ComponentButton";

import "./QuestVerification.css";
import ToastManager from "../../Toast/ToastManager";
import QuestVerificationButton from "../../UI/QuestButton/QuestVerificationButton";

const QuestVerification = () => {
  const navigate = useNavigate();
  const [questInfo, setQuestInfo] = useState({});
  const { toasts, showToast } = ToastManager();
  const {id} = useParams()
  const getQuestInfo = async () => {
    try {
      const resp = await fetch(`/get_quest_info?quest_id=${id}`);
      const data = await resp.json();
      setQuestInfo(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getQuestInfo();
  }, []);

  const completeQuest = async () => {
    try {
      const resp = await fetch(`/send_quest_to_verify/${questInfo.quest_id}`); 
      if (!resp.ok) {
        throw new Error("Network response was not ok");
      }
      const completedQuest = await resp.json();
      if (resp.status === 200) {
        showToast(`${questInfo.name} sent to verification`);
        window.location.href = "/quests_to_be_verified"
      }
    } catch (e) {
      console.log(e);
    }
  };


  const handleClick = () => {
    // wrap onCLick function so we can pass it to our buttons
    completeQuest(questInfo);
  };

  return (
    <>
      <div className="titleSection">
        <ComponentButton onClick={() => navigate(-1)} />
        <p className="mainTitle">Quest Verification</p>
        <button className="fillerButton" />
      </div>

      <div className="questBody">
        
        <QuestVerificationButton
          onClick={handleClick}
          points={questInfo.points}
          questName={questInfo.name}
        ></QuestVerificationButton>
          
      </div>
      {toasts}
    </>
  );
};

export default QuestVerification;
