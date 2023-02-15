import React from "react";
import Logo from "../assets/img/logo.png";
import { MdKeyboardArrowLeft } from "react-icons/md";

const NouLibre = () => {
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
            <h3>Nouveau projet libre</h3>
          </div>
          <div className="mc-grid mc-flex-box">
            <div className="lab-inp">
              <label htmlFor="inp1">Nom du projet</label>
              <input
                type="text"
                name="inp1"
                id=""
                placeholder="Créer un projet avec Lara"
              />
            </div>
            <div className="lab-inp">
              <label htmlFor="inp2">Date de sortie</label>
              <input type="date" name="inp2" id="" placeholder="12/01/2023" />
            </div>
            <div className="lab-inp">
              <label htmlFor="inp3">Budget prévisionnel</label>
              <input type="text" name="inp3" id="" placeholder="1 463$" />
            </div>
          </div>
          <button className="red-fill-btn">Créer un projet</button>
        </div>
      </div>
    </div>
  );
};

export default NouLibre;
