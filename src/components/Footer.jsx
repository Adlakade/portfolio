import React from "react";
import "../ css/footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="headingfooter">
          <h1>Aditya</h1>
        </div>
        <div className="footericon">
          <FaFacebookF />
          <FaInstagram />
          <FaXTwitter />
        </div>
        <div className="footertext">
          <p>asasasaassas</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
