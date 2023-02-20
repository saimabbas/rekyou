import React from "react";
import Logo from "../assets/img/logo.png";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Budget = () => {
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
            <h3>Budget et planning</h3>
          </div>
          <div className="mc-grid">
            <div className="budget-card">
              <div className="bud-head">
                <h4>Dépenses</h4>
                <h6>866 €</h6>
              </div>
              <p> Budget total : 1 732 €</p>
              <div className="bud-prog">
                <div className="inner-bud-prog"></div>
              </div>
            </div>
            <div className="budget-card bud-card-2">
              <div className="bud-head">
                <h4>Planning</h4>
                <h6>3 mois, 20j</h6>
              </div>
              <p>Livraison : 12/01/2023</p>
              <div className="bud-prog">
                <div className="inner-bud-prog"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FOOTER  */}
      <Footer />
    </div>
  );
};

export default Budget;
