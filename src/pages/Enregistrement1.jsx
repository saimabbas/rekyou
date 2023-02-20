import React from "react";
import Logo from "../assets/img/logo.png";
import { MdKeyboardArrowLeft, MdAdd } from "react-icons/md";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Enregistrement1 = () => {
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
            <p>Modifier le projet</p>
          </div>
          <div className="mc-heading">
            <h3>Enregistrement du morceau 1</h3>
          </div>
          <div className="mc-grid mcg-labinp">
            <div className="lab-inp">
              <label htmlFor="inp2">Lieu/adresse</label>
              <input type="text" name="inp2" id="" placeholder="Aria Records" />
            </div>
            <div className="lab-inp">
              <label htmlFor="inp4">Date</label>
              <input
                type="date"
                name="inp4"
                id=""
                placeholder="Mercredi 12 octobre 2022"
              />
            </div>
            <div className="lab-inp">
              <label htmlFor="inp5">Coût</label>
              <input type="text" name="inp5" id="" placeholder="300€" />
            </div>
          </div>
          <div className="lab-inp">
            <label htmlFor="inp6">Note</label>
            <textarea name="inp6" id="" cols="30" rows="10"></textarea>
          </div>
          <div className="engre-last">
            <button className="red-fill-btn">Terminer la tâche</button>
            <h5 className="danger-text">Supprimer le projet</h5>
          </div>
        </div>
      </div>
      {/* FOOTER  */}
      <Footer />
    </div>
  );
};

export default Enregistrement1;
