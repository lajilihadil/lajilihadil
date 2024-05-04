import React from 'react'
import './footerStyle.css'

const Footer = () => {

  return (
    <div>
    {/* Footer */}
    <footer className="text-center text-white" style={{ backgroundColor: '#e7f4fd' }}>
      {/* Grid container */}
      <div>
        {/* Section: Links */}
        <section className="mt-5">
        <div className="row text-center d-flex justify-content-center pt-5">
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="/" className="text-link-black">Acceuil</a>
            </h6>
          </div>
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="/Service1" className="text-link-black">Service</a>
            </h6>
          </div>
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="/Blogs" className="text-link-black">Magazine</a>
            </h6>
          </div>
        
        
          <div className="col-md-2">
            <h6 className="text-uppercase font-weight-bold">
              <a href="/Register" className="text-link-black">Se Connecter</a>
            </h6>
          </div>
        </div>
      </section>
      

        {/* Section: Links */}
        <hr className="my-3" />
        
        <section className="text-center mb-5">
        <a href="#" className="me-4" style={{ color: 'black', marginRight: '30px' }}>
          <i className="fab fa-facebook-f" />
        </a>
        <a href="#" className="me-4" style={{ color: 'black', marginRight: '30px' }}>
          <i className="fab fa-twitter" />
        </a>
        <a href="#" className="me-4" style={{ color: 'black', marginRight: '30px' }}>
          <i className="fab fa-google" />
        </a>
        <a href="#" className="me-4" style={{ color: 'black', marginRight: '30px' }}>
          <i className="fab fa-instagram" />
        </a>
        <a href="#" className="me-4" style={{ color: 'black', marginRight: '30px' }}>
          <i className="fab fa-linkedin" />
        </a>
        <a href="#" className="me-4" style={{ color: 'black' }}>
          <i className="fab fa-github" />
        </a>
      </section>
      
      
      
      
        
      </div>
      {/* Grid container */}
      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: '#e7f4fd' , color:"black"}}>
        © 2024 Copyright :  
        <a className="text-black" href="https://localhost:3000/" > MediSphèreVie</a>
      </div>
      {/* Copyright */}
    </footer>
    {/* Footer */}
  </div>
  

  )
}

export default Footer
