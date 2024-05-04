import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faEye, faUser } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Spondy = () => {
    return (
    <div><Navbar />
  
      <div className="page-container">
    
        <div className="left-column">
        <div className="magazinetitle" style={{ marginLeft: "20px" }}>
        <h1 className="list_title clearfix" style={{ fontWeight: "600", color: "#2b78aa", marginLeft: "20px", textAlign: "left", fontSize: "35px", marginTop: "20px", textTransform: "lowercase", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
        Mal de dos nocturne, raideur matinale... Et si c'était une spondyloarthrite ?
        </h1>
      </div>
      <div className="gray-background" style={{ marginLeft: "0px", marginRight: "0px" }}>
      <hr className="separator"></hr>
      <i className="pfadmincon-glph-29">
        <FontAwesomeIcon icon={faCalendarAlt} />&nbsp;22/03/2022&nbsp;&nbsp;
      </i>
      <i className="pfadmincon-glyph-666">
        <span className="separator"></span>
        <a href="">&nbsp;&nbsp;</a>
        <span className="separator"></span>
      </i>
      <i className="pfadmincon-glyph-729">
        <FontAwesomeIcon icon={faEye} />&nbsp;2065&nbsp;&nbsp;&nbsp;&nbsp;
      </i>
      <i className="pfadmincon-glyph-729">
        <FontAwesomeIcon icon={faUser} />&nbsp;MediShpèreVie&nbsp;&nbsp;
      </i>
      <hr className="separator"></hr>
    </div>
          <div className="paragraphs">
          <div className="carousel-container" style={{ marginBottom: "50px" }}>
          <Carousel  autoPlay interval={5000} infiniteLoop showIndicators={false} showStatus={false}>
            <div className="image-content">
              <img
              src={`${process.env.PUBLIC_URL}/img/spondy.png`}
                alt="Image"
                style={{ maxWidth: "90%", maxHeight: "600px" }}
              />
            </div>
            <div className="image-content">
              <img
                src={`${process.env.PUBLIC_URL}/img/spondy2.png`}
                alt="Image"
                style={{ maxWidth: "90%", maxHeight: "700px" }}
              />
            </div>
            <div className="image-content">
              <img
                src={`${process.env.PUBLIC_URL}/img/spondy3.png`}
                alt="Image"
                style={{ maxWidth: "90%", maxHeight: "600px" }}
              />
            </div>
          </Carousel>
        </div>
        <p style={{ fontWeight: "bold" , marginBottom:"30px"}} >
        NOS CONSEILS SANTÉ – Cette maladie inflammatoire chronique s’attaque aux articulations de la colonne vertébrale. Elle est souvent prise à tort pour une lombalgie banale.
        </p>


       <p>
       <span style={{ fontWeight: "bold", color: "black", fontSize: " 30px", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
       Qu’est-ce que la spondylarthrite ?
       </span>
       </p>

       <p style={{marginBottom:"30px"}}>
       La spondylarthrite (SpA) décrit un groupe de maladies inflammatoires chroniques avec des caractéristiques cliniques, génétiques et pathogènes communes qui causent de la douleur et de la raideur dans le dos. Elle peut également affecter les genoux, les hanches, les yeux, la peau et le tube digestif.
       </p>

        <p>
        <span style={{ fontWeight: "bold", color: "black", fontSize: "25px", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
        Mal De dos&nbsp;
       </span>
       </p>

        <p style={{marginBottom:"40px"}}>
        Un mal de dos n’est jamais à prendre à la légère, surtout s’il n’est pas seul. Sensation d’être « rouillé » durant de longues minutes, orteils qui ressemblent parfois à des « saucisses cocktail», douleurs dans les talons, yeux rouges, antécédents de psoriasis… Tous ces symptômes doivent automatiquement faire penser à une spondyloarthrite. Cette maladie inflammatoire chronique qui s’attaque aux articulations de la colonne vertébrale peut être maîtrisée à condition d’être repérée précocement.
        </p>
      

       

       <p style={{marginBottom:"40px"}}>
       Pourtant, les malades attendent souvent de longues années avant d’être diagnostiqués. Hervé, 63 ans, a eu plus de chance. À l’âge de 30 ans, alors qu’il revenait de son footing hebdomadaire, ce magicien professionnel a ressenti de vives douleurs dans le bas du dos. «C’était comme des coups de poignard lancinants. Mon médecin de l’époque m’a prescrit des anti-inflammatoires en m’assurant que ça allait passer. Mais les douleurs finissaient toujours par revenir, raconte-t-il. J’ai tout essayé, j’ai même été voir un guérisseur. J’étais désespéré par mon corps qui était celui d’un homme de 90 ans». Au bout d’un an, après plusieurs examens, le verdict tombe: Hervé est atteint d’une forme sévère de spondyloarthrite.
       </p>

       
           
       

        
       
        <p>
        <span style={{ fontWeight: "bold", color: "black", fontSize: "30px", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
        Un diagnostic difficile à établir&nbsp;
       </span>
       </p>

       <p style={{ color: "gray" , marginBottom:"40px"}}>
       « Dans notre spécialité, c’est actuellement l’une des maladies les plus difficiles à diagnostiquer», reconnaît le Pr Philippe Goupille, rhumatologue au CHU de Tours. Contrairement à d’autres pathologies, il n’existe en effet pas d’examen médical miracle permettant de déceler en un coup d’œil une spondyloarthrite. Dans environ 80% des cas, la radiographie ne montre rien d’anormal. L’IRM permet parfois de voir des lésions dues à l’inflammation, mais ce n’est pas systématique et surtout «il peut y avoir des faux positifs», souligne le Pr Daniel Wendling, rhumatologue au CHRU de Besançon. En effet, l’inflammation peut être due à de l’arthrose, de l’activité physique, un accouchement... Pas idéal, donc.
       </p>

       

       <div className="widget_tag_cloud" style={{marginLeft: "50px"}} >
       <p style={{fontWeight:"bold", fontSize:"30px"}}>
       « La spondyloarthrite se manifeste aussi par de longues phases de dérouillage matinal »
      </p>
        <p style={{fontSize:"15px", color :"grey", marginBottom:"40px"}}>
        Dr Philippe Goupille, rhumatologue au CHU de Tours
        </p>
       </div>

<p style={{marginBottom:"40px"}}>
«Ce qui doit systématiquement faire évoquer la spondyloarthrite, c’est un mal de dos qui s’améliore quand on bouge et qui peut réveiller la personne pendant son sommeil, souligne le Pr Goupille. Au contraire, les lombalgies «classiques» se calment au repos et se réveillent avec le mouvement. «La spondyloarthrite se manifeste aussi par de longues phases de dérouillage matinal qui durent généralement 30 à 45 minutes», poursuit le rhumatologue. Les bras, les coudes ou encore les talons peuvent aussi être touchés. Autre signe à prendre en compte: la maladie se déclare généralement entre 20 et 30 ans.
</p>

<p>    
<span style={{ fontWeight: "bold", color: "black", fontSize: "30px", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
Des traitements efficaces sur les symptômes&nbsp;
</span>
</p>

<p style={{marginBottom:"40px"}}>
Il n’existe pas de traitement curatif de la maladie. En revanche, il est possible de l’empêcher d’évoluer et de retrouver une bonne qualité de vie. Il existe deux sortes de médicaments: les anti-inflammatoires non stéroïdiens et les biothérapies. «Les biothérapies, comme les anti-TNF, ne sont pas anodines. Elles sont très coûteuses (entre 7000 et 9000 euros par an, NDLR), comportent un certain nombre d’effets indésirables, un risque infectieux notamment, et surtout, on ne peut pas les arrêter comme ça car les symptômes peuvent revenir au galop», explique le Pr Goupille.
</p>
 
<p style={{marginBottom:"40px"}}>
D’après les recommandations internationales, au moins deux anti-inflammatoires doivent être essayés avant de passer à une éventuelle biothérapie. Mais selon le médecin, il faut insister davantage avec les anti-inflammatoires, même si en prendre tous les jours augmente le risque cardiovasculaire. «Il faut en essayer 3, 4, ou plus, jusqu’à en trouver un qui sera bien toléré et efficace sur la douleur, puis on diminue les doses progressivement, explique-t-il. Au bout d’un certain temps, il est possible de n’en prendre qu’au coup par coup, uniquement lorsque les douleurs reviennent.»
</p>
 
<p style={{marginBottom:"40px"}}>
Pour Hervé, les anti-inflammatoires n’ont rien donné. «Je les ai tous essayés pendant 5 ans. Et puis en 2010, je suis tombé par hasard sur un article qui parlait des biothérapies. Je l’ai avalé tout rond et j’ai immédiatement pris rendez-vous à l’hôpital. J’ai dû passer un certain nombre d’examens avant d’avoir le feu vert des médecins, raconte-t-il. Dès la deuxième injection, j’ai cessé de souffrir, c’était miraculeux. Je me suis racheté des chaussures de sport et j’ai recommencé à refaire du sport. Aujourd’hui, j’ai une vie normale, même si mon aspect physique est marqué par la maladie: mes vertèbres sont en partie soudées. Mais j’ai appris à l’accepter.»
</p>

<div className="widget_tag_cloud">
  <a href="" className="tag-cloud-link">spondyloarthrite</a>
  <a href="" className="tag-cloud-link">inflammation articulaire</a>
  <a href="" className="tag-cloud-link">douleur dorsale</a>
  <a href="" className="tag-cloud-link">ankylose</a>
  <a href="" className="tag-cloud-link">raideur matinale</a>
  <a href="" className="tag-cloud-link">fatigue chronique</a>
  <a href="" className="tag-cloud-link">migraines</a>
  <a href="" className="tag-cloud-link">nausées</a>
  <a href="" className="tag-cloud-link">troubles du sommeil</a>
</div>

    </div>
    
        </div>
        <div className="right-column">
        <div className="pfwidgettitle">
        <div className="sidebar__title" style={{ margin: "15px 15px" , marginTop:"50px"}}>
          A lire aussi ...
        </div>
        <div className="sidebar__title" style={{ margin: "15px 35px" , color: "grey" , marginBottom:"-30px"}}>
          Explorez d'autres magazines passionnants disponibles !
        </div>
      </div>
        <div className="col-content" styyle={{marginTop:"-100px"}}>
        
        <div className="col">
        <div className="pfslides-item">
          <a href="/dentaire">
            <div className="mx-auto" style={{ direction: "ltr", textAlign: "left", marginBottom: "-80px" ,marginTop:"-65px" }}>
              <img src={`${process.env.PUBLIC_URL}/img/dentaire.png`} className="lzyloaded img-fluid" style={{ borderRadius: "10px", maxWidth: "100%", height: "290px"}} alt="Douleur" />
              <span className="magcatlabel" style={{ backgroundColor: "#FF1113", borderRadius: "20px", padding: "2px 10px", width: "fit-content" }}>
                Santé des dents
              </span>
              <div style={{ marginBottom: "10px", fontSize: "15px", fontWeight: "500", color: "#0696D6" }}>
                Détartrage dentaire et sensibilité : comprendre le lien et les solutions
              </div>
            </div>
          </a>
        </div>
      </div>
        <div className="col"  >
          <div className="pfslides-item ">
            <a href="/migraine">
              <div className="mx-auto" style={{ direction: "ltr", textAlign: "left", marginBottom: "-80px", marginTop:"-20px"}}>
                <img src={`${process.env.PUBLIC_URL}/img/douleur.png`} className="lzyloaded img-fluid" style={{ borderRadius: "10px", maxWidth: "100%", height: "290px" }} alt="Comment prévenir et soulager les céphalées et les crises de migraines ?" />
                <span className="magcatlabel" style={{ backgroundColor: "#375fff", borderRadius: "20px", padding: "2px 10px", width: "fit-content" }}>
                  Santé
                </span>
                <div style={{ marginBottom: "10px", fontSize: "15px", fontWeight: "500", color: "#0696D6" }}>
                  Comment prévenir et soulager les céphalées et les crises de migraines ?
                </div>
              </div>
            </a>
          </div>
        </div>
      
      
        

        <div className="col">
        <div className="pfslides-item">
          <a href="#">
            <div className="mx-auto" style={{ direction: "ltr", textAlign: "left", marginBottom: "50px" }}>
              <img src={`${process.env.PUBLIC_URL}/img/arthrose3.png`} className="lzyloaded img-fluid" style={{ borderRadius: "10px", maxWidth: "100%", height: "290px" }} alt="Spondyloarthrite" />
              <span className="magcatlabel" style={{ backgroundColor: "#FF1113", borderRadius: "20px", padding: "2px 10px", width: "fit-content" }}>
                Spondyloarthrite
              </span>
              <div style={{ marginBottom: "10px", fontSize: "15px", fontWeight: "500", color: "#0696D6" }}>
                Mal de dos nocturne, raideur matinale... Et si c'était une spondyloarthrite ?
              </div>
            </div>
          </a>
        </div>
      </div>
      
      </div>
      


        <div className="question-block">
        <div className="sidebar__box" style={{paddingLeft:"0", paddingRight:"0"}}>
        <div className="pfwidgettitle">
         <div className="sidebar__title">Questions médicales</div>
        </div>
          <li style={{background:"none", paddingRight:"20px"}}>
          <a href="#" >
           <h2 style={{marginTop:"10px", fontWeight:"600", fontSize:"18px",lineHeight:"170%", color:"#069D7"}}>
           Mal de dos nocturne, raideur matinale...
           </h2>
          </a>
           <p>
           Bonjour, je suis une jeune femme de 20 ans. Je souffre de mal de dos nocturne, de raideur matinale et je m'interroge sur la possibilité d'avoir une spondyloarthrite. J'éprouve des douleurs intenses dans le bas du dos, ce qui affecte considérablement ma qualité de vie. Ma question est la suivante : Comment puis-je soulager ces douleurs et comment puis-je déterminer s'il s'agit effectivement d'une spondyloarthrite ?
          </p>
          </li>
          <li style={{background:"#FCFCFC", marginBottom:"20px", paddingTop:"5px",paddingBottom:"20px" }}>
          <div className="profile__flex" style={{ marginTop: "10px", textAlign: "left!important", marginRight: "0!important" }}>
          <div style={{ width: "30%", height: "80px", marginBottom: "10px" }}>
            <img src={`${process.env.PUBLIC_URL}/img/femme.avif`} alt="ImageMedecin" />
          </div>
        
          <div class="profile__labels" style={{ display: "flex" }}>
            <div class="profile__label--name" style={{ fontSize: "14px", color: "#0696D6", marginLeft: "10px" }}>
            Mr Rachid Zrelli
            </div>
            <div class="profile__label--spee" style={{ fontSize: "12px", color: "#7C878E", marginBottom: "20px" , marginLeft: "10px"}}>
            Rhumatologue 
            </div>
          </div>
        </div>
        
            <p style={{fontSize:"14px", fontWeight:"600", color:"#3C3C3B"}}>A répondu à cette question </p>
            <a style={{padding:"8px 20px ", color:"#0696D6", boxShadow:"2px 2px 4px rgba(0,0,0,0.1)", borderRadius:"6px"}} href="#">
              Voir la réponse
            </a>
          </li>
        
        </div>

        
        </div>

        <div className="sidebar-widget" style={{ background: "#f7f7f7", padding: "20px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", alignSelf: "flex-start", marginLeft: "auto" }}>
        <div className="sidebar__box" style={{ textAlign: "center", marginBottom: "20px" }}>
            <div className="pfwidgettitle" style={{ fontSize: "20px" }}>
                Apportez une réponse <br />à vos inquiétudes
            </div>
        </div>
        
        <p style={{ margin: "10px 0 10px", fontSize: "14px", color: "#7C878E" }}>
            Un groupe de médecins spécialisés répondra à vos demandes
        </p>
        
        <a style={{ display: "block", margin: "20px", textAlign: "center", background: "#0696D6", color: "#fff", padding: "5px 10px", borderRadius: "5px", textDecoration: "none" }} href="/poser-ma-question">
            Poser ma question
        </a>
        <a href="/trouver_med" className="btnfindques" style={{ display: "block", margin: "20px", textAlign: "center", background: "rgb(232, 190, 7)", color: "#fff", padding: "5px 10px", borderRadius: "5px", textDecoration: "none", color:'black' }}>
            Trouver un Généraliste
        </a>
        </div>

        <div className="sidebar__box mag__box" style={{ background: "#f7f7f7", padding: "20px", borderRadius: "10px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", alignSelf: "flex-start", marginLeft: "auto" }}>
        <div className="pfwidgettitle">
        <div className="sidebar__title" style={{marginBottom:"20px"}}>Catégories</div>
       </div>
        <ul className="accordion-menu">
          <li className="open">
            <div className="dropdownlink">
              <img src="https://cdn.med.tn/img/icon/mag-1.png" width={26} height={26} alt />
              <a href="https://www.med.tn/magazine-medical/nutrition">Nutrition</a>
              <i className="pfadmicon-glyph-738" aria-hidden="true" />
            </div>
            
          </li>
          <li className>
            <div className="dropdownlink">
              <img src="https://cdn.med.tn/img/icon/mag-2.png" width={26} height={26} alt />
              <a href="https://www.med.tn/magazine-medical/psycho-et-sexualite">Psycho et Sexualité</a>
              <i className="pfadmicon-glyph-738" aria-hidden="true" />
            </div>
            
          </li>
          <li className>
            <div className="dropdownlink">
              <img src="https://cdn.med.tn/img/icon/mag-5.png" width={26} height={26} alt />
              <a href="https://www.med.tn/magazine-medical/grossesse-et-accouchement">Grossesse et accouchement</a>
              <i className="pfadmicon-glyph-738" aria-hidden="true" />
            </div>
            
          </li>
          <li className>
            <div className="dropdownlink">
              <img src="https://cdn.med.tn/img/icon/mag-7.png" width={26} height={26} alt />
              <a href="https://www.med.tn/magazine-medical/sante">Santé</a>
              <i className="pfadmicon-glyph-738" aria-hidden="false" />
            </div>
           
          </li>
          <li className>
            <div className="dropdownlink">
              <img src="https://cdn.med.tn/img/icon/mag-8.png" width={26} height={26} alt />
              <a href="https://www.med.tn/magazine-medical/beaute-et-bien-etre">Beauté et Bien-être</a>
              <i className="pfadmicon-glyph-738" aria-hidden="true" />
            </div>
            
          </li>
          <li className>
            <div className="dropdownlink">
              <img src="https://cdn.med.tn/img/icon/mag-28.png" width={26} height={26} alt />
              <a href="https://www.med.tn/magazine-medical/actualite">Actualité</a>
              <i className="pfadmicon-glyph-738" aria-hidden="true" />
            </div>
           
          </li>
          <li className>
            <div className="dropdownlink">
              <img src="https://cdn.med.tn/img/icon/mag-32.png" width={26} height={26} alt />
              <a href="https://www.med.tn/magazine-medical/couverture-medicale">Couverture Médicale</a>
              <i className="pfadmicon-glyph-738" aria-hidden="true" />
            </div>
            
          </li>
        
        </ul>  
      </div>
      

    




        </div>

    
    
    
      </div>
      <Footer />
      </div>
    );
  };
export default Spondy;
