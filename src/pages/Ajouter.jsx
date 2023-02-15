import React from "react";
import Logo from "../assets/img/logo.png";
import { MdKeyboardArrowLeft, MdAdd } from "react-icons/md";

const Ajouter = () => {
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
            <h3>Ajouter une tâche</h3>
          </div>
          <div className="mc-grid">
            <input type="text" name="" id="" placeholder="Administration" />
            <input type="text" name="" id="" placeholder="Distribution" />
            <input type="text" name="" id="" placeholder="Promotion" />
            <input type="text" name="" id="" placeholder="Prestataire" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ajouter;
