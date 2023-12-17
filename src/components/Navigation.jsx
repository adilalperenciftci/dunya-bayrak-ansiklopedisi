import React from "react";
import { NavLink } from "react-router-dom";
import "../CSS/navigation.css";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        {/* NavLink bileşenlerini li etiketleri içine yerleştir */}
        <li>
          <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
