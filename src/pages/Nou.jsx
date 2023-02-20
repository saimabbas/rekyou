import React from "react";
import Logo from "../assets/img/logo.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Nou = () => {
  return (
    <div className="approkyou">
      {/* HEADER  */}
      <Header />
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
            <h3>Nouveau projet</h3>
          </div>
          <div className="mc-grid">
            <input
              type="text"
              name=""
              id=""
              placeholder="Créer un projet avec Lara"
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Créer un projet avec Lara"
            />
          </div>
        </div>
      </div>
      {/* FOOTER  */}
      <Footer />
    </div>
  );
};

export default Nou;
