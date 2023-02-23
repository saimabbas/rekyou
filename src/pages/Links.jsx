import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <div className="links-page">
      <Link to="/ajouter">
        1. <span>Ajouter</span>
      </Link>
      <Link to="/budget">
        2. <span>Budget</span>
      </Link>
      <Link to="/distribution">
        3. <span>Distribution</span>
      </Link>
      <Link to="/enregistrement">
        4. <span>Enregistrement</span>
      </Link>
      <Link to="/enregistrement1">
        5. <span>Enregistrement1</span>
      </Link>
      <Link to="/eplitho">
        6. <span>Eplitho</span>
      </Link>
      <Link to="/mes">
        7. <span>Mes</span>
      </Link>
      <Link to="/modifier">
        8. <span>Modifier</span>
      </Link>
      <Link to="/modifiertache">
        9. <span>ModifierTache</span>
      </Link>
      <Link to="/nou">
        10. <span>Nou</span>
      </Link>
      <Link to="/noulibre">
        11. <span>Noulibre</span>
      </Link>
      <Link to="/supprimer">
        12. <span>Supprimer</span>
      </Link>
      <Link to="/supprimertache">
        13. <span>SupprimerTache</span>
      </Link>
      <Link to="/tache">
        14. <span>Tache</span>
      </Link>
      <Link to="/eplithotache">
        15. <span>EPLithoTache</span>
      </Link>
    </div>
  );
};

export default Links;
