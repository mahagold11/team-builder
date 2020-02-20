import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import FriendForm from "./components/FriendForm"
import Friends from "./components/Friends"

function App() {
  const [friends, setFriends] = useState([
    {
      name: 'Boba Fett'
    }
  ]);


  const addNewFriend = friend => {
    const newFriend = {
      name: friend.name
    };

    setFriends([...friends, newFriend])
  }


  return (
    <div className="App">
      <h1>My Friends</h1>

      <FriendForm addNewFriend={addNewFriend}/>
      <Friends friends={friends} />

    </div>
  );
}

export default App;
