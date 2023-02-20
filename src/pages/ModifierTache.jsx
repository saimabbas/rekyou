import React from "react";
import Logo from "../assets/img/logo.png";
import { MdKeyboardArrowLeft, MdAdd } from "react-icons/md";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const ModifierTache = () => (
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
          <h3>Modifier la tâche</h3>
        </div>
        <div className="mc-grid mc-flex-box">
          <div className="lab-inp">
            <label htmlFor="inp1">Nom de la tâche</label>
            <input type="text" name="inp1" id="" placeholder="Enregistrement" />
          </div>
        </div>
        <button className="red-fill-btn">Valider</button>
        <h5 className="danger-text">Supprimer le projet</h5>
      </div>
    </div>
    {/* FOOTER  */}
    <Footer />
  </div>
);

export default ModifierTache;
