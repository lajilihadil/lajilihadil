import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import './arthrose.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faEye, faUser } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
const PagePresentation = () => {
    return (
    <div><Navbar />
  
      <div className="page-container">
    
        <div className="left-column">
        <div className="magazinetitle" style={{ marginLeft: "20px" }}>
        <h1 className="list_title clearfix" style={{ fontWeight: "600", color: "#2b78aa", marginLeft: "20px", textAlign: "left", fontSize: "35px", marginTop: "20px", textTransform: "lowercase", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
        Arthrose cervicale : symptômes, causes et traitements
        </h1>
      </div>
      <div className="gray-background" style={{ maarginLeft: "0px", marginRight: "0px" }}>
      <hr className="separator"></hr>
      <i className="pfadmincon-glph-29">
        <FontAwesomeIcon icon={faCalendarAlt} />&nbsp;28/05/2022&nbsp;&nbsp;
      </i>
      <i className="pfadmincon-glyph-666">
        <span className="separator"></span>
        <a href="">&nbsp;&nbsp;</a>
        <span className="separator"></span>
      </i>
      <i className="pfadmincon-glyph-729">
        <FontAwesomeIcon icon={faEye} />&nbsp;3765&nbsp;&nbsp;&nbsp;&nbsp;
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
              src={`${process.env.PUBLIC_URL}/img/arthrose.png`}
                alt="Image"
                style={{ maxWidth: "90%", maxHeight: "600px" }}
              />
            </div>
            <div className="image-content">
              <img
                src={`${process.env.PUBLIC_URL}/img/arthrose3.png`}
                alt="Image"
                style={{ maxWidth: "90%", maxHeight: "700px" }}
              />
            </div>
            <div className="image-content">
              <img
                src={`${process.env.PUBLIC_URL}/img/arthrose2.png`}
                alt="Image"
                style={{ maxWidth: "90%", maxHeight: "600px" }}
              />
            </div>
          </Carousel>
        </div>
        <p style={{ fontWeight: "bold" , marginBottom:"30px"}} >
        L'arthrose cervicale, également appelée cervicarthrose est une maladie dégenerative qui touche les vertèbres 
        cervicales situées au niveau du cou. Il s'agit d'une usure progressive du cartilage qui recouvre les vertèbres 
        cervicales ce qui entraine une douleur, raideur, et contracture des muscles paravertébraux.
        </p>
        <p>
        <span style={{ fontWeight: "bold", color: "black", fontSize: "25px", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
        Causes&nbsp;
       </span>
       </p>

        <p>
        L'arthrose cervicale est une condition souvent associée au 
        vieillissement. Avec le temps, le cartilage subit une usure naturelle, 
        mais certains facteurs peuvent accélérer
        ce processus. Ces facteurs comprennent notamment :
        </p>
        <div className="paragraphs"  style={{ marginLeft: "50px" , color:"#807e7e", marginBottom:"30px"}}>
        <p>• Une usure excessive des articulations due à des mouvements répétitifs ou à une surcharge pondérale.</p>
        <p>• Une traumatisme au niveau du cou.</p>
        <p>• Une maladie inflammatoire, comme la polyarthrite rhumatoïde.</p>
        <p>• Une anomalie congénitale de la colonne vertébrale.</p>
        </div>

        <p>
        <span style={{ fontWeight: "bold", color: "black", fontSize: "25px", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
        Symptômes&nbsp;
       </span>
       </p>

       <p>
       Les manifestations de l'arthrose cervicale varient en fonction de
        la sévérité de la condition. Elles peuvent comprendre :
       </p>

        <div className="paragraphs"  style={{ marginLeft: "50px" , color:"#807e7e", marginBottom:"30px"}}>
        <p>
        <span style={{ fontWeight: "bold", color: "black", fontSize: "18px", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
            &#9632; Traitements non médicamenteux&nbsp;:
        </span> 
        </p>
        <div className="paragraphs"  style={{ marginLeft: "70px" , color:"#807e7e"}}>
        <p>• Exercices de kinésithérapie visant à renforcer les muscles du cou et à améliorer la souplesse.</p>
        <p>• Application de chaleur ou de froid.</p>
        <p>• Massages.</p>
        <p>• Acupuncture.</p>
        </div>
        </div>
           
        <div className="paragraphs"  style={{ marginLeft: "50px" , color:"#807e7e"}}>
        <p>
        <span style={{ fontWeight: "bold", color: "black", fontSize: "18px", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
            &#9632; Traitements médicamenteux&nbsp;:
        </span> 
        </p>
        <div className="paragraphs"  style={{ marginLeft: "70px" , color:"#807e7e"}}>
        <p>• Analgésiques et anti-inflammatoires non stéroïdiens (AINS).</p>
        <p>• Antidépresseurs tricycliques, dans certains cas.</p>
        <p>•  Injections de corticoïdes.</p>
        </div>
        </div>

        <div className="paragraphs"  style={{ marginLeft: "50px" , color:"#807e7e"}}>
        <p>
        <span style={{ fontWeight: "bold", color: "black", fontSize: "18px", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
            &#9632; Chirurgie&nbsp;:
        </span> 
        </p>
        <div className="paragraphs"  style={{ marginLeft: "70px" , color:"#807e7e"}}>
           <p>• En dernier recours, lorsque les autres traitements se révèlent inefficaces et que la maladie est sévère.</p>
        </div>
        </div>
       
        <p>
        <span style={{ fontWeight: "bold", color: "black", fontSize: "25px", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
        Conseils&nbsp;
       </span>
       </p>

       <p>
       Voici quelques conseils pour prévenir l'arthrose cervicale ou en soulager les symptômes :
       </p>

       <div className="paragraphs"  style={{ marginLeft: "20px" , color:"#807e7e"}}>
      
       <div className="paragraphs"  style={{ marginLeft: "20px" , color:"#807e7e"}}>
       <p>• Adoptez une posture correcte, notamment lors de l'utilisation de l'ordinateur ou du téléphone portable.</p>
       <p>• Pratiquez régulièrement des exercices visant à renforcer les muscles du cou et du dos.</p>
       <p>• Limitez les mouvements répétitifs et les charges lourdes.</p>
       <p>• En cas de douleurs cervicales, consultez un médecin pour un diagnostic et un traitement adaptés.</p>
       </div>
       </div>

       <div className="widget_tag_cloud" style={{marginLeft: "50px"}} >
       <a href="" className="tag-cloud-link">Arthrose</a>
       <a href="" className="tag-cloud-link">cervicale</a>
       <a href="" className="tag-cloud-link">symptômes</a>
       <a href="" className="tag-cloud-link">causes</a>
       <a href="" className="tag-cloud-link">traitements</a>
       </div>


       <div className="pfwidgettitle">
       <div className="sidebar__title" style={{ margin: "15px 15px" , marginTop:"50px"}}>
         A lire aussi ...
       </div>
       <div className="sidebar__title" style={{ margin: "15px 35px" , color: "grey" , marginBottom:"-30px"}}>
         Explorez d'autres magazines passionnants disponibles !
       </div>
     </div>

     <div className="container-fluid">

  <div className="row">
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="pfslides-item">
        <a href="/migraine">
          <div className="mx-auto" style={{ direction: "ltr", textAlign: "left", marginBottom: "30px" }}>
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
    
   

    <div className="col-lg-4 col-md-6 col-sm-12">
    <div className="pfslides-item">
      <a href="#">
        <div className="mx-auto" style={{ direction: "ltr", textAlign: "left", marginBottom: "30px" }}>
          <img src={`${process.env.PUBLIC_URL}/img/spondy.png`} className="lzyloaded img-fluid" style={{ borderRadius: "10px", maxWidth: "100%", height: "290px" }} alt="Spondyloarthrite" />
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
  

    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="pfslides-item">
        <a href="/stress">
          <div className="mx-auto" style={{ direction: "ltr", textAlign: "left", marginBottom: "30px" }}>
            <img src={`${process.env.PUBLIC_URL}/img/stress.png`} className="lzyloaded img-fluid" style={{ borderRadius: "10px", maxWidth: "100%", height: "290px"}} alt="Douleur" />
            <span className="magcatlabel" style={{ backgroundColor: "#312fff", borderRadius: "20px", padding: "2px 10px", width: "fit-content" }}>
              Santé
            </span>
            <div style={{ marginBottom: "10px", fontSize: "15px", fontWeight: "500", color: "#0696D6" }}>
             Comment gérer le stress ?...
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
 
    </div>
    
        </div>
        <div className="right-column">
        <div className="question-block">
        <div className="sidebar__box" style={{paddingLeft:"0", paddingRight:"0"}}>
        <div className="pfwidgettitle">
         <div className="sidebar__title">Questions médicales</div>
        </div>
          <li style={{background:"none", paddingRight:"20px"}}>
          <a href="#" >
           <h2 style={{marginTop:"10px", fontWeight:"600", fontSize:"18px",lineHeight:"170%", color:"#069D7"}}>
           Arthrose cervicale : symptômes, causes et traitements
           </h2>
          </a>
           <p>
           Bonjour, je suis une jeune femme de 25 ans. Je souffre d'arthrose au niveau des vertèbres L4-L5, de scoliose et de rhumatismes. J'éprouve des douleurs intenses dans le bas du dos. Ma question est la suivante : Comment puis-je soulager ces douleurs ? ....
           </p>
          </li>
          <li style={{background:"#FCFCFC", marginBottom:"20px", paddingTop:"5px",paddingBottom:"20px" }}>
          <div className="profile__flex" style={{ marginTop: "10px", textAlign: "left!important", marginRight: "0!important" }}>
          <div style={{ width: "30%", height: "80px", marginBottom: "10px" }}>
            <img src={`${process.env.PUBLIC_URL}/img/femme.avif`} alt="ImageMedecin" />
          </div>
        
          <div class="profile__labels" style={{ display: "flex" }}>
            <div class="profile__label--name" style={{ fontSize: "14px", color: "#0696D6", marginLeft: "10px" }}>
            Mr Rached Ghrabli
            </div>
            <div class="profile__label--spee" style={{ fontSize: "12px", color: "#7C878E", marginBottom: "20px" , marginLeft: "10px"}}>
            Hypnothérapeute
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
export default PagePresentation;
