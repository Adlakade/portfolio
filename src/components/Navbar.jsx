import React from "react";
import "../css/navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [click, setclick] = useState(false);
  return (
    <>
    
    <div className="navbar ">
      <div className="navbarName ">
        <h1>Aditya</h1>
      </div>

      <nav>
        <a href="#">Home</a>
        <a href="#centre1">About</a>
        <a href="#skill">Skills</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </nav>
       <div className="Hamburgericon">
        <button className="hambtn"
          onClick={() => {
            setclick(!click);
            console.log(click);
          }}
        >
          <GiHamburgerMenu />
        </button>
      </div> 
    </div>
      {click && <Dropdown />}
    </>
  );
};

export default Navbar;
