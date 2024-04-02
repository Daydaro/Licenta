import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <NavLink to="/" className="logo">
        Licenta
      </NavLink>
      <div className="header-right">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Previziune
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Istoric
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Contact
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Despre
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          LogIn
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
