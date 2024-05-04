import React from 'react'
import Navbar from '../../../components/Navbar/Navbar'

import Footer from '../../../components/Footer/Footer';
import './magazine.css'
const magazine = () => {
  return (
    <div>
    <Navbar/>
    <div className="row">
    <div className="magazinetitle" style={{ marginLeft: "20px" , marginTop:"30px", marginBottom:"30px"}}>
      <h1 className="list_title clearfix" style={{ fontWeight: "600", color: "#575134", marginLeft: "20px", textAlign: "left", fontSize: "35px", marginTop: "20px", textTransform: "lowercase", fontFamily: "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif" }}>
          Magazine Médical
      </h1>
      <div class="pf-breadcrumbs pf-breadcrumbs-special" style={{marginTop: "20px", fontSize:"15px", color:"grey"}}>
      <ul id="pfcrumbs" itemScope itemType="https://schema.org/BreadcrumbList">
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <a itemProp="item" href="/">
            <span itemProp="name">Accueil </span> / 
          </a>
          <a itemProp="item" title="Magazine Médical" href="/magazine">
            <span itemProp="name"> Magazine Médical</span>
          </a>
          <meta itemProp="position" content="1" />
        </li>
      </ul>
    </div>
    </div>




    <div class="margin_sides">
    <div class="pf-container">
      <div class="row align-items-center">
        <div class="col-auto">
       
        </div>
      </div>
    </div>
  </div>
  

  


    <div className="d-flex justify-content-center">
    <div className="margin_sides" style={{ marginLeft: "50px", marginRight: "70px" }}>
      <div className="pf-container">
        <div className="psy-box-container"></div>
        <div className="widget__cloud" style={{marginLeft: "50px"}} >
        <a href="" className="tag-cloud-link"><img src="https://cdn.med.tn/img/icon/cm5.svg" width={26} height={26} alt /> Grossesse et accouchement</a>
        <a href="" className="tag-cloud-link"><img src="https://cdn.med.tn/img/icon/cm2.svg" width={26} height={26} alt /> Psycho et Sexualité</a>
        <a href="" className="tag-cloud-link"><img src="https://cdn.med.tn/img/icon/cm7.svg" width={26} height={26} alt /> Santé</a>
        <a href="" className="tag-cloud-link"><img src="https://cdn.med.tn/img/icon/cm8.svg" width={26} height={26} alt /> Beauté et Bien-être</a>
        <a href="" className="tag-cloud-link"><img src="https://cdn.med.tn/img/icon/cm1.svg" width={26} height={26} alt /> Nutrition</a>
        </div>
        <article className="post-minfo" style={{ direction: "ltr!important" }}>



          <div className="container-fluid d-flex justify-content-center" style={{marginTop: "-30px"}} >

          <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="pfslides-item">
            <a href="/Dentaire">
              <div className="mx-auto" style={{ direction: "ltr", textAlign: "left", marginBottom: "30px" }}>
                <img src={`${process.env.PUBLIC_URL}/img/dentaire2.png`} className="lzyloaded img-fluid" style={{ borderRadius: "10px", maxWidth: "100%",  height: "308px" }} alt="Comment prévenir et soulager les céphalées et les crises de migraines ?" />
                <span className="magcatlabel" style={{ backgroundColor: "#375fff", borderRadius: "20px", padding: "2px 10px", width: "fit-content" }}>
                  Santé des dents
                </span>
                <div style={{ marginBottom: "10px", fontSize: "15px", fontWeight: "500", color: "#0696D6" }}>
                 Blanchiments Dentaires ...

                </div>
              </div>
            </a>
          </div>
          </div>
          
          
          
          <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="pfslides-item">
            <a href="/migraine">
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
          <a href="/migraine">
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


      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="pfslides-item">
          <a href="/migraine">
            <div className="mx-auto" style={{ direction: "ltr", textAlign: "left", marginBottom: "30px" }}>
              <img src={`${process.env.PUBLIC_URL}/img/stress.png`} className="lzyloaded img-fluid" style={{ borderRadius: "10px", maxWidth: "100%", height: "300px"}} alt="Spondyloarthrite" />
              <span className="magcatlabel" style={{ backgroundColor: "#375fff", borderRadius: "20px", padding: "2px 10px", width: "fit-content" }}>
              Santé
              </span>
              <div style={{ marginBottom: "10px", fontSize: "15px", fontWeight: "500", color: "#0696D6" }}>
              Comment gérer le stress ?..
              </div>
            </div>
          </a>
        </div>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="pfslides-item">
          <a href="/spondy">
            <div className="mx-auto" style={{ direction: "ltr", textAlign: "left", marginBottom: "30px" }}>
              <img src={`${process.env.PUBLIC_URL}/img/spondy.png`} className="lzyloaded img-fluid" style={{ borderRadius: "10px", maxWidth: "100%", height: "300px"}} alt="Spondyloarthrite" />
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
            <img src={`${process.env.PUBLIC_URL}/img/arthrose.png`} className="lzyloaded img-fluid" style={{ borderRadius: "10px", maxWidth: "100%", height: "300px"}} alt="Spondyloarthrite" />
            <span className="magcatlabel" style={{ backgroundColor: "#375fff", borderRadius: "20px", padding: "2px 10px", width: "fit-content" }}>
            Douleur
            </span>
            <div style={{ marginBottom: "10px", fontSize: "15px", fontWeight: "500", color: "#0696D6" }}>
            Arthrose cervicale : symptômes, causes et traitements
      
            </div>
          </div>
        </a>
      </div>
    </div>


    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="pfslides-item">
        <a href="/dentaire">
          <div className="mx-auto" style={{ direction: "ltr", textAlign: "left", marginBottom: "30px" }}>
            <img src={`${process.env.PUBLIC_URL}/img/dentaire.png`} className="lzyloaded img-fluid" style={{ borderRadius: "10px", maxWidth: "100%", height: "300px"}} alt="Spondyloarthrite" />
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
      <a href="/migraine">
        <div className="mx-auto" style={{ direction: "ltr", textAlign: "left", marginBottom: "30px" }}>
          <img src={`${process.env.PUBLIC_URL}/img/douleur.png`} className="lzyloaded img-fluid" style={{ borderRadius: "10px", maxWidth: "100%", height: "300px"}} alt="Spondyloarthrite" />
          <span className="magcatlabel" style={{ backgroundColor: "#FF1113", borderRadius: "20px", padding: "2px 10px", width: "fit-content" }}>
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
    <a href="/dentaire">
      <div className="mx-auto" style={{ direction: "ltr", textAlign: "left", marginBottom: "30px" }}>
        <img src={`${process.env.PUBLIC_URL}/img/dentaire4.png`} className="lzyloaded img-fluid" style={{ borderRadius: "10px", maxWidth: "100%", height: "300px"}} alt="Spondyloarthrite" />
        <span className="magcatlabel" style={{ backgroundColor: "#375fff", borderRadius: "20px", padding: "2px 10px", width: "fit-content" }}>
         Sensibilité
        </span>
        <div style={{ marginBottom: "10px", fontSize: "15px", fontWeight: "500", color: "#0696D6" }}>
          Sensibilité des dents ..
        </div>
      </div>
    </a>
  </div>
</div>
        
      
          </div>
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

export default magazine
