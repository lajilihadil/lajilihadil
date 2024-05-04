import React, { useState } from 'react';
import './acceuil.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faStethoscope,
    faUserMd,
    faTooth,
    faBrain,
    faHandshake,
    faBabyCarriage,
    faGlasses,
    faCapsules,
    faUserNurse,
    faPhone,
    faHeartbeat,
    faDesktop,
    faArrowLeft,
    faTimes
  } from '@fortawesome/free-solid-svg-icons';
const Acceuil = () => {
  const [showPartie2, setShowPartie2] = useState(false);
  const togglePartie2 = () => {
    setShowPartie2(!showPartie2);
  };
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: '#001F3F', width: '100%' }}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/" style={{ color: 'white' }}>MediShpèreVie</a>
      </nav>
      <div className="home-intro__step1">
        <div className="home-intro__wrapper container container--large">
          {showPartie2 ? (
            <div>
              {/* Partie 2 à afficher */}
              <h2 className="title title--xxlarge d-flex justify-content-center flex-wrap" style={{ fontSize: "40px" }}>
                Une dernière question
              </h2>
              <h2 className="xxlarge d-flex justify-content-center flex-wrap" style={{ paddingRight: "50px", fontSize: "20px", marginTop: "30px" }}>
               Indiquez-nous votre spécialité pour découvrir nos solutions adaptées
              </h2>
              <div className="d-flex justify-content-center flex-wrap">
              <button className="choice__link" style={{ padding: "5px", fontSize: "14px" ,  width: "250px",
              height: "100px"}}>
              <div className="icon icon--xxlarge" style={{ fontSize: "20px"}}>
              <a className="dropdown-item" href="/Chirugien">
              <FontAwesomeIcon icon={faHandshake} className="mr-2" />
              Chirurgien-dentiste
            </a>
              </div>
            </button>
            <button className="choice__link" style={{ padding: "2px", fontSize: "14px" ,  width: "250px",
            height: "100px"}}>
            <div className="icon icon--xxlarge" style={{ fontSize: "20px"}}>
            <a className="dropdown-item" href="/Masseurkinesitherapeute">
            <FontAwesomeIcon icon={faHandshake} className="mr-2" />
            Masseur-kiné
          </a>
            </div>
          </button>
          <button className="choice__link" style={{ padding: "5px", fontSize: "14px" ,  width: "250px",
          height: "100px"}}>
          <div className="icon icon--xxlarge" style={{ fontSize: "20px"}}>
          <a className="dropdown-item" href="/Psychologue">
          <FontAwesomeIcon icon={faBrain} className="mr-2" />
          Psychologue
        </a>
          </div>
        </button>
        <button className="choice__link" style={{ padding: "5px", fontSize: "14px" ,  width: "250px",
        height: "100px"}}>
        <div className="icon icon--xxlarge" style={{ fontSize: "20px"}}>
        <a className="dropdown-item" href="/PedicurePodologue">
        <FontAwesomeIcon icon={faBabyCarriage} className="mr-2" />
        Pédicure-Podologue
      </a>
        </div>
      </button>
      <button className="choice__link" style={{ padding: "5px", fontSize: "14px" ,  width: "250px",
      height: "100px"}}>
      <div className="icon icon--xxlarge" style={{ fontSize: "20px"}}>
        <a className="dropdown-item" href="/Sagefemme">
        <FontAwesomeIcon icon={faUserNurse} className="mr-2" />
        Sage Femme
        </a>
      </div>
    </button>
        <button className="choice__link" style={{ padding: "5px", fontSize: "14px" ,  width: "250px",
        height: "100px"}}>
        <div className="icon icon--xxlarge" style={{ fontSize: "20px"}}>
            <a className="dropdown-item" href="/Opticiens">
            <FontAwesomeIcon icon={faGlasses} className="mr-2" />
            Opticien
        </a>
        </div>
    </button>
        <button className="choice__link" style={{ padding: "5px", fontSize: "14px" ,  width: "250px",
        height: "100px"}}>
        <div className="icon icon--xxlarge" style={{ fontSize: "20px"}}>
            <a className="dropdown-item" href="/Pharmacien">
            <FontAwesomeIcon icon={faCapsules} className="mr-2" />
            Pharmacien
            </a>
        </div>
        </button>
        <button className="choice__link" style={{ padding: "5px", fontSize: "14px" ,  width: "250px",
        height: "100px"}}>
        <div className="icon icon--xxlarge" style={{ fontSize: "20px"}}>
        <a className="dropdown-item" href="/Infirmier">
        <FontAwesomeIcon icon={faBrain} className="mr-2" />
        Infirmier
      </a>
        </div>
        </button>
        <button className="choice__link" style={{ padding: "5px", fontSize: "14px" ,  width: "250px",
        height: "100px"}}>
        <div className="icon icon--xxlarge" style={{ fontSize: "20px"}}>
        <a className="dropdown-item" href="/Medecin">
        <FontAwesomeIcon icon={faStethoscope} className="mr-2" />
        Médecin généraliste
      </a>
        </div>
        </button>
        <button className="choice__link" style={{ padding: "5px", fontSize: "14px" ,  width: "250px",
        height: "100px"}}>
        <div className="icon icon--xxlarge" style={{ fontSize: "20px"}}>
        <a className="dropdown-item" href="/Med">
        <FontAwesomeIcon icon={faStethoscope} className="mr-2" />
        Autre Spécialité
      </a>
        </div>
        </button>
</div>
        <div className="button-intro" style={{textAlign:"left", marginTop:"40px"}}>
        <a href="#" onClick={togglePartie2}>
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Retour à la partie 1
        </a>
      </div>
     <div className="button-intro" style={{ textAlign: "right", marginTop: "-65px" }}>
        <a href="/Med" onClick={togglePartie2}>
          <FontAwesomeIcon icon={faTimes} className="mr-2" /> {/* Remplacez ici par votre nouvelle icône */}
          Ignorer cette étape
        </a>
      </div>
        </div>
          ) : (
            <div>
              {/* Partie 1 à afficher */}
              <div class="text-center">
              <h2 className="title title--xxlarge" style={{ fontSize: "40px" }}>
                  Bienvenue sur le site de MediShpèreVie
              </h2>
              <h2 className="xxlarge" style={{ paddingRight: "50px", fontSize: "20px", marginTop: "30px" }}>
                  Vous souhaitez découvrir nos solutions en tant que ...
              </h2>
          </div>
              <div className="home-intro__step1-choices ">
                <div className="home-intro__step1-list ">
                  <div className="choice choice--large choice--block choice--fill ">
                    <button className="choice__link " onClick={togglePartie2} >
                      <div className="icon icon--xxlarge" style={{ fontSize: "50px" }}>
                        <i className="fas fa-user-md"></i>
                      </div>
                      <p className="title title--xxlarge choice__title" style={{ fontSize: "30px", color: "black" }}>
                        Professionnel de santé
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="text-container" style={{ display: "flex", justifyContent: "center" }}>
              <a href="/" style={{ color: "white", textDecoration: "none" }}>
                  <h2 className="large" style={{ paddingRight: "30px", fontSize: "20px", width: "100%", marginTop: "10px" }}>
                      Je suis un patient et je souhaite prendre un rendez-vous chez un médecin.
                  </h2>
              </a>
          </div>
              <div className="button-intro" style={{ textAlign: "center"}}>
              <a href="/Med" >
                <FontAwesomeIcon icon={faTimes} className="mr-2" /> {/* Remplacez ici par votre nouvelle icône */}
                Ignorer cette étape
              </a>
            </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Acceuil;