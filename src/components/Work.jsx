import React from "react";
import "../css/work.css";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Work = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="headingwork" id="work">
        <h1>Work</h1>
      </div>
      <div className="imagework">
        <div className="work"data-aos="fade-down">
          <img src="../src/assets/images/work1.jpg" alt="" />
        </div>
        <div className="work"data-aos="fade-down">
          <img src="../src/assets/images/work2.jpg" alt="" />
        </div>
        <div className="work"data-aos="fade-down">
          <img src="../src/assets/images/work3.jpg" alt="" />
        </div>
        <div className="work"data-aos="fade-down">
          <img src="../src/assets/images/work4.jpg" alt="" />
        </div>
        <div className="work"data-aos="fade-down">
          <img src="../src/assets/images/work5.jpg" alt="" />
        </div>
        <div className="work"data-aos="fade-down">
          <img src="../src/assets/images/work6.jpg" alt="" />
        </div>
      </div>
    </>
  );
};

export default Work;
