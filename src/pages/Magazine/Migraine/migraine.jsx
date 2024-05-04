import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faEye, faUser } from '@fortawesome/free-solid-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from '../../../components/Footer/Footer';
import './migraine.css';
const migraine = () => {
  return (
    <div>
    <Navbar/>
    <div className="row">
    <div className="magazinetitle" style={{ marginLeft: "20px" , marginTop:"30px", marginBottom:"30px"}}>
      <h1 className="list_title clearfix" style={{ fontWeight: "600", color: "#575134", marginLeft: "20px", textAlign: "left", fontSize: "35px", marginTop: "20px", textTransform: "lowercase", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
      Comment prévenir et soulager les céphalées et les crises de migraines ?
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
              <FontAwesomeIcon icon={faCalendarAlt} />&nbsp;01/05/2023&nbsp;&nbsp;
            </i>
            <i className="pfadmincon-glyph-666">
              <span className="separator"></span>
              <a href="">&nbsp;&nbsp;</a>
              <span className="separator"></span>
            </i>
            <i className="pfadmincon-glyph-729">
              <FontAwesomeIcon icon={faEye} />&nbsp;2165&nbsp;&nbsp;&nbsp;&nbsp;
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
                <img src={`${process.env.PUBLIC_URL}/img/douleur.png`} className="lzyloaded img-fluid" style={{ borderRadius: "10px", maxWidth: "100%",  height: "308px" }} alt="Comment prévenir et soulager les céphalées et les crises de migraines ?" />
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
                <img src={`${process.env.PUBLIC_URL}/img/migraine1.png`} className="lzyloaded img-fluid" style={{ borderRadius: "10px", maxWidth: "100%", height: "308px", border: "2px solid #000" }} alt="Spondyloarthrite" />
                <span className="magcatlabel" style={{ backgroundColor: "#FF1113", borderRadius: "20px", padding: "2px 10px", width: "fit-content" }}>
                 Maux de tete
                </span>
                <div style={{ marginBottom: "10px", fontSize: "15px", fontWeight: "500", color: "#0696D6" }}>
                Migraines - Troubles du cerveau, de la moelle épinière
                </div>
              </div>
            </a>
          </div>
        </div>

       
        
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="pfslides-item">
          <a href="#">
            <div className="mx-auto" style={{ direction: "ltr", textAlign: "left", marginBottom: "30px" }}>
              <img src={`${process.env.PUBLIC_URL}/img/migraine2.png`} className="lzyloaded img-fluid" style={{ borderRadius: "10px", maxWidth: "100%", height: "300px"}} alt="Spondyloarthrite" />
              <span className="magcatlabel" style={{ backgroundColor: "#375fff", borderRadius: "20px", padding: "2px 10px", width: "fit-content" }}>
                Migraine
              </span>
              <div style={{ marginBottom: "10px", fontSize: "15px", fontWeight: "500", color: "#0696D6" }}>
                Identifier et la soulager ..
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
                  src={`${process.env.PUBLIC_URL}/img/douleur.png`}
                  alt="Image"
                  style={{ maxWidth: "80%", maxHeight: "600px" }}
                />
              </div>
                  <div className="image-content">
                    <img
                      src={`${process.env.PUBLIC_URL}/img/migraine1.png`}
                      alt="Image"
                      style={{ maxWidth: "80%", maxHeight: "600px" }}
                    />
                  </div>
               
                  <div className="image-content">
                    <img
                      src={`${process.env.PUBLIC_URL}/img/migraine2.png`}
                      alt="Image"
                      style={{ maxWidth: "80%", maxHeight: "600px" }}
                    />
                  </div>
                </Carousel>
              </div>

              Vous souffrez de maux de tête intenses, que seuls l’obscurité et le calme parviennent à calmer ? Ce type de douleur est caractéristique de la migraine. Cependant, les crises de migraines ne sont pas une fatalité et vous pouvez apprendre à les gérer avec une bonne compréhension des facteurs déclenchants. Un médecin peut également vous prescrire un traitement médicamenteux adapté. Ici, l’équipe médicale de Qare vous revient sur les bons réflexes à adopter en cas de migraine.
            </p>
            <p>
              <span style={{ fontWeight: "bold", color: "black", fontSize: "30px", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
              Quelles sont les causes de la migraine ?&nbsp;?
              </span>
            </p>

            <p>
              <span style={{ fontSize: "18px", color: "#2b78aa", fontStyle: "italic" }}>
              Les facteurs déclenchants des maux de tête :
              </span>
            </p>

            <p style={{marginBottom:"30px"}}>
            Une odeur entêtante ? Une lumière vive ? Un repas copieux la veille ou un repas sauté ? Un verre de vin blanc ? Un stress intense ces derniers jours ? Les règles ? Une cigarette ? Un aliment en particulier (chocolat, charcuterie, …) ? Un excès ou un manque de sommeil ? Tous ces éléments peuvent déclencher une crise chez les personnes à tendance migraineuse. À vous d’enquêter pour essayer de déterminer les facteurs déclenchant de vos maux de tête pour les éviter par la suite. Il peut s’agir d’une diminution de vos leucocytes, cela signifie que vos globules blancs sont en sous nombre, ou une augmentation du volume moyen de globules rouges.
          </p>
            {/* Remainder of your content */}

            <p>
            <span style={{ fontWeight: "bold", color: "black", fontSize: "30px", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
            Les symptômes de la migraine&nbsp;:
            </span>
          </p>
          <p>
          <div style={{ textIndent: "1.5em" ,marginBottom: "30px"}}>
            <p >
            <div>
                <p><span style={{  fontWeight:"bold"}}>1. </span>C’est un mal de tête plus ou moins intense qui arrive de façon progressive.</p>
                <p><span style={{  fontWeight:"bold"}}>2. </span>La douleur s’installe de façon localisée d’un seul côté de la tête.</p>
                <p><span style={{  fontWeight:"bold"}}>3. </span>La douleur ressemble à des battements, vous pouvez parfois décrire cela comme la sensation de sentir son coeur battre dans la tête.</p>
                <p><span style={{  fontWeight:"bold"}}>4. </span>Contrairement au mal de tête classique, la migraine peut s’accompagner de nausées, vomissements.</p>
                <p><span style={{  fontWeight:"bold"}}>5. </span>Vous pouvez ressentir une sensibilité à la lumière, au bruits ou aux odeurs.</p>
                <p><span style={{  fontWeight:"bold"}}>6. </span>Dans certains cas, la migraine peut être précédée de troubles de la vision, de vertiges, de picotements dans le corps, de difficultés à la parole, d’une faiblesse musculaire.</p>
                </div>

            </p>
          </div>

          <span style={{ fontWeight: "bold", color: "black", fontSize: "30px", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
          Comment Eviter les maux de tête&nbsp;?
          </span>
          <div style={{ textIndent: "1.5em" ,marginBottom: "30px"}}>
           
    Pour traiter et éviter les maux de tête et la migraine pendant La période de jeûne et après le déjeuner ALEOMIG est recommandé Comme suit: <br/>

            <p><span style={{  fontWeight:"bold"}}>1. </span>une Capsule une heure et demie après le repas<br/></p>
            
            <p><span style={{  fontWeight:"bold"}}>2. </span>deux Capsules avant le repas de Suhour  20Min</p>
           
          </div>

          <span style={{ fontWeight: "bold", color: "black", fontSize: "30px", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
          Quel traitement pour une migraine pendant les règles &nbsp;?
          </span>

          <div style={{ textIndent: "1.5em",marginBottom: "30px" }}>
            <p >
              - Si les crises de migraines surviennent uniquement pendant les règles, il existe des traitement préventifs que votre médecin peut vous conseiller. Si les migraines surviennent également en dehors des règles, alors le traitement classique à base de paracétamol, AINS ou triptan est efficace dans la plupart de cas. L’aspirine est déconseillée pendant les règles car ce médicament fluidifie le sang.
            </p>
          </div>

          <span style={{ fontWeight: "bold", color: "black", fontSize: "30px", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
          Que faire en cas de migraine pendant la grossesse  &nbsp;?
          </span>
          <div style={{ textIndent: "1.5em",marginBottom: "30px" }}>
            <p>
              - Vous désirez un enfant ou vous êtes enceinte ? Parlez avec votre médecin avant de prendre tout médicament. La plupart des médicaments anti-migraineux sont incompatibles avec une grossesse car ils peuvent présenter une toxicité pour le futur bébé. Privilégiez le paracétamol et ne prenez pas d’aspirine, d’AINS ou de triptans.

              Vous vous demandez comment gérer les crises de migraine pendant la grossesse sans votre traitement ? Rassurez-vous, en raison des changements hormonaux qu’apporte la grossesse, les crises de migraines se font beaucoup plus rares. On parle d’effet lune de miel pour les personnes qui souffrent de migraine.
            </p>
          </div>

         

          <div className="widget_tag_cloud"  >
            <a href="" className="tag-cloud-link" style={{backgroundColor:"#e1edf7"}}>Céphalées</a>
            <a href="" className="tag-cloud-link" style={{backgroundColor:"#e1edf7"}}>mauvais</a>
            <a href="" className="tag-cloud-link" style={{backgroundColor:"#e1edf7"}}>maux de tete</a>
            <a href="" className="tag-cloud-link" style={{backgroundColor:"#e1edf7"}}>crises migraineuses</a>
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
        <img src={`${process.env.PUBLIC_URL}/img/stress1.png`} className="lzyloaded img-fluid" style={{ borderRadius: "10px", maxWidth: "100%", height: "auto" }} alt="Comment prévenir et soulager les céphalées et les crises de migraines ?" />
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
  <Footer/>
    </div>
  )
}

export default migraine
