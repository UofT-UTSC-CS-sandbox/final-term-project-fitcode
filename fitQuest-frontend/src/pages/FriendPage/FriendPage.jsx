import React, { useEffect, useState, useRef } from "react";
import { json, useNavigate } from "react-router-dom";
import ComponentButton from "../../UI/ComponentButton/ComponentButton";

import "../UserProfile/UserProfile.css";
import "./FriendPage.css";
import ToastManager from "../../Toast/ToastManager";

const FriendList = () => {
  const navigate = useNavigate();
  const [allFriends, setFriends] = useState([]);
  const [byPoints, setByPoints] = useState(true);
  const { toasts, showToast } = ToastManager();

  const inputRef = useRef(null);

  const getFriends = async () => {
    try {
      const resp = await fetch(`/get_friend`);
      const allFriends = await resp.json();
      setFriends(allFriends);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchUsername = inputRef.current.value;
    onSearch(searchUsername);
  };

  const onSearch = async (searchUsername) => {
    console.log("CSRF Token:", csrftoken);
    console.log(searchUsername);
    try {
      const resp = await fetch("/add_friend/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrftoken,
        },
        body: JSON.stringify({ username: searchUsername }),
      });

      const message = await resp.json();

      console.log(message.message);
      showToast(message.message); //Toast response from server
      if (message.message == "Added Friend") {
        getFriends(); //Query for all friends again, theres a better way but...
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onDelete = async (friend_name) => {
    console.log("CSRF Token:", csrftoken);
    console.log(friend_name);
    try {
      const resp = await fetch("/remove_friend/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRFToken": csrftoken,
        },
        body: JSON.stringify({ username: friend_name }),
      });

      const message = await resp.json();

      console.log(message.message);
      if (message.message == "Friend Deleted") {
        showToast(message.message); //Toast response from server
        getFriends(); //Query for all friends again, theres a better way but...
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = (username) => () => {
    // wrap onCLick function so we can pass it to our buttons
    onDelete(username);
  };

  useEffect(() => {
    getFriends();
  }, []);

  useEffect(() => {
    if (byPoints) {
      const newFriends = [...allFriends];
      newFriends.sort((a, b) => b.points - a.points);
      setFriends(newFriends);
    } else {
      const newFriends = [...allFriends];
      newFriends.sort((a, b) => a.friend_name.localeCompare(b.friend_name));
      setFriends(newFriends);
    }
  }, [byPoints]);

  return (
    <>
      <div className="titleSection">
        <ComponentButton onClick={() => navigate(-1)} />
        <p className="mainTitle">Friend List</p>
        <ComponentButton
          text={byPoints ? "Points" : "Name"}
          onClick={() => setByPoints((cur) => !cur)}
        />
      </div>

      <div className="questBody">
        <form onSubmit={handleSubmit}>
          <input
            className="search"
            type="text"
            placeholder="Add Friend"
            ref={inputRef}
          />
        </form>
      </div>

      <div className="questBody">
        {allFriends.map((friend) => {
          return (
            <ComponentButton
              key={friend.friend_name}
              buttonType="main friend"
              text={friend.friend_name}
              points={friend.points.toString()}
              difficulty={friend.curuser ? "medium" : "easy"}
              onClickComplete={handleClick(friend.friend_name)}
            />
          );
        })}
      </div>
      {toasts}
    </>
  );
};

export default FriendList;
