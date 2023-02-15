import React from "react";
import Logo from "../assets/img/logo.png";
import TuneCore from "../assets/img/TuneCore.png";
import DistroKid from "../assets/img/Distrokid.png";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Distribution = () => {
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
            <h3>Distribution</h3>
          </div>
          <div className="mc-grid distri-flex">
            <div className="distri-card">
              <img src={TuneCore} alt="" />
              <div className="distcard-text">
                <h6>Distribution</h6>
                <h3>TuneCore</h3>
                <p>
                  Un service indépendant de distribution, d'édition et de
                  licence de musique
                </p>
                <span>-20% sur ta distribution</span>
                <button className="distribtn">Profiter l’offre</button>
              </div>
            </div>
            <div className="distri-card">
              <img src={DistroKid} alt="" />
              <div className="distcard-text">
                <h6>Distribution</h6>
                <h3>distrokid</h3>
                <p>Un service indépendant de distribution de musique</p>
                <span>1 EP de 7 titres offerts</span>
                <button className="distribtn">Profiter l’offre</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Distribution;
