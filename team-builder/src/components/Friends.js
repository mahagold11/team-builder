import React from "react";

const Friends = props => {
    return (
        <div className="friend-list">
            {props.friends.map(friend=> (
                <div className="friend">
                    <h3>{friend.name}</h3>
                </div>
            ))}
        </div>
    ) }

export default Friends