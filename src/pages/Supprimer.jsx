import React from "react";
import Logo from "../assets/img/logo.png";
import { MdKeyboardArrowLeft, MdAdd } from "react-icons/md";

const Supprimer = () => {
  return (
    <div className="approkyou">
      {/* HEADER  */}
      <header>
        <div className="headerbox">
          <img src={Logo} alt="" />
        </div>
      </header>
      {/* MAIN CONTENT  */}
      <div className="box">
        <div className="main-content">
          <div className="mc-back">
            <span>
              <MdKeyboardArrowLeft />
              Retour
            </span>
          </div>
          <div className="mc-heading">
            <h3>Supprimer le projet</h3>
          </div>
          <div className="mc-text-btn">
            <p>
              Êtes-vous sûr de vouloir supprimer le projet ? vous ne pourrez
              plus jamais y accéder
            </p>
            <button className="red-fill-btn">Oui, supprimer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Supprimer;
