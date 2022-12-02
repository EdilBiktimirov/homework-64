import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand navbar-dark bg-secondary p-2">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link me-5" to="/">My blog</Link>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/new-post">Add</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;