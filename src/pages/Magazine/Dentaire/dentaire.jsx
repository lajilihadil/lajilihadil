import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faEye, faUser } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from '../../../components/Footer/Footer';

const dentaire = () => {
  return (
    <div>
    <Navbar/>
    <div className="row">
    <div className="magazinetitle" style={{ marginLeft: "20px" , marginTop:"30px", marginBottom:"30px"}}>
      <h1 className="list_title clearfix" style={{ fontWeight: "600", color: "#575134", marginLeft: "20px", textAlign: "left", fontSize: "35px", marginTop: "20px", textTransform: "lowercase", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
      Détartrage dentaire et sensibilité : comprendre le lien et les solutions
      </h1>
    </div>
    <div className="d-flex justify-content-center">
    <div className="margin_sides" style={{ marginLeft: "50px", marginRight: "70px" }}>
      <div className="pf-container">
        <div className="psy-box-container"></div>
        <article className="post-minfo" style={{ direction: "ltr!important" }}>

          <div className="gray-background" style={{ marginLeft: "0px", marginRight: "0px" }}>
            <hr className="separator"></hr>
            <i className="pfadmincon-glph-29">
              <FontAwesomeIcon icon={faCalendarAlt} />&nbsp;05/05/2023&nbsp;&nbsp;
            </i>
            <i className="pfadmincon-glyph-666">
              <span className="separator"></span>
              <a href="">&nbsp;&nbsp;</a>
              <span className="separator"></span>
            </i>
            <i className="pfadmincon-glyph-729">
              <FontAwesomeIcon icon={faEye} />&nbsp;2965&nbsp;&nbsp;&nbsp;&nbsp;
            </i>
            <i className="pfadmincon-glyph-729">
              <FontAwesomeIcon icon={faUser} />&nbsp;MediShpèreVie&nbsp;&nbsp;
            </i>
            <hr className="separator"></hr>
          </div>


          <div className="container-fluid" style={{marginTop: "-30px"}}>

          <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="pfslides-item">
            <a href="#">
              <div className="mx-auto" style={{ direction: "ltr", textAlign: "left", marginBottom: "30px" }}>
                <img src={`${process.env.PUBLIC_URL}/img/dentaire.png`} className="lzyloaded img-fluid" style={{ borderRadius: "10px", maxWidth: "100%",  height: "308px" }} alt="Comment prévenir et soulager les céphalées et les crises de migraines ?" />
                <span className="magcatlabel" style={{ backgroundColor: "#375fff", borderRadius: "20px", padding: "2px 10px", width: "fit-content" }}>
                  Santé des dents
                </span>
                <div style={{ marginBottom: "10px", fontSize: "15px", fontWeight: "500", color: "#0696D6" }}>
                Détartrage dentaire et sensibilité : comprendre le lien et les solutions

                </div>
              </div>
            </a>
          </div>
          </div>
          
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="pfslides-item">
          <a href="#">
            <div className="mx-auto" style={{ direction: "ltr", textAlign: "left", marginBottom: "30px" }}>
              <img src={`${process.env.PUBLIC_URL}/img/dentaire4.png`} className="lzyloaded img-fluid" style={{ borderRadius: "10px", maxWidth: "100%", height: "310px"}} alt="Spondyloarthrite" />
              <span className="magcatlabel" style={{ backgroundColor: "#375fff", borderRadius: "20px", padding: "2px 10px", width: "fit-content" }}>
                Santé dentaire
              </span>
              <div style={{ marginBottom: "10px", fontSize: "15px", fontWeight: "500", color: "#0696D6" }}>
               Sensibilité dentaire ..
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="pfslides-item">
        <a href="#">
          <div className="mx-auto" style={{ direction: "ltr", textAlign: "left", marginBottom: "30px" }}>
            <img src={`${process.env.PUBLIC_URL}/img/dentaire2.png`} className="lzyloaded img-fluid" style={{ borderRadius: "10px", maxWidth: "100%", height: "308px", border: "2px solid #000" }} alt="Spondyloarthrite" />
            <span className="magcatlabel" style={{ backgroundColor: "#FF1113", borderRadius: "20px", padding: "2px 10px", width: "fit-content" }}>
             Dentaire
            </span>
            <div style={{ marginBottom: "10px", fontSize: "15px", fontWeight: "500", color: "#0696D6" }}>
           Blanchiment dentaire ...
            </div>
          </div>
        </a>
      </div>
    </div>
        
      <span style={{ fontWeight: "bold", color: "black", fontSize: "30px", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
      Migraine : la reconnaître et la soigner&nbsp;?
    </span>
    <p style={{marginBottom:"40px"}}>
La migraine est une forme de céphalée particulièrement intense et souvent invalidante, qui affecte jusqu'à quatre fois plus les femmes que les hommes. Elle commence généralement après la puberté et peut persister tout au long de la vie. Bien que non mortelle, cette affection est extrêmement perturbante et a un impact significatif sur la vie de ceux qui en souffrent. Selon l'OMS (Organisation Mondiale de la Santé), la migraine est classée comme la 20ème maladie la plus handicapante, altérant considérablement la qualité de vie.

Les symptômes de la migraine se caractérisent généralement par des maux de tête sévères, localisés sur un seul côté de la tête, et peuvent durer jusqu'à 72 heures. Ils s'accompagnent souvent de nausées, d'une sensibilité accrue à la lumière (photophobie), de troubles visuels, d'une grande fatigue et d'irritabilité.
          
</p>  
          </div>
          </div>


          <div className="post-content" style={{ fontSize: "16px", textAlign: "justify" }}>
            <p>
              <div className="carousel-container" style={{ marginBottom: "50px" }}>
                <Carousel  autoPlay interval={5000} infiniteLoop showIndicators={false} showStatus={false}>
                <div className="image-content">
                <img
                  src={`${process.env.PUBLIC_URL}/img/dentaire.png`}
                  alt="Image"
                  style={{ maxWidth: "60%", maxHeight: "500px" }}
                />
              </div>
                  <div className="image-content">
                    <img
                      src={`${process.env.PUBLIC_URL}/img/dentaire4.png`}
                      alt="Image"
                      style={{ maxWidth: "60%", maxHeight: "500px" }}
                    />
                  </div>
               
                  <div className="image-content">
                    <img
                      src={`${process.env.PUBLIC_URL}/img/dentaire2.png`}
                      alt="Image"
                      style={{ maxWidth: "60%", maxHeight: "500px" }}
                    />
                  </div>
                </Carousel>
              </div>

              Le détartrage dentaire est une procédure clinique essentielle pour maintenir une bonne hygiène bucco-dentaire. Il permet d'éliminer le tartre, une substance dure qui se dépose sur les dents et peut causer des problèmes gingivaux et des caries. Cependant, il est fréquent de ressentir une sensibilité dentaire après un détartrage. Cet article explore le lien entre le détartrage et la sensibilité, et propose des solutions pour prévenir et soulager cet inconfort.
            </p>
            <p>
              <span style={{ fontWeight: "bold", color: "black", fontSize: "30px", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
              Le détartrage et ses effets sur la sensibilité &nbsp;
              </span>
            </p>

           

            <p style={{marginBottom:"30px"}}>
            Le détartrage utilise des instruments ultrasoniques qui vibrent pour éliminer le tartre. Cette vibration peut causer une légère irritation de la dentine, la couche interne de la dent qui est naturellement plus sensible. De plus, le tartre peut agir comme une couche protectrice en masquant les zones sensibles de la dent. Son élimination peut donc exposer ces zones et les rendre plus sensibles aux stimuli froids, chauds ou acides.

          </p>
            {/* Remainder of your content */}

            <p>
            <span style={{ fontWeight: "bold", color: "black", fontSize: "30px", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
             Facteurs de risque de sensibilité après un détartrage&nbsp;:
            </span>
          </p>
          <p>
          <div style={{ textIndent: "1.5em" ,marginBottom: "30px"}}>
            <p >
            <div>
                <p><span style={{  fontWeight:"bold"}}>1.Récession gingivale :  </span>Si vos gencives se sont rétractées, la racine de la dent, qui est plus sensible, est exposée.</p>
                <p><span style={{  fontWeight:"bold"}}>2.Usure de l'émail : </span> L'émail est la couche protectrice externe de la dent. Son usure peut exposer la dentine et augmenter la sensibilité.</p>
                <p><span style={{  fontWeight:"bold"}}>3.Certaines pathologies :  </span>Des pathologies comme l'hypersensibilité dentinaire ou le bruxisme peuvent également rendre les dents plus sensibles.</p>
                </div>

            </p>
          </div>

          <span style={{ fontWeight: "bold", color: "black", fontSize: "30px", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
          Solutions pour prévenir et soulager la sensibilité&nbsp;:
          </span>
          <div style={{ textIndent: "1.5em" ,marginBottom: "30px"}}>
           
          <p style={{ fontSize:"18px", color: "#2b78aa"}}>Avant le détartrage :</p>
            <p><span style={{  fontWeight:"bold"}}>1.Parlez à votre dentiste : </span> Si vous avez des antécédents de sensibilité dentaire, informez votre dentiste avant la procédure. Il pourra adapter son approche et vous proposer des solutions préventives.<br/></p>
            
            <p><span style={{  fontWeight:"bold"}}>2.Utilisez un dentifrice pour dents sensibles : </span> Commencez à utiliser un dentifrice pour dents sensibles quelques jours avant le détartrage. Ces dentifrices contiennent des agents qui aident à bloquer les canaux dentinaires et à réduire la sensibilité.</p>
           
          </div>

          <div style={{ textIndent: "1.5em" ,marginBottom: "30px"}}>
           
          <p style={{ fontSize:"18px", color: "#2b78aa"}}>Après le détartrage :</p>
            <p><span style={{  fontWeight:"bold"}}>1.Brossez-vous les dents avec un dentifrice pour dents sensibles : </span> Continuez à utiliser un dentifrice pour dents sensibles après le détartrage.<br/></p>
            
            <p><span style={{  fontWeight:"bold"}}>2.Utilisez un bain de bouche fluoré : </span> Le fluor aide à renforcer les dents et à réduire la sensibilité.</p>
           
          </div>
         
          <span style={{ fontWeight: "bold", color: "black", fontSize: "30px", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
         Conclusion &nbsp;:
          </span>
          <div style={{ textIndent: "1.5em",marginBottom: "30px", color:"grey" }}>
            <p >
            La sensibilité dentaire après un détartrage est un phénomène fréquent et généralement temporaire. En suivant les conseils de votre dentiste et en adoptant une bonne hygiène bucco-dentaire, vous pouvez prévenir et soulager cet inconfort. Si la sensibilité persiste plusieurs semaines après le détartrage, il est important de consulter votre dentiste pour identifier la cause et obtenir un traitement adéquat.
            </p>
          </div>

          
          <div className="widget_tag_cloud"  >
            <a href="" className="tag-cloud-link" style={{backgroundColor:"rgb(232, 190, 7)"}}>Detartrage</a>
            <a href="" className="tag-cloud-link" style={{backgroundColor:"rgb(232, 190, 7)"}}>Dentaire</a>
            <a href="" className="tag-cloud-link" style={{backgroundColor:"rgb(232, 190, 7)"}}>sensibilité</a>
            <a href="" className="tag-cloud-link" style={{backgroundColor:"rgb(232, 190, 7)"}}>comprendre</a>
          </div>

          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-md-3">
              <div className="card-medecin">
                <img src={`${process.env.PUBLIC_URL}/img/stress.jpg`} alt="ImageMedecin" />
                <div className="card-body">
                  <p className="card-text">Nom du médecin:</p>
                  <p className="card-text">Spécialité du médecin:</p>
                  <p className="card-text">Adresse du médecin:</p>
                  <button className="btn btn-custom">Prendre Rendez-vous</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-medecin">
                <img src={`${process.env.PUBLIC_URL}/img/stress.jpg`} alt="ImageMedecin" />
                <div className="card-body">
                  <p className="card-text">Nom du médecin:</p>
                  <p className="card-text">Spécialité du médecin:</p>
                  <p className="card-text">Adresse du médecin:</p>
                  <button className="btn btn-custom">Prendre Rendez-vous</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-medecin">
                <img src={`${process.env.PUBLIC_URL}/img/stress.jpg`} alt="ImageMedecin" />
                <div className="card-body">
                  <p className="card-text">Nom du médecin:</p>
                  <p className="card-text">Spécialité du médecin:</p>
                  <p className="card-text">Adresse du médecin:</p>
                  <button className="btn btn-custom">Prendre Rendez-vous</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card-medecin">
                <img src={`${process.env.PUBLIC_URL}/img/stress.jpg`} alt="ImageMedecin" />
                <div className="card-body">
                  <p className="card-text">Nom du médecin:</p>
                  <p className="card-text">Spécialité du médecin:</p>
                  <p className="card-text">Adresse du médecin:</p>
                  <button className="btn btn-custom">Prendre Rendez-vous</button>
                </div>
              </div>
            </div>
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
      <a href="/spondy">
        <div className="mx-auto" style={{ direction: "ltr", textAlign: "left", marginBottom: "30px" }}>
          <img src={`${process.env.PUBLIC_URL}/img/spondy2.png`} className="lzyloaded img-fluid" style={{ borderRadius: "10px", maxWidth: "100%", height: "290px" }} alt="Spondyloarthrite" />
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
        <img src={`${process.env.PUBLIC_URL}/img/stress.png`} className="lzyloaded img-fluid" style={{ borderRadius: "10px", maxWidth: "100%", height: "auto" }} alt="Comment prévenir et soulager les céphalées et les crises de migraines ?" />
        <span className="magcatlabel" style={{ backgroundColor: "#375fff", borderRadius: "20px", padding: "2px 10px", width: "fit-content" }}>
          Santé
        </span>
        <div style={{ marginBottom: "10px", fontSize: "15px", fontWeight: "500", color: "#0696D6" }}>
        Comment gérer le stress ?...
        </div>
      </div>
    </a>
  </div>
</div>

    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="pfslides-item">
        <a href="/arthrose">
          <div className="mx-auto" style={{ direction: "ltr", textAlign: "left", marginBottom: "30px" }}>
            <img src={`${process.env.PUBLIC_URL}/img/arthrose2.png`} className="lzyloaded img-fluid" style={{ borderRadius: "10px", maxWidth: "100%", height: "290px"}} alt="Douleur" />
            <span className="magcatlabel" style={{ backgroundColor: "#312fff", borderRadius: "20px", padding: "2px 10px", width: "fit-content" }}>
              Douleur
            </span>
            <div style={{ marginBottom: "10px", fontSize: "15px", fontWeight: "500", color: "#0696D6" }}>
              Arthrose cervicale : symptômes, causes et traitements
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>



        </p>
          </div>
   

        </article>
      </div>
    </div>
  </div>
  

  </div>
  <Footer/>
    </div>
  )
}

export default dentaire
