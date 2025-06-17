import React from "react";
import "../css/contact.css";
import Button from "./Button";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Contact = () => {
    useEffect(() => {
      AOS.init({ duration: 2000 });
    }, []);
  return (
    <>
      <div className="headingcontact" id="contact">
        <h1>Contant</h1>
      </div>
      <div className="form"data-aos="zoom-in">
        <form action="">
          <input type="text" placeholder="Name" /> <br />
          <input type="email" placeholder="Email" /> <br />
          <textarea name="" id="" placeholder="note"></textarea> <br /> <br /> <br />
          <Button btnname={"submit"} />
        </form>
      </div>
    </>
  );
};

export default Contact;
