import React, { useState } from "react";

let globalid = 0;

function App() {
  const [todo, settodo] = useState([]);
  const [task, settask] = useState("");

  function addtodo(event) {
    event.preventDefault();
    settodo((oldTodo) => {
      settask("");
      return [...oldTodo, { todo: task, id: globalid++ }];
    });
  }

  function deletetodo(itemID) {
    settodo((oldtodos) => oldtodos.filter((item) => item.id != itemID));
  }

  return (
    <div className="App">
      <h1>To-do app</h1>
      <form onSubmit={addtodo}>
        <input
          type="text"
          value={task}
          onChange={(event) => {
            settask(event.target.value);
          }}
        />
        <button type="submit">Click me</button>
      </form>
      <ul>
        {todo.map((item) => {
          return (
            <div key={item.id}>
              <li>
                {item.todo}
                {item.id}
              </li>
              <button onClick={() => deletetodo(item.id)}>Delete</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
