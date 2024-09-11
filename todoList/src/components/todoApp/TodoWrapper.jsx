// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import CreateTodo from "./CreateTodo";
import Todos from "./Todos";
import { v4 as uuidv4 } from "uuid";

const TodoWrapper = () => {
  let [todos, setTodos] = useState({
    id: uuidv4(),
    text: "",
    allTodos: [{ id: 1, text: "Hello World" }],
    toggle:false
  });

  function deleteTodo(id) {
    console.log(id);
    let filteredTodo = todos.allTodos.filter((todo) => {
      return todo.id !== id;
    });
    console.log(filteredTodo);
    setTodos({
      id: "",
      text: "",
      allTodos: filteredTodo,
    });
  }

  function editTodo(id) {
    console.log(id);
    let filteredTodo = todos.allTodos.filter((todo) => {
      return todo.id !== id;
    });
    let updateTodo = todos.allTodos.find((todo) => {
      return todo.id === id;
    });

    setTodos({
      id: updateTodo.id,
      text: updateTodo.text,
      allTodos: filteredTodo,
      toggle:true
    });
  }

  return (
    <div id="todoWrapper">
      <CreateTodo setTodos={setTodos} todos={todos} />
      <Todos
        allTodos={todos.allTodos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default TodoWrapper;
