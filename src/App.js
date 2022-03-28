import React, { useState, useEffect } from "react";
import "./App.css";
import Add from "./Add";
import List from "./List";

const authorization = "f2bc0c85-b373-468a-9fd3-d1a2f2782609";

function App() {
  const [addData, setAddData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos", {
      headers: {
        contentType: "application/json",
        Authorization: authorization,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setAddData(result.data);
      });
  }, []);

  const addUsers = (todos) => {
    fetch("http://localhost:3000/todos", {
      method: "POST",
      body: JSON.stringify(todos),
      headers: {
        "Content-type": "application/json",
        Authorization: authorization,
      },
    })
      .then((response) => {
        response.json();
        console.log(response);
      })
      .then(() => {
        console.log();
        setAddData((prevUser) => {
          return [...prevUser, { title: todos, id: Math.random().toString() }];
        });
      });
  };
  const removeHandler = (todosId) => {
    fetch(`http://localhost:3000/todos/${todosId}`, {
      method: "DELETE",
      headers: {
        accept: "application/json",
        "Content-type": "application/json",
        Authorization: authorization,
      },
    }).then((response) => {
      setAddData((prevtitle) =>
        prevtitle.filter((title) => title.id !== todosId)
      );
    });
  };

  return (
    <div className="App">
      <h1> Add Todo</h1>

      <Add users={addUsers} />
      <List newUsers={addData} onRemove={removeHandler} />
    </div>
  );
}

export default App;
