import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import FriendForm from "./components/FriendForm"
import Friends from "./components/Friends"

function App() {
  const [friends, setFriends] = useState([
    {
      name: 'Boba Fett',
      email: 'bobafett@bountyhunters.com',
      role: 'Bounty Hunter'
    }
  ]);


  const addNewFriend = friend => {
    const newFriend = {
      name: friend.name,
      email: friend.email,
      role: friend.role
    };

    setFriends([...friends, newFriend])
  }


  return (
    <div className="App">
      <h1>Join The Team!</h1>

      <FriendForm addNewFriend={addNewFriend}/>
      <Friends friends={friends} />

    </div>
  );
}

export default App;
