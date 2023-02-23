import React from "react";
import {
  BrowserRouter as Switch,
  Routes,
  Route,
  Router,
  useLocation,
} from "react-router-dom";
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

const App = () => {
  return (
    <>
      <Switch>
        <Routes>
          <Route exact path="/" element={<Links />} />
          <Route exact path="/ajouter" element={<Ajouter />} />
          <Route exact path="/budget" element={<Budget />} />
          <Route exact path="/distribution" element={<Distribution />} />
          <Route exact path="/enregistrement" element={<Enregistrement />} />
          <Route exact path="/enregistrement1" element={<Enregistrement1 />} />
          <Route exact path="/eplitho" element={<EPLitho />} />
          <Route exact path="/mes" element={<Mes />} />
          <Route exact path="/modifier" element={<Modifier />} />
          <Route exact path="/modifiertache" element={<ModifierTache />} />
          <Route exact path="/nou" element={<Nou />} />
          <Route exact path="/noulibre" element={<NouLibre />} />
          <Route exact path="/supprimer" element={<Supprimer />} />
          <Route exact path="/supprimertache" element={<SupprimerTache />} />
          <Route exact path="/tache" element={<Tache />} />
        </Routes>
      </Switch>
    </>
  );
};

export default App;
