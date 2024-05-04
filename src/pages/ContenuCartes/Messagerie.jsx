import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';

import './messagerie.css';
import { Link } from 'react-router-dom';

const Messagerie = () => {
  return (
    <div className="page-container">
     <Navbar/>
          
      {/* Featured Start */}
      <div className="home-container">
        <div className="content">
          <div className="text-container">
            <h4>Messagerie : <br /> 
            <br />
            Il n'a jamais été aussi facile de joindre votre médecin</h4>
            <span className='paragraphe'> Il peut parfois être difficile de déterminer le moment et la manière appropriés pour contacter vos professionnels de santé. 
            Grâce à la nouvelle fonctionnalité de messagerie de MédiSphèreVie, vous avez désormais la possibilité de leur envoyer des demandes spécifiques en dehors de vos consultations, de manière simple et sécurisée. 
            Ces demandes peuvent inclure la communication de résultats d'examens, l'envoi d'une lettre d'adressage ou encore le règlement de notes d'honoraires. 
            Découvrez comment utiliser cette messagerie, quels médecins sont accessibles, et les différents types de demandes que vous pouvez formuler.</span>
          </div>
          <div className="image-container">
            <img src={`${process.env.PUBLIC_URL}/img/visuel-gestion-mail-removebg-preview.png`} alt="Image" />
          </div>
        </div>
      </div>
      {/* other */ }
      <div className="section">
            <div className="section__inner padding-small" data-component="specialities_solutions" data-row-index="1" data-section-type="Large Cards" data-view="viewed">
                <div className="large-cards">
                    <div className="container container--large large-cards__tabs">
                        <h2 className="title title--xxlarge large-cards__tabs-title">Quels praticiens pouvez-vous contacter ?</h2>      
                                            {/* Ajouter d'autres diapositives de carte si nécessaire */}
                                             <ul>
                                                <li>Médecins généralistes</li>
                                                <li>Cardioloques</li>
                                                <li>Dermatologues</li>
                                                <li>pédiatres</li>
                                                <li>Psychologues </li>
                                                <li>Podologues</li>
                                                <li>Kinésithérapeutes</li>
                                                <li>Ostéopathes</li>
                                                <li>Dentistes</li>
                                             </ul>
                                        </div>
                                    </div>
                                
 </div>
 </div>
      {/* Featured End */}

      {/* Cards Start */}
      <Footer />
      {/* Footer End */}
    </div>
  );
};

export default Messagerie;
