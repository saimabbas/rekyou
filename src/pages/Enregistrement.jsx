import React from "react";
import Logo from "../assets/img/logo.png";
import { MdKeyboardArrowLeft, MdAdd } from "react-icons/md";

const Enregistrement = () => {
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
            <h3>Enregistrement</h3>
          </div>
          <div className="mc-grid mc-flex-box">
            <div className="lab-inp">
              <label htmlFor="inp1">Nom de la tâche</label>
              <input type="text" name="inp1" id="" placeholder="Rec Peur" />
            </div>
            <div className="lab-inp">
              <label htmlFor="inp2">Nombre de morceau*</label>
              <select name="sel1" id="sel1">
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
              </select>
            </div>
          </div>
          <button className="red-fill-btn">Valider</button>
        </div>
      </div>
    </div>
  );
};

export default Enregistrement;
