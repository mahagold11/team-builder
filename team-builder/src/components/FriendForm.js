import React, { useState } from "react";

const FriendName = props => {

    const [friend, setFriend] = useState({
        name: ""
    })

    const handleChanges = event => {
        console.log("event", event.target.value);
        console.log("name", event.target.name);

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
            <label htmlFor ="title"></label>
            <input
                type="text"
                placeholder="be my friend"
                name="name"
                value={friend.name}
                onChange={handleChanges}
            />
        </form>
    );
};

export default FriendName;