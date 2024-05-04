// Service.js

import React from 'react';
import './service.css';

const Service = () => {
  return (
    <div>
            <section id="services" class="services services">
      <div class="container" data-aos="fade-up">
       
        <div class="section-title">
          <h2> MediShpèreVie : au service de votre santé</h2>
          <p>Tout ce dont vous avez besoin pour gérer votre pratique</p>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon"><img src={process.env.PUBLIC_URL + `/img/icons8-calendrier-50.png`} alt="" /></div>
            <h4 class="title"><a>Calendrier</a></h4>
            <p class="description"> Organisez facilement votre horaire</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon"><img src={process.env.PUBLIC_URL + `/img/bilan-de-sante.png`} alt="" /></div>
            <h4 class="title"><a>Dossier médical électronique</a></h4>
            <p class="description">la santé de vos patients à tout moment et à un coup d’œil</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon"><img src={process.env.PUBLIC_URL + `/img/rendez-vous-en-ligne.png`} alt="" /></div>
            <h4 class="title"><a>Réservation en ligne</a></h4>
            <p class="description">Planification de rendez-vous facile</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon"><img src={process.env.PUBLIC_URL + `/img/icons8-développement-cloud-50.png`} alt="" /></div>
            <h4 class="title"><a>Accessible de partout</a></h4>
            <p class="description">Tant qu’il ya Internet</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon"><img src={process.env.PUBLIC_URL + `/img/icons8-sauvegarde-des-données-50.png`} alt="" /></div>
            <h4 class="title"><a>Pas de sauvegarde</a></h4>
            <p class="description">La perte de données est dans le passé, pas dans l’avenir.</p>
          </div>
          <div class="col-lg-4 col-md-6 icon-box" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon"><img src={process.env.PUBLIC_URL + `/img/icons8-terre-50.png`} alt="" /></div>
            <h4 class="title"><a>Fonctionne partout</a></h4>
            <p class="description">Ordinateur portable, tablette, smartphone, Windows, OS X, Linux …</p>
          </div>
          
        </div>

      </div>
    </section>

          
    </div>
  );
}

export default Service;
