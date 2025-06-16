import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import "../css/home.css";
import Button from "./Button";
import image from "../assets/coder.png";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="text">
          <h1>
            <p>Hi,</p>
            <p>
              i'am <span className="text-sky-700">Aditya,</span>
            </p>
            <p>MERN Stack Devloper</p>
          </h1>
          <Button btnname={"Contact"} />
          <div className="icon">
            <div className="icon1"><CiLinkedin /></div>
            <div className="icon1"><FaGithub /></div>
            <div className="icon1"><FaGithub /></div>
          </div>
        </div>
        <div className="image">
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
