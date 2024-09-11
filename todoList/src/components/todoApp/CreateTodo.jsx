// eslint-disable-next-line no-unused-vars
import React, { Fragment } from "react";
import { v4 as uuidv4 } from "uuid";
const CreateTodo = ({ setTodos, todos }) => {
  function handleTodo(e) {
    setTodos({ ...todos, text: e.target.value });
  }
 function todoSubmit(e) {
    e.preventDefault();
    console.log(todos);
    let newTodo = {
      id: uuidv4(),
      // eslint-disable-next-line react/prop-types
      text: todos.text,
    };
    // eslint-disable-next-line react/prop-types
    todos.allTodos.push(newTodo);
    setTodos({ text: "", allTodos: [...todos.allTodos] });
  }
  return (
    <Fragment>
      <form id="todoForm">
        <input
          type="text"
          placeholder="enter todo..."
          onChange={handleTodo}
          value={todos.text}
        />
        <button onClick={todoSubmit}>{todos.toggle ? "Edit" : "Add"}</button>
      </form>
    </Fragment>
  );
};

export default CreateTodo;
