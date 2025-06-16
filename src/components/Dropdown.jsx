import React from "react";
import "../css/navbar.css";

const Dropdown = () => {
  return (
    <div>
      <div className="dropdown">
        <div className="anchor">
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Work</a>
          <a href="">Skill</a>
          <a href="">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
