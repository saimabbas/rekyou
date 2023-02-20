import React from "react";
import Logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <div>
      {/* HEADER  */}
      <header>
        <div className="box">
          <div className="headerbox">
            <img src={Logo} alt="" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
