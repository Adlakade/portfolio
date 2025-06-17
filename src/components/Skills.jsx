import React from "react";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import myimage from "../assets/images/work5.jpg";
import "../css/skills.css";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Skills = () => {

  
      useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);
  
  return (
    <>
      <div className="headingskills" id="skill">
        <h1 className>Skills</h1>
      </div>
      <div className="box ">
        <div className="box1">
          <h2>Profesional Skills</h2>
          <p>
            Lorem ipsum dlor sit, amet consectetur adipisicing elit. Velit optio
            id vero amet, alias architecto consectetur error eum eaque sit.
          </p>
          <div className="icons " data-aos="fade-down">
            <div className="iconskills">
              <FaHtml5 />
            </div>
            <div className="iconskills">
              <FaCss3Alt />
            </div>
            <div className="iconskills">
              <FaJsSquare />
            </div>
            <div className="iconskills">
              <FaReact />
            </div>
            <div className="iconskills">
              <FaNodeJs />
            </div>
            <div className="iconskills">
              <SiExpress />
            </div>

            <div className="iconskills">
              <BiLogoMongodb />
            </div>
          </div>
        </div>
        <div className="box2" data-aos="fade-down">
          <div className="image">
            <img src={myimage} alt="image" />
            {/* <img src="../src/assets/images/work5.jpg" alt="" /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
