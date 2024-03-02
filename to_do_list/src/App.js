import React, { useState } from "react";
import "./App.css";

function App() {
  let [todolist, setTodolist] = useState([]);

  let saveToDoList = (event) => {
    let entry = event.target.entry.value;
    if (!todolist.includes(entry)) {
      let finalToDoList = [...todolist, entry]; // array spreading
      setTodolist(finalToDoList);
    } else {
      alert("Entry already exists!");
    }

    event.preventDefault();
  };

  let list = todolist.map((value, index) => {
    return (
      <ToDoListitems
        key={index}
        value={value}
        indexnumber={index}
        todolist={todolist}
        setTodolist={setTodolist}
      />
    );
  });

  return (
    <div className="main">
      <div className="todo">
        <h1>TO-DO</h1>
        <div>
          <form onSubmit={saveToDoList}>
            <input type="text" name="entry" />
            <button>Save</button>
          </form>
        </div>
      </div>
      {list}
    </div>
  );
}

export default App;

function ToDoListitems({ value, indexnumber, todolist, setTodolist }) {
  const [status, setStatus] = useState(false);  // currently empty entry

  const completed = () => {
    setStatus(!status);    
  };

  const deleterow = () => {
    const finaldata = todolist.filter((v, i) => i !== indexnumber);
    setTodolist(finaldata);
  };

  return (
    <div className="outerdiv">
      <ul>
        <li className={status ? "completetodo" : ""} onClick={completed}>
          {value} <span onClick={deleterow}>&times;</span>
        </li>
      </ul>
    </div>
  );
}
