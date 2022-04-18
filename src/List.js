import React from "react";
import EditData from "./EditData";
const List = (props) => {
  return (
    <div>
      <ul>
        {props.newList.map((newlist) => (
          <li key={newlist.id}>
            <button onClick={props.onRemove.bind(this, newlist.id)}>
              Delete
            </button>
            <button onClick={props.onListRemove.bind(this, newlist.id)}>
              DELETE List
            </button>

            {/* <button
              key={onUpdate.id}
              onClick={props.onUpdate.bind(this, newlist.id)}
            >
              Edit
            </button> */}
            {newlist.title}
            {newlist.description}
            <button onClick={props.items.bind(this, newlist.id)}> List </button>
          </li>
        ))}
        {/* <EditData /> */}
      </ul>
    </div>
  );
};

export default List;
