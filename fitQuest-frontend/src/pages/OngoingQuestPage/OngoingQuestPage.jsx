import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ComponentButton from "../../UI/ComponentButton/ComponentButton";

import "../UserProfile/UserProfile.css";
import "./OngoingQuestPage.css";
import ToastManager from "../../Toast/ToastManager";

const OngoingQuests = () => {
  const navigate = useNavigate();
  const [allOngoingQuests, setOngoingQuests] = useState([]);
  const { toasts, showToast } = ToastManager();
  useEffect(() => {
    const getOngoingQuests = async () => {
      try {
        const resp = await fetch(`/ongoing_quest_list`);
        const allOngoingQuests = await resp.json();
        setOngoingQuests(allOngoingQuests);
      } catch (e) {
        console.log(e);
      }
    };
    getOngoingQuests();
  }, []);

  const cancelUserQuest = async (curQuest) => {
    try {
      const resp = await fetch(`/cancel_ongoing_quest/${curQuest.quest_id}`);
      const cancelledQuest = await resp.json();
      if (cancelledQuest.status === "success") {
        setOngoingQuests(
          allOngoingQuests.filter(
            (quest) => quest.quest_id !== curQuest.quest_id
          )
        );
        showToast(`${curQuest.name} cancelled`);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const handleClick = (curQuest) => () => {
    window.location.href = "/quest_verification/" + curQuest.quest_id
  };

  const handleClick2 = (curQuest) => () => {
    // wrap onCLick function so we can pass it to our buttons
    cancelUserQuest(curQuest);
  };

  return (
    <>
      <div className="titleSection">
        <ComponentButton onClick={() => navigate(-1)} />
        <p className="mainTitle">Ongoing Quests</p>
        <button className="fillerButton" />
      </div>

      <div className="questBody">
        {allOngoingQuests.map((curQuest) => {
          return (
            <ComponentButton
              key={curQuest.quest_id}
              buttonType="main ongoing"
              points={curQuest.points.toString()}
              text={curQuest.name}
              difficulty={"easy"}
              onClickComplete={handleClick(curQuest)}
              onClickCancel={handleClick2(curQuest)}
            />
          );
        })}
      </div>
      {toasts}
    </>
  );
};

export default OngoingQuests;
