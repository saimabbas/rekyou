import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="links-page">
      <Link to="/home">
        1. <span>Home</span>
      </Link>
      <Link to="/homedark">
        2. <span>Home Dark</span>
      </Link>
    </div>
  );
};

export default Links;
