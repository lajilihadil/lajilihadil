// Card.js

import React from 'react';
import './card.css';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    /* Cartes */
    <div className="container1">
          <div className="card__container">
            <article className="card__article ">
              <img src={`${process.env.PUBLIC_URL}/img/diabete.jpg`} alt="Image" className="card__img" />
              <div className="card__data">
                <span className="card__description">Diabete et Alimentation</span>
                <h2 className="card__title">Conseils alimentaires pour les diabétiques</h2>
                <a href="/sante" className="Link">Ca m'intéresse</a>
              </div>
            </article>
            <article className="card__article">
              <img src={`${process.env.PUBLIC_URL}/img/les_specialites_medicales_de_a_a_z-medical-rh.jpg`} alt="Image" className="card__img" />
              <div className="card__data">
                <span className="card__description">Le role d'un médecin</span>
                <h2 className="card__title">Découvrez le role de vos médecins</h2>
                <a href="/detailsmed" className="Link">En s'avoir plus</a>
              </div>
            </article>
            <article className="card__article">
              <img src={`${process.env.PUBLIC_URL}/img/optimiser-la-sécurité-de-votre-client-de-messagerie.jpg`} alt="Image" className="card__img" />
              <div className="card__data">
                <span className="card__description">Messagerie</span>
                <h2 className="card__title">Il n'a jamais été aussi facile de joindre votre médecin</h2>
                <a href="/messagerie" className="Link">Découvrir</a>
              </div>
            </article>
          </div>
        </div>
  );
};

export default Card;
