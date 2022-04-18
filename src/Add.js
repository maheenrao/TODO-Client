// import classes from "./tyles.module.css";
import React, { useState } from "react";
import MultipleInput from "./MultipleInput";

const authorization = "f2bc0c85-b373-468a-9fd3-d1a2f2782609";

const AddData = (props) => {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState();
  

  const descriptionHandler = (event) => {
    setdescription(event.target.value);
  };
  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const submit = (e) => {
    e.preventDefault();
    // props.titles(title);
    // props.addItems(description);
    setTitle("");
    setdescription("");

  

    const tii = { title: title, items: description};
    console.log(tii);
    fetch("http://localhost:3000/todos", {
      method: "POST",
      body: JSON.stringify(tii),
      headers: {
        "Content-type": "application/json",
        Authorization: authorization,
      },
    }).then(() => {
      // setTitle(tii.title);

      fetch("http://localhost:3000/todos", {
        headers: {
          contentType: "application/json",
          Authorization: authorization,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          props.addtitles(result.data);
          console.log(result.data);
        });
    });
  };

  return (
    <form onSubmit={submit}>

   
      <label>Title</label>
      <div>
        <input type="text" onChange={titleHandler} />
      </div>
      <label>Items</label>
      <div>
        <MultipleInput
          onChange={descriptionHandler}
          setItems={setdescription}
        />
        {/* <input type="text" onChange={descriptionHandler} /> */}
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddData;
