import React from "react";
import "../css/about.css";
import image from "../assets/coder.png";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const About = () => {

    useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);


  return (
    <div>
      <div className="about" id="about">
        <h1>About</h1>
        <div className="photopara">
          <div className="photo " data-aos="zoom-in" >
            <img  src={image} alt="" />
          </div>
          <div className="para" data-aos="fade-down" >
            <h2>I am Aditya</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
              eveniet repellat dolorum dolore deleniti? Sunt perspiciatis
              tempora sed enim, id at perferendis deserunt cumque repellendus
              quam alias possimus facilis veniam?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
