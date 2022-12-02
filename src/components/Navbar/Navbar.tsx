import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><Link to="/">My blog</Link></li>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/new-post">Add</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contacts">Contacts</NavLink></li>
      </ul>
    </div>
  );
};

export default Navbar;