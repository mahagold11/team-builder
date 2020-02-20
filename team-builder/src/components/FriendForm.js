import React, { useState } from "react";

const FriendName = props => {

    const [friend, setFriend] = useState({
        name: "",
        email: "",
        role: ""
    })

    const handleChanges = event => {

        setFriend({...friend, [event.target.name]: event.target.value});
    }

    console.log("friend", friend);

    const submitForm = event => {
        console.log("submitting");
        event.preventDefault();
        props.addNewFriend(friend);
        setFriend({ name: ""})
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor ="name"></label>
            <input
                type="text"
                placeholder="name"
                name="name"
                value={friend.name}
                onChange={handleChanges}
            />
            <label htmlFor ="email"></label>
            <input
                type="text"
                placeholder="email"
                name="email"
                value={friend.email}
                onChange={handleChanges}
            />
            <label htmlFor ="role"></label>
            <input
                type="text"
                placeholder="role"
                name="role"
                value={friend.role}
                onChange={handleChanges}
            />
            <button type="submit">JOIN</button>
        </form>
    );
};

export default FriendName;