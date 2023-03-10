import React from "react";
import ReactDOM from "react-dom/client";
import "./css/style.css";
import Links from "./pages/Links";
import { BrowserRouter } from "react-router-dom";
import EPLithoTache from "./pages/EPLithoTache";
import MesProjets from "./pages/MesProjets";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
