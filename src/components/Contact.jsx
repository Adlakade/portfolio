import React from "react";
import "../css/contact.css";
import Button from "./Button";

const Contact = () => {
  return (
    <>
      <div className="headingcontact" id="contact">
        <h1>Contant</h1>
      </div>
      <div className="form">
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
