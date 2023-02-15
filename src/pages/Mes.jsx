import React from "react";
import Logo from "../src/assets/img/logo.png";
import { MdAdd } from "react-icons/md";

const Mes = () => {
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
    </div>
  );
};

export default Mes;
