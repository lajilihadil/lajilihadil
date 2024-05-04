import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

import './detailsmed.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Importer les icônes de flèche


const Detailsmed = () => {
  

  const [currentDoctor, setCurrentDoctor] = useState(0);

  const handleNextDoctor = () => {
    setCurrentDoctor((prevDoctor) => (prevDoctor + 1) % 4);
  };

  const handlePrevDoctor = () => {
    setCurrentDoctor((prevDoctor) => (prevDoctor - 1 + 4) % 4);
  };

  return (
    <div className="page-container">
      <Navbar />

      {/* Featured Start */}
      <div className="home-container">
        <div className="content">
          <div className="text-container">
            <h4>Le rôle d'un médecin:</h4>
            <span className='paragraphe'> Le médecin est la personne qui examine ton corps, qui te soigne quand tu es malade et te donne des conseils pour rester en bonne santé.
             Si cela est nécessaire, il te prescrit des médicaments, des examens complémentaires (prise de sang, radio…) ou un traitement (séances de kinésithérapie…).
            </span>
          </div>
          <div className="image-container1">
            <img src={`${process.env.PUBLIC_URL}/img/02707f052069f05d41e84f0368134271-removebg-preview.png`} alt="Image" />
          </div>
        </div>
      </div>
      
      {/* Other content */}
      <div>
        {currentDoctor === 0 && (
          <header className="header">
          <div className="content1">
            <h1><span>Cardiologue</span><br />Medical Services</h1>
            <p>
              <ul>
                <li>Le cardiologue est un médecin spécialiste dans le cœur.</li>
                <li>Il veille au dépistage, au diagnostic, au traitement et à la prévention des pathologies cardiaques.</li>
                <li>Pour ce faire, il réalise des examens comme des électrocardiogrammes (ECG) et des tests d’efforts. </li>
                <li>Le cardiologue analyse ensuite les résultats pour poser un diagnostic.</li>
                <li>Il prescrit des médicaments, des traitements et donne des conseils sur le mode de vie.</li>
                <li>Il peut travailler avec d’autres professionnels de santé si nécessaire.</li>
                <li>Le cardiologue aide les patients à vivre une vie la plus normale possible malgré leurs troubles cardiaques.</li>
                <li>Les techniques médicales évoluent constamment, donc le cardiologue doit se tenir informé et se perfectionner en permanence.</li>  
              </ul>
            </p>
          </div>
          <div className="image1">
            <span className="image__bg"></span>
            <img src={`${process.env.PUBLIC_URL}/img/medecin-expliquant-diagnostic-cardiologie-image-organe-cardiaque-tablette-au-patient-medecin-generaliste-montrant-illustrations-systeme-cardiovasculaire-structure-anatomique-homme-removebg-preview.png`} alt="Dermatologue" className="doctor-image" />
            
          </div>
        </header>
        )}

        {currentDoctor === 1 && (
          <header className="header">
          <div className="content1">
            <h1><span>Dermatologue</span><br />Medical Services</h1>
            <p>
            <ul>
                <li>Le dermatologue est un médecin spécialisé dans le diagnostic et le traitement des affections de la peau, des ongles et des cheveux.</li>
                <li> Ses tâches vont des problèmes courants comme l'acné aux maladies graves comme le psoriasis.</li>
                <li> Il peut également traiter certaines infections sexuellement transmissibles affectant la peau.</li>
                <li> En plus de prescrire des médicaments et de réaliser des interventions chirurgicales, il joue un rôle crucial dans la prévention des maladies de la peau.</li>
                <li> Il fournit des conseils aux patients sur la gestion et la prévention des affections cutanées.</li>
                <li> Il collabore avec d'autres professionnels de la santé pour assurer des soins coordonnés.</li>
                <li> Il est sensible aux aspects psychologiques des affections cutanées, souvent liées au stress.</li>
              </ul>
            </p>
          </div>
          <div className="image1">
            <span className="image__bg"></span>
            <img src={`${process.env.PUBLIC_URL}/img/DERMA_940X440-points-forts-removebg-preview.png`} alt="Dermatologue" className="doctor-image" />
          </div>
        </header>
        )}

        {currentDoctor === 2 && (
          <header className="header">
          <div className="content1">
            <h1><span>psychiatre</span><br />Medical Services</h1>
            <p>
            <ul>
                <li>Le psychiatre assure une prise en charge adaptée en fonction du diagnostic et de la gravité des troubles de son patient.</li>
                <li> Il informe le patient et sa famille et les guide dans les décisions thérapeutiques basées sur les meilleures pratiques médicales. </li>
                <li> Pour poser un diagnostic précis, il évalue les différents diagnostics possibles et recherche les comorbidités médicales ou psychiatriques associées.</li>
                <li> Il collabore avec d'autres professionnels de la santé pour obtenir des avis et des examens complémentaires.</li>
              </ul>
            </p>
          </div>
          <div className="image1">
            <span className="image__bg"></span>
            <img src={`${process.env.PUBLIC_URL}/img/psychiatre-psychologue-psychotherapeute-quelles-differences-et-dans-quels-cas-les-consulter-removebg-preview.png`} alt="Dermatologue" className="doctor-image" />
            
          </div>
        </header>
        )}

        {currentDoctor === 3 && (
          <header className="header">
          <div className="content1">
            <h1><span>Opticien</span><br />Medical Services</h1>
            <p>
            <ul>
                <li>Le psychiatre assure une prise en charge adaptée en fonction du diagnostic et de la gravité des troubles de son patient.</li>
                <li> Il informe le patient et sa famille et les guide dans les décisions thérapeutiques basées sur les meilleures pratiques médicales. </li>
                <li> Pour poser un diagnostic précis, il évalue les différents diagnostics possibles et recherche les comorbidités médicales ou psychiatriques associées.</li>
                <li> Il collabore avec d'autres professionnels de la santé pour obtenir des avis et des examens complémentaires.</li>
              </ul>
            </p>
          </div>
          <div className="image1">
            <span className="image__bg"></span>
            <img src={`${process.env.PUBLIC_URL}/img/i98791-opticien-removebg-preview.png`} alt="Dermatologue" className="doctor-image" />
            
          </div>
        </header>
        )}

        {/* Navigation Buttons avec les icônes */}
        <div className="navigation-buttons">
          <button onClick={handlePrevDoctor} disabled={currentDoctor === 0}>
            <FontAwesomeIcon icon={faChevronLeft} /> {/* Icône de flèche vers la gauche */}
          </button>
          <button onClick={handleNextDoctor} disabled={currentDoctor === 3}>
            <FontAwesomeIcon icon={faChevronRight} /> {/* Icône de flèche vers la droite */}
          </button>
        </div>
        </div>
  <div>
      </div>
    </div>
  );
};

export default Detailsmed;
