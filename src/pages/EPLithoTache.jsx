import React from "react";
import { MdKeyboardArrowLeft, MdAdd } from "react-icons/md";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "bootstrap/dist/css/bootstrap.min.css";

const EPLithoTache = () => {
  return (
    <div className="approkyou">
      {/* HEADER  */}
      <Header />
      {/* MAIN CONTENT  */}
      <div className="box">
        <div className="main-content">
          <Tabs
            defaultActiveKey="profile"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Home">
              Tab 1
            </Tab>
            <Tab eventKey="profile" title="Profile">
              Tab 2
            </Tab>
            <Tab eventKey="contact" title="Contact">
              Tab 3
            </Tab>
          </Tabs>

          <div className="mc-back">
            <span>
              <MdKeyboardArrowLeft />
              Retour
            </span>
            <p>Modifier le projet</p>
          </div>
          <div className="mc-heading eplitho">
            <h3>EP Lithopédion</h3>
            <span>1/10</span>
          </div>
          <div className="eptac-prog">
            <div className="inner-eptac-prog"></div>
          </div>
        </div>
        <div className="main-content mc-cont-2">
          <div className="mc-heading">
            <h3>Tâches</h3>
            <span>
              Ajouter <MdAdd />
            </span>
          </div>
          {/* <div className="epl-tabs">
            <Tab.Container defaultActiveKey="a1">
              <Nav variant="tabs">
                <Nav.Item>
                  <Nav.Link eventKey="a1">Same brand</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="a2">Other cobots</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="a1">
                  <div>Hi</div>
                </Tab.Pane>
                <Tab.Pane eventKey="a1">
                  <div>Bye</div>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </div> */}
          <div className="tabcontent">
            <div className="tabtext">
              <p>J’ai toutes mes prods</p>
            </div>
            <div className="tabtext">
              <p>Je connais mes textes par coeur</p>
            </div>{" "}
            <div className="tabtext">
              <p>Mes prods sont sur clé USB</p>
            </div>{" "}
            <div className="tabtext">
              <p>Enregistrement du morceau 1</p>
            </div>{" "}
            <div className="tabtext">
              <p>Enregistrement du morceau 2</p>
            </div>{" "}
            <div className="tabtext">
              <p>Enregistrement du morceau 3</p>
            </div>{" "}
            <div className="tabtext">
              <p>Enregistrement du morceau 4</p>
            </div>
            <div className="tabtext">
              <p>Enregistrement du morceau 5</p>
            </div>
            <div className="tabtext">
              <p>Récupérer tous mes morceaux pour le mix</p>
            </div>
          </div>
        </div>
      </div>
      {/* FOOTER  */}
      <Footer />
    </div>
  );
};

export default EPLithoTache;
