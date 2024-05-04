import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faEye, faUser } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './stres.css';
import Slider from "react-slick";



const Stress = () => {
  return (
    <div>
      <Navbar />
      <div className="row">
        <div className="magazinetitle" style={{ marginLeft: "20px" }}>
          <h1 className="list_title clearfix" style={{ fontWeight: "600", color: "#575134", marginLeft: "20px", textAlign: "left", fontSize: "35px", marginTop: "20px", textTransform: "lowercase", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
            Gérer le stress
          </h1>
        </div>
        <div className="d-flex justify-content-center">
          <div className="margin_sides" style={{ marginLeft: "50px", marginRight: "60px" }}>
            <div className="pf-container">
              <div className="psy-box-container"></div>
              <article className="post-minfo" style={{ direction: "ltr!important", marginBottom: "20px" }}>

              <div className="gray-background" style={{ width: '100%' }}>
  <hr className="separator" style={{ width: '100%' }}></hr>
  
  <div className="left-content">
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
    <hr className="separator" style={{ width: '467%', marginBottom:'30px' }}></hr>
  </div>
  
</div>




                <div className="post-content" style={{ fontSize: "16px", textAlign: "justify" }}>
                  <p>
                    <div className="carousel-container" style={{ marginBottom: "50px" }}>
                      <Carousel  autoPlay interval={5000} infiniteLoop showIndicators={false} showStatus={false}>
                      <div className="image-content">
                      <img
                        src={`${process.env.PUBLIC_URL}/img/stress.png`}
                        alt="Image"
                        style={{ maxWidth: "60%", maxHeight: "600px" }}
                      />
                    </div>
                        <div className="image-content">
                          <img
                            src={`${process.env.PUBLIC_URL}/img/stress1.png`}
                            alt="Image"
                            style={{ maxWidth: "60%", maxHeight: "600px" }}
                          />
                        </div>
                     
                        <div className="image-content">
                          <img
                            src={`${process.env.PUBLIC_URL}/img/stress2.jpg`}
                            alt="Image"
                            style={{ maxWidth: "80%", maxHeight: "600px" }}
                          />
                        </div>
                      </Carousel>
                    </div>

                    D'après l'Organisation Mondiale de la Santé, le stress survient lorsque les demandes auxquelles une personne est confrontée dépassent ses capacités et ses stratégies personnelles de gestion.
                    En d'autres termes, elle est confrontée à des défis qu'elle ne peut pas surmonter avec ses propres ressources. Dans la vie moderne du 21e siècle, les femmes sont soumises à de nombreuses exigences qui peuvent parfois être difficiles à gérer : travail, famille, enfants, conjoint, amis, etc.
                    Toutes ces responsabilités peuvent engendrer du stress. Il est donc crucial d'identifier les problèmes afin de mieux les maîtriser.
                  </p>
                  <p>
                    <span style={{ fontWeight: "bold", color: "black", fontSize: "25px", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
                      Bon stress et Mauvais stress&nbsp;?
                    </span>
                  </p>

                  <p>
                    <span style={{ fontSize: "18px", color: "#2b78aa", fontStyle: "italic" }}>
                      Les symptômes du stress :
                    </span>
                  </p>

                  <p>
                  Le stress peut entraîner une variété d'autres symptômes, tels que la perte de cheveux,
                  l'eczéma, les maux de dos ou les douleurs diffuses, les règles irrégulières, la diarrhée,
                  la constipation et les douleurs abdominales. Ces manifestations montrent que
                  le stress peut avoir un impact significatif sur la santé à long terme.
                  Cependant, il est important de souligner qu'une consultation médicale est
                  nécessaire pour confirmer que ces symptômes sont effectivement liés au stress.
                  Parfois, une maladie sous-jacente peut être responsable de ces symptômes,
                  et un examen complet par un spécialiste est essentiel pour un diagnostic précis.
                </p>
                  {/* Remainder of your content */}

                  <p>
                  <span style={{ fontWeight: "bold", color: "black", fontSize: "25px", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
                    Comment vaincre le stress&nbsp;?
                  </span>
                </p>
                <p>
                <div style={{ textIndent: "1.5em" ,marginBottom: "30px"}}>
                  <p >
                    - Maintenir un corps sain renforce également l'esprit et le rend plus
                    résistant aux pressions mentales. Intégrez régulièrement de l'activité
                    physique à votre routine quotidienne, car l'exercice est reconnu comme
                    étant le meilleur remède naturel et gratuit contre le stress.
                    Par ailleurs, l'impact de votre alimentation sur votre bien-être
                    mental est significatif. Favorisez les aliments riches en fibres,
                    les glucides complexes, les poissons et les légumes,
                    tout en limitant votre consommation d'excitants tels que l'alcool,
                    la caféine et le tabac.
                  </p>
                </div>
  
  
                <div style={{ textIndent: "1.5em" ,marginBottom: "30px"}}>
                  <p >
                    - Prenez le temps de faire des pauses. Prendre du recul de temps
                    en temps est essentiel pour vous reposer, vider votre esprit et
                    retrouver votre énergie. Essayez des activités telles que le
                    yoga ou la méditation,
                    qui ont démontré leur efficacité dans la gestion du stress.
                  </p>
                </div>
  
                <div style={{ textIndent: "1.5em",marginBottom: "30px" }}>
                  <p >
                    - Ne négligez pas le plaisir. Consacrez du temps à vos loisirs,
                    passions ou à des sorties entre amis, voire à une séance shopping.
                    Ces moments où vous vous éloignez des tracas quotidiens pour vous
                    concentrer sur des activités captivantes peuvent vous offrir un répit
                    bienvenu avant de reprendre le rythme habituel.
                  </p>
                </div>
  
                <div style={{ textIndent: "1.5em",marginBottom: "30px" }}>
                  <p>
                    - Affrontez vos problèmes plutôt que de les éviter ! Comme l'a dit André Gide,
                    les problèmes ne sont pas insurmontables, il n'y a que des solutions à trouver !
                    Cette réflexion mérite d'être prise en considération, n'est-ce pas ?
                    Prenez le temps d'examiner la situation stressante avec pragmatisme,
                    explorez différentes perspectives et parfois, laissez simplement le temps agir.
                    Vous pourriez être surprise par l'évolution des choses.
                  </p>
                </div>
  
                <div style={{ textIndent: "1.5em",marginBottom: "30px" }}>
                  <p >
                    - Établissez une organisation efficace ! Avec toutes les responsabilités d'épouse,
                    de mère et de fille, en plus d'une carrière professionnelle,
                    les tâches peuvent rapidement s'accumuler et paraître insurmontables.
                    Adoptez un emploi du temps rigoureux où vous consignerez toutes
                    vos obligations et rendez-vous. Cela vous aidera à jongler avec
                    toutes ces responsabilités et à vivre de manière plus sereine,
                    malgré les multiples tâches à accomplir !
                  </p>
                </div>
  
                <div className="widget_tag_cloud"  >
                  <a href="" className="tag-cloud-link">bon stress</a>
                  <a href="" className="tag-cloud-link">mauvais</a>
                  <a href="" className="tag-cloud-link">maux de tete</a>
                  <a href="" className="tag-cloud-link">migraibes</a>
                  <a href="" className="tag-cloud-link">nausées</a>
                  <a href="" className="tag-cloud-link">troubles du sommeil</a>
                  <a href="" className="tag-cloud-link">insomnies et cauchemars</a>
                  <a href="" className="tag-cloud-link">chute de cheveux</a>
                  <a href="" className="tag-cloud-link">mal de dos</a>
                  <a href="" className="tag-cloud-link">règles irrégulières</a>
                  <a href="" className="tag-cloud-link">diarrhée</a>
                  <a href="" className="tag-cloud-link">constipation</a>
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
        <a href="/migraine">
          <div className="mx-auto" style={{ direction: "ltr", textAlign: "left", marginBottom: "30px" }}>
            <img src={`${process.env.PUBLIC_URL}/img/douleur.png`} className="lzyloaded img-fluid" style={{ borderRadius: "10px", maxWidth: "100%",height: "290px"  }} alt="Comment prévenir et soulager les céphalées et les crises de migraines ?" />
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
      <a href="/spondy">
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
        <a href="/arthrose">
          <div className="mx-auto" style={{ direction: "ltr", textAlign: "left", marginBottom: "30px" }}>
            <img src={`${process.env.PUBLIC_URL}/img/arthrose.png`} className="lzyloaded img-fluid" style={{ borderRadius: "10px", maxWidth: "100%", height: "290px"}} alt="Douleur" />
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

      <Footer />
    </div>
  );
}

export default Stress;
