import React from "react";
import { MdAdd, MdFacebook } from "react-icons/md";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

const MesProjets = () => {
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
          <div className="aucun-box">
            <p>Aucun projet en cours</p>
            <button className="outline-btn">Ajouter une tâche</button>
          </div>
        </div>
      </div>
      {/* FOOTER  */}
      <Footer />
    </div>
  );
};

export default MesProjets;
