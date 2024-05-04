import React from 'react'

const erreur = () => {
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light "  style={{ backgroundColor: '#45a9f1',height:"88px" }} >
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="/">
    <img src='/img/MediSphèreVie3.png' style={{ height: '77px' ,marginTop:'-10px'}}></img></a>
 
  </nav>

  <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: ''}}>
 
  <img src='/img/404.jpg' style={{ height:'600px', marginTop:'60px', marginLeft:'190px'}}></img>
  
  </div>
  <div className="d-flex justify-content-center align-items-center vh-100">
  <img src='/img/404_1.png' style={{height:'160px',marginTop:'-76%'}}></img>
  </div>

  <div className="d-flex justify-content-center align-items-center vh-100">
  <img src='/img/404_3.png' style={{height:'460px',marginTop:'-33%', marginRight:'89%'}}></img>
  </div>

  <div className="text-center p-3" style={{ backgroundColor: '#e7f4fd' , color:"black",marginTop:'0px'}}>
        © 2024 Copyright :  
        <a className="text-black" href="https://localhost:3000/" > MediSphèreVie</a>
      </div>
    </div>
  )
}

export default erreur
