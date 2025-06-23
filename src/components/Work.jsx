import React from "react";
import "../css/work.css";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import work1 from "../assets/images/work1.jpg";
import work2 from "../assets/images/work2.jpg";
import work3 from "../assets/images/work3.jpg";    
import work4 from "../assets/images/work4.jpg";
import work5 from "../assets/images/work5.jpg";
import work6 from "../assets/images/work6.jpg";

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
          <img src={work1} alt="" />
        </div>
        <div className="work"data-aos="fade-down">
          <img src={work2} alt="" />
        </div>
        <div className="work"data-aos="fade-down">
          <img src={work3} alt="" />
        </div>
        <div className="work"data-aos="fade-down">
          <img src={work4} alt="" />
        </div>
        <div className="work"data-aos="fade-down">
          <img src={work5} alt="" />
        </div>
        <div className="work"data-aos="fade-down">
          <img src={work6} alt="" />
        </div>
      </div>
    </>
  );
};

export default Work;
