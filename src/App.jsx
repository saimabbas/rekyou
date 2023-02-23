import React from "react";
import { BrowserRouter as Switch, Route, Routes } from "react-router-dom";
import Links from "./pages/Links";
import Ajouter from "./pages/Ajouter";
import Budget from "./pages/Budget";
import Distribution from "./pages/Distribution";
import Enregistrement from "./pages/Enregistrement";
import Enregistrement1 from "./pages/Enregistrement1";
import EPLitho from "./pages/EPLitho";
import Mes from "./pages/Mes";
import Modifier from "./pages/Modifier";
import ModifierTache from "./pages/ModifierTache";
import Nou from "./pages/Nou";
import NouLibre from "./pages/NouLibre";
import SupprimerTache from "./pages/SupprimerTache";
import Supprimer from "./pages/Supprimer";
import Tache from "./pages/Tache";
import { HashRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Switch>
        <Routes>
          <Route exact path="/" element={<Links />} />
          <Route path="/ajouter" element={<Ajouter />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/distribution" element={<Distribution />} />
          <Route path="/enregistrement" element={<Enregistrement />} />
          <Route path="/enregistrement1" element={<Enregistrement1 />} />
          <Route path="/eplitho" element={<EPLitho />} />
          <Route path="/mes" element={<Mes />} />
          <Route path="/modifier" element={<Modifier />} />
          <Route path="/modifiertache" element={<ModifierTache />} />
          <Route path="/nou" element={<Nou />} />
          <Route path="/noulibre" element={<NouLibre />} />
          <Route path="/supprimer" element={<Supprimer />} />
          <Route path="/supprimertache" element={<SupprimerTache />} />
          <Route path="/tache" element={<Tache />} />
        </Routes>
      </Switch>
    </div>
  );
};

export default App;
