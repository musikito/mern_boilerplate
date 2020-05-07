import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import CreateUser from "./components/CreateUser";
import EditTodo from "./components/EditTodo";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Route path="/" exact component={TodoList} />
      <Route path="/edit/:id" component={EditTodo} />
      <Route path="/create" component={CreateTodo} />
      <Route path="/user" component={CreateUser} />
    </Router>
  );
}

export default App;
