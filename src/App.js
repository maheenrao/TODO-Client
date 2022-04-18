import React, { useState, useEffect } from "react";
import "./App.css";
import Add from "./Add";
import List from "./List";


const authorization = "f2bc0c85-b373-468a-9fd3-d1a2f2782609";

function App() {
  const [addData, setAddData] = useState([]);

  function itemsData(todolistId) {
    fetch(`http://localhost:3000/todos/${todolistId}/items`, {
      headers: {
        contentType: "application/json",
        Authorization: authorization,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setAddData(result.data);
        console.log(result.data);
      }, []);
  }

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
        console.log(result.data);
      });
  }, []);

  const addtitles = (title) => {
    setAddData((prevTitles) => {
      return [...prevTitles, { title: title, id: Math.random().toString() }];
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
    }).then(() => {
      setAddData((prevtitle) =>
        prevtitle.filter((title) => title.id !== todosId)
      );
    });
  };

  const removeHandlerr = (todolistId) => {
    fetch("http://localhost:3000/items", {
      method: "DELETE",
      headers: {
        accept: "application/json",
        "Content-type": "application/json",
        Authorization: authorization,
      },
    }).then(() => {
      setAddData((preItems) =>
        preItems.filter((items) => items.id !== todolistId)
      );
    });
    console.log(todolistId);
  };

  return (
    <div className="App">
      <h1> Add Todo</h1>

      <Add
        titles={addtitles}
        // addItems={addDescription}
        addtitles={setAddData}
      />
     

      <List
        newList={addData}
        items={itemsData}
        onRemove={removeHandler}
        onListRemove={removeHandlerr}
      />
    </div>
  );
}

export default App;
