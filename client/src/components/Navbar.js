import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navba navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Todo List
        </Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navba-item">
              <Link to="/" className="nav-link">
                Todos
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Create a Todo
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Create User
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
