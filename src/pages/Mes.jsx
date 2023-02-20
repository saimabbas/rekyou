import React from "react";
import Logo from "../assets/img/logo.png";
import { MdAdd, MdFacebook } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const Mes = () => {
  return (
    <div className="approkyou">
      {/* HEADER  */}
      <Header />
      {/* MAIN CONTENT  */}
      <div className="box">
        <div className="main-content">
          <div className="mc-heading">
            <h3>Mes projets</h3>
            <span>
              Ajouter <MdAdd />
            </span>
          </div>
          <div className="mc-grid">
            <input type="text" name="" id="" placeholder="EP - Lithopédion" />
            <input
              type="text"
              name=""
              id=""
              placeholder="Album - Nom de l’album"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Album - Nom de l’album"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Album - Nom de l’album"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Album - Nom de l’album"
            />
          </div>
        </div>
      </div>
      {/* FOOTER  */}
      <Footer />
    </div>
  );
};

export default Mes;
