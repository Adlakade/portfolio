import React from "react";
import "../css/navbar.css";

const Dropdown = () => {
  return (
    <div>
      <div className="dropdown">
        <div className="anchor">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#skills">Skill</a>
          <a href="#contant">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
