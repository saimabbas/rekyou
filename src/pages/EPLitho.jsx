import React from "react";
import Logo from "../assets/img/logo.png";
import { MdKeyboardArrowLeft, MdAdd } from "react-icons/md";

const EPLitho = () => {
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
            <p>Modifier le projet</p>
          </div>
          <div className="mc-heading">
            <h3>EP Lithopédion</h3>
          </div>
          <div className="mc-grid">
            <input
              type="text"
              name=""
              id=""
              placeholder="Budget et rétroplanning"
            />
          </div>
        </div>
        <div className="main-content mc-cont-2">
          <div className="mc-heading">
            <h3>Tâches</h3>
            <span>
              Ajouter <MdAdd />
            </span>
          </div>
          <div className="mc-grid">
            <div className="mcg-box">
              <div className="mcg-num">
                <p>Enregistrement</p>
                <span>2/10</span>
              </div>
              <div className="mcg-prog">
                <div className="mcg-inner-prog"></div>
              </div>
            </div>
            <div className="mcg-box">
              <div className="mcg-num">
                <p>Mixage</p>
                <span>0/5</span>
              </div>
              <div className="mcg-prog">
                <div className="mcg-inner-prog unfill"></div>
              </div>
            </div>
            <div className="mcg-box">
              <div className="mcg-num">
                <p>Mastering</p>
                <span>0/5</span>
              </div>
              <div className="mcg-prog">
                <div className="mcg-inner-prog unfill"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="mc-heading">
            <h3>Pour aller plus loin</h3>
            <span>
              Ajouter <MdAdd />
            </span>
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

export default EPLitho;
