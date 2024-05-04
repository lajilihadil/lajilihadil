import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import './sante.css';
import { Link } from 'react-router-dom';

const Sante = () => {
  return (
    <div className="page-container">
      <Navbar />
      {/* Featured Start */}
      <div className="home-container" style={{backgroundColor:'#107aca'}}>
        <div className="content">
          <div className="text-container">
            <h4>Diabete et Alimentation : <br /> 
            <br />
            Conseils alimentaires pour les diabétiques</h4>
            <span className='paragraphe'> Une alimentation équilibrée fait partie du traitement du diabète. Elle doit être adaptée à vos besoins et apporter des aliments variés.  Certains d’entre eux sont à privilégier pour maintenir l’équilibre du diabète et prévenir au quotidien les maladies cardiovasculaires.</span>
          </div>
          <div className="image-container">
            <img src={`${process.env.PUBLIC_URL}/img/diabete-alimentation-removebg-preview.png`} alt="Image" />
          </div>
        </div>
      </div>

      {/* Other content */}
      <div className="div-container">
        <div className="div-container1">
          <p className="has-medium-font-size">L’alimentation est un des piliers du traitement du diabète de type 2 et fait partie intégrante de la gestion du diabète de type 1.</p>
          <p>Les recommandations alimentaires pour la personne qui vit avec le diabète sont semblables à celles pour la population en général.</p>
        </div>
        <div className="div-container2">
          <p className="div-container2-1-2" style={{ color: '#fffff' }}><strong>Aucun aliment n’est interdit!</strong></p>
        </div>
      </div>
      <div className="div-container">
        <div className="div-container1" >
          <h3 className="wp-block-heading">Conseils de base</h3>
          <ul>
            <li>Cuisinez le plus souvent possible à partir d’aliments frais et peu transformés.</li>
            <li>Mangez une grande variété d’aliments.</li>
            <li>Prenez le temps de savourer ce que vous mangez.</li>
            <li>Écoutez et respectez vos signaux de faim et de satiété.</li>
            <li>Consommez trois repas par jour à des heures régulières. Évitez de sauter un repas</li>
            <li>Au besoin, consommez une collation nutritive pour combler la faim entre les repas,
             combler vos besoins nutritionnels ou prévenir une hypoglycémie, s’il y a lieu.</li>
            <li>Privilégiez les aliments riches en fibres : produits céréaliers à grains entiers, 
             légumineuses, fruits et légumes entiers avec la pelure, noix et graines.</li>
            <li>Privilégiez les aliments faibles en sodium (sel).</li>
            <li>Portez une attention sur la quantité et la qualité des glucides consommés, 
             tout en vous assurant de bien les répartir tout au long de la journée. 
              Les aliments dans les sections jaunes de l’assiette équilibrée sont des sources de glucides qui font augmenter la glycémie. 
               Lisez notre article sur les glucides pour en savoir plus.</li>
          </ul>
        </div>
        <div className="div-container2" >
          <p className="div-container2-1">
            <strong>La plupart des personnes ont besoin de 45 à 75 g de glucides par repas et 15 à 30 g de glucides par collation, si nécessaire.</strong>
          </p>
        </div>
      </div>
      {/* Featured End */}
      <div className="container">
        <h3>Inspirez-vous de l’assiette équilibrée pour vos repas!</h3>
        <img src="/img/aliment.jpg" alt="" />
        <div className="text-container"> 
        <div className="item"> 
        <p className="title">LÉGUMES</p>
         <ul> 
          <li>La moitié de votre assiette devrait être composée de légumes. </li>
          <li> Assurez-vous de consommer une variété de légumes. </li>
        </ul> 
        </div>
         <div className="item"> 
         <p className="title">FÉCULENTS</p>
         <ul> 
          <li> Le quart de votre assiette devrait être composé de féculents. </li>
          <li> Privilégiez les grains entiers et les produits céréaliers à grains entiers qui contiennent plus de fibres.</li>
          </ul>
        </div> 
        <div className="item"> 
        <p className="title">ALIMENTS PROTÉINÉS</p> 
        <ul> 
          <li>Le quart de votre assiette devrait être composé d'aliments protéinés</li>
          <li> Privilégiez les aliments protéinés d'origine végétale (par exemple, tofu, légumineuses) et le poisson. </li>
        </ul> 
        </div>
        <div className="item"> 
        <p className="title">FRUITS</p> 
        <ul> 
       <li> Les fruits peuvent être consommés en dessert ou en collation. Consommez les fruits entiers avec la pelure.</li>
        </ul> 
        </div>
        <div className="item"> 
        <p className="title">HYDRATATION</p> 
        <ul> 
          <li>L’eau est la boisson idéale pour s’hydrater.</li>
          <li> L’eau gazéifiée, les eaux aromatisées maison, les tisanes, les thés et le café non sucrés sont aussi des choix intéressants.</li>
        </ul> 
        </div>
        <div className="item"> 
        <p className="title">MATIÈRES GRASSES</p> 
        <ul> 
           <li>Privilégiez les gras monoinsaturés et polyinsaturés, qui sont favorables pour la santé du coeur, tels que l’huile d’olive, l’huile de canola, les noix et les graines, les poissons gras et les avocats.</li>          
        </ul> 
        </div>
        </div>
      </div>
    </div>
  );
};

export default Sante;
