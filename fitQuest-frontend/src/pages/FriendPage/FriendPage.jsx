import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ComponentButton from "../../UI/ComponentButton/ComponentButton";

import "../UserProfile/UserProfile.css";
import "./FriendPage.css";
import ToastManager from "../../Toast/ToastManager";

const FriendList = () => {
  const navigate = useNavigate();
  const [allFriends, setFriends] = useState([]);
  const { toasts, showToast } = ToastManager();
  useEffect(() => {
    const getFriends = async () => {
      try {
        const resp = await fetch(`/get_friend`);
        const allFriends = await resp.json();
        setFriends(allFriends);
      } catch (e) {
        console.log(e);
      }
    };
    getFriends();
  }, []);

  // const onClick = async (curQuest) => {
  //   try {
  //     console.log(curQuest.quest_id);
  //     const resp = await fetch(`/complete_user_quest/${curQuest.quest_id}/`); // will change into post later
  //     if (!resp.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const compeltedQuest = await resp.json();
  //     if (compeltedQuest.status === "success") {
  //       console.log(
  //         allOngoingQuests.filter(
  //           (quest) => quest.quest_id == curQuest.quest_id
  //         )
  //       );
  //       setOngoingQuests(
  //         allOngoingQuests.filter(
  //           (quest) => quest.quest_id !== curQuest.quest_id
  //         )
  //       ); //Filter Current Quest out of state so we remove from screen
  //       showToast(`${curQuest.name} completed`);
  //     }
  //     console.log("test");
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // const cancelUserQuest = async (curQuest) => {
  //   try {
  //     const resp = await fetch(`/cancel_ongoing_quest/${curQuest.quest_id}`);
  //     const cancelledQuest = await resp.json();
  //     if (cancelledQuest.status === "success") {
  //       setOngoingQuests(
  //         allOngoingQuests.filter(
  //           (quest) => quest.quest_id !== curQuest.quest_id
  //         )
  //       );
  //       showToast(`${curQuest.name} cancelled`);
  //     }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  // const handleClick = (curQuest) => () => {
  //   // wrap onCLick function so we can pass it to our buttons
  //   onClick(curQuest);
  // };

  // const handleClick2 = (curQuest) => () => {
  //   // wrap onCLick function so we can pass it to our buttons
  //   cancelUserQuest(curQuest);
  // };

  return (
    <>
      <div className="titleSection">
        <ComponentButton onClick={() => navigate(-1)} />
        <p className="mainTitle">Friend List</p>
        <button className="fillerButton" />
      </div>

      <div className="questBody">
        {allFriends.map((friend) => {
          return (
            <ComponentButton
              key={1}
              buttonType="main ongoing"
              points={100}
              text={friend.friend_name}
              difficulty={"easy"}
            />
          );
        })}
      </div>
      {toasts}
    </>
  );
};

export default FriendList;
