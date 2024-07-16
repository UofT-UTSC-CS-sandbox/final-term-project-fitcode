import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ComponentButton from "../../UI/ComponentButton/ComponentButton";

import "./QuestsToBeVerified.css";
import ToastManager from "../../Toast/ToastManager";

const QuestsToBeVerified = () => {
  const navigate = useNavigate();
  const [allQuestsToBeVerified, setQuestsToBeVerified] = useState([]);
  const { toasts, showToast } = ToastManager();
  useEffect(() => {
    const getQuestsToBeVerified = async () => {
      // try {
      //   const resp = await fetch(`/ongoing_quest_list`);
      //   const questsToBeVerified = await resp.json();
      //   setQuestsToBeVerified(allQuestsToBeVerified);
      // } catch (e) {
      //   console.log(e);
      // }
    };
    getQuestsToBeVerified();
  }, []);

  // const onClick = async (curQuest) => {
  //   try {
  //     // const resp = await fetch(`/complete_user_quest/${curQuest.quest_id}/`); // will change into post later
  //     // if (!resp.ok) {
  //     //   throw new Error("Network response was not ok");
  //     // }
  //     const compeltedQuest = await resp.json();
  //     if (compeltedQuest.status === "success") {
  //       setOngoingQuests(
  //         allQuestsToBeVerified.filter(
  //           (quest) => quest.quest_id !== curQuest.quest_id
  //         )
  //       ); //Filter Current Quest out of state so we remove from screen
  //       showToast(`${curQuest.name} verified`);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const handleClick = (curQuest) => () => {
    // wrap onCLick function so we can pass it to our buttons
    onClick(curQuest);
  };

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
              buttonType="to be verified"
              points={curQuest.points.toString()}
              text={curQuest.name}
              difficulty={curQuest.difficulty}
              username={curQuest.username}
              onClickVerify={handleClick(curQuest)}
            />
          );
        })}
      </div>
      {toasts}
    </>
  );
};

export default QuestsToBeVerified;
