import React, { useState } from "react";

const AddUsers = (props) => {

  const [title, setTitle] = useState([]);


  const titleHandler = (event) => {
    setTitle(event.target.value);
  };

  const submit = (event) => {
    event.preventDefault();

    props.users(title);
    setTitle("");
    
   
  };
 

  return (
    <form onSubmit={submit}>
      <label>Title</label>
      <div>
        <input type="text" onChange={titleHandler} value={title} />
      </div>
      
    
      <button>Add</button>
    </form>
  );
};

export default AddUsers;
