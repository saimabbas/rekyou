import React from "react";
import Logo from "../assets/img/logo.png";
import { MdAdd, MdFacebook } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      {/* FOOTER  */}
      <footer>
        <div className="box">
          <div className="footerbox">
            <div className="footerimg">
              <img src={Logo} alt="" />
            </div>
            <div className="footer-icons">
              <div className="fsocial">
                {/* <MdFacebook /> */}
                <FaFacebookSquare />
                <BsInstagram />
              </div>
              <div className="flang">
                <p>EN</p>
                <p>FR</p>
              </div>
            </div>
            <div className="footer-content">
              <h6>Blog</h6>
              <h6>Aide et assistance</h6>
              <h6>Politique des donnees RGPD</h6>
              <h6>Gerer mes cookies</h6>
            </div>
          </div>
          <h5>© 2023 - RekYou. Tous droits reserves.</h5>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
