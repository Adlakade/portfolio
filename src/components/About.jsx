import React from "react";
import "../css/about.css";
import image from "../assets/coder.png";

const About = () => {
  return (
    <div>
      <div className="about" id="about">
        <h1>About</h1>
        <div className="photopara">
          <div className="photo ">
            <img  src={image} alt="" />
          </div>
          <div className="para">
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
