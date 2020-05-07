import React from "react";

function TodoList() {
  return (
    <>
      <h3>Todos</h3>
      <ul id="list" class="list">
        <li class="minus">
          Cash <span>-$400</span>
          <button class="delete-btn">x</button>
        </li>
      </ul>
    </>
  );
}

export default TodoList;
