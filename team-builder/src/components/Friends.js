import React from "react";

const Friends = props => {
    return (
        <div className="friend-list">
            {props.friends.map(friend=> (
                <div className="friend">
                    <h2>Name: {friend.name}</h2>
                    <p>Email: {friend.email}</p>
                    <p>Role: {friend.role}</p>
                </div>
            ))}
        </div>
    ) }

export default Friends