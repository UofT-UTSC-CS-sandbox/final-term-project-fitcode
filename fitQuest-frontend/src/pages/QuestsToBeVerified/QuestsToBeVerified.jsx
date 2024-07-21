import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ComponentButton from "../../UI/ComponentButton/ComponentButton";

import "./QuestsToBeVerified.css";
import ToastManager from "../../Toast/ToastManager";

const QuestsToBeVerified = () => {
  const navigate = useNavigate();
  const [allQuestsToBeVerified, setQuestsToBeVerified] = useState([]);
  const { toasts, showToast } = ToastManager();

  const getQuestsToBeVerified = async () => {
    try {
      const resp = await fetch(`/get_quests_to_be_verified`);
      const data = await resp.json();
      setQuestsToBeVerified(data.quests);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getQuestsToBeVerified();
  }, []);

  const completeQuest = async (curQuest) => {
    try {
      const resp = await fetch(`/complete_user_quest/${curQuest.quest_id}/`); 
      if (!resp.ok) {
        throw new Error("Network response was not ok");
      }
      const completedQuest = await resp.json();
      if (completedQuest.status === "success") {
        getQuestsToBeVerified();
        showToast(`${curQuest.name} verified`);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const cancelQuest = async (curQuest) => {
    try {
      const resp = await fetch(`/cancel_quest_verification/`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify({quest_id: curQuest.quest_id})
      });
      if (resp.status == 200) {
        showToast(`${curQuest.name} cancelled`);
        getQuestsToBeVerified();
      }
      else if (resp.status == 401) {
        showToast(`You need to be admin to perform this action`);
      }
      else {
        showToast(`Invalid quest id`);
      }
    } catch (e) {
      console.log(e);
    }
  }

  const showDifficulty = (points) =>
    points === 100 ? "easy" : points === 200 ? "medium" : "hard";

  return (
    <>
      <div className="titleSection">
        <ComponentButton onClick={() => navigate(-1)} />
        <p className="mainTitle">Quests to Be Verified</p>
        <button className="fillerButton" />
      </div>

      <div className="questBody">
        {allQuestsToBeVerified.map((curQuest) => {
          return (
            <ComponentButton
              key={curQuest.quest_id}
              buttonType="main ongoing"
              points={curQuest.points.toString()}
              text={curQuest.name + " - " + curQuest.username}
              difficulty={showDifficulty(curQuest.points)}
              onClickComplete={()=>completeQuest(curQuest)}
              onClickCancel={()=>cancelQuest(curQuest)}
            />
          );
        })}
      </div>
      {toasts}
    </>
  );
};

export default QuestsToBeVerified;
