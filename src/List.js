import React from "react";

const UserList = (props) => {
  return (
    <div>
      <ul>
        {props.newUsers.map((newlist) => (
          <li key={newlist.id} onClick={props.onRemove.bind(this, newlist.id)}>
            {newlist.title} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
