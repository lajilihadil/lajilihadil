import React, { useState, useEffect } from 'react';
import './doc.css';

const Doc = () => { 
    return (
        <section class="meet-doctor" style={{marginLeft:'-35px'}} >
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <div class="big-title">
        <h3>Rencontrez nos médecins spécialistes</h3>
        <span class="under"></span>
      </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 col-6">
        <div class=" doc-card text-center p-0">
      <a href="single-doc.html">
            <div class="card-content">
              <div class="card-imgg">
              <img src="./img/1.jpg" alt="an image here" class=""/>
                <div class="doc-ovrly"></div>
              </div>
              <div class="card-detail text-center">
              <p><i class="fas fa-user-md"></i> Dr.fok aya</p>
              <p><i class="fas fa-stethoscope"></i>sayeb baba</p>
              </div>
            </div>
          </a> 
          <ul class="list-inline list-unstyled text-center">
            
            <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        
        
            <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
       
       
            <li class="list-inline-item"> <a href="#"><i class="fab fa-instagram"></i></a></li>
       
        
            <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
       
          </ul>
      </div>
      </div>
  
      <div class="col-md-3 col-6">
        <div class=" doc-card text-center p-0">
      <a href="single-doc.html">
            <div class="card-content">
              <div class="card-imgg">
              <img src="./img/2.jpg" alt="an image here" class=""/>
                <div class="doc-ovrly"></div>
              </div>
              <div class="card-detail text-center">
              <p><i class="fas fa-user-md"></i> Dr.flen fouleni</p>
              <p><i class="fas fa-stethoscope"></i>specialité fouleniya</p>
              </div>
            </div>
          </a> 
          <ul class="list-inline list-unstyled text-center">
            
            <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        
        
            <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
       
       
            <li class="list-inline-item"> <a href="#"><i class="fab fa-instagram"></i></a></li>
       
        
            <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
       
          </ul>
      </div>
      </div>

      <div class="col-md-3 col-6">
        <div class=" doc-card text-center p-0">
      <a href="single-doc.html">
            <div class="card-content">
              <div class="card-imgg">
              <img src="./img/3.jpg" alt="an image here" class=""/>
                <div class="doc-ovrly"></div>
              </div>
              <div class="card-detail text-center">
              <p><i class="fas fa-user-md"></i> Dr.hadil romdhani</p>
              <p><i class="fas fa-stethoscope"></i>Ophtalmologue</p>
              </div>
            </div>
          </a> 
          <ul class="list-inline list-unstyled text-center">
            
            <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        
        
            <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
       
       
            <li class="list-inline-item"> <a href="#"><i class="fab fa-instagram"></i></a></li>
       
        
            <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
       
          </ul>
      </div>
      </div>

      <div class="col-md-3 col-6">
        <div class=" doc-card text-center p-0">
      <a href="single-doc.html">
            <div class="card-content">
              <div class="card-imgg">
              <img src="./img/4.jpg" alt="an image here" class=""/>
                <div class="doc-ovrly"></div>
              </div>
              <div class="card-detail text-center">
              <p><i class="fas fa-user-md"></i> Dr.farouk mahmoud</p>
              <p><i class="fas fa-stethoscope"></i>Opticien</p>
              </div>
            </div>
          </a> 
          <ul class="list-inline list-unstyled text-center">
            
            <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        
        
            <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
       
       
            <li class="list-inline-item"> <a href="#"><i class="fab fa-instagram"></i></a></li>
       
        
            <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
       
          </ul>
      </div>
      </div>

      <div class="col-md-3 col-6">
        <div class=" doc-card text-center p-0">
      <a href="single-doc.html">
            <div class="card-content">
              <div class="card-imgg">
              <img src="./img/1.jpg" alt="an image here" class=""/>
                <div class="doc-ovrly"></div>
              </div>
              <div class="card-detail text-center">
              <p><i class="fas fa-user-md"></i> Dr.hamdi bben salem</p>
              <p><i class="fas fa-stethoscope"></i>Dentiste</p>
              </div>
            </div>
          </a> 
          <ul class="list-inline list-unstyled text-center">
            
            <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        
        
            <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
       
       
            <li class="list-inline-item"> <a href="#"><i class="fab fa-instagram"></i></a></li>
       
        
            <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
       
          </ul>
      </div>
      </div>

      <div class="col-md-3 col-6">
        <div class=" doc-card text-center p-0">
      <a href="single-doc.html">
            <div class="card-content">
              <div class="card-imgg">
              <img src="./img/2.jpg" alt="an image here" class=""/>
                <div class="doc-ovrly"></div>
              </div>
              <div class="card-detail text-center">
              <p><i class="fas fa-user-md"></i> Dr.salem sayadi</p>
              <p><i class="fas fa-stethoscope"></i>Psychologue</p>
              </div>
            </div>
          </a> 
          <ul class="list-inline list-unstyled text-center">
            
            <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        
        
            <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
       
       
            <li class="list-inline-item"> <a href="#"><i class="fab fa-instagram"></i></a></li>
       
        
            <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
       
          </ul>
      </div>
      </div>

      <div class="col-md-3 col-6">
        <div class=" doc-card text-center p-0">
      <a href="#">
            <div class="card-content">
              <div class="card-imgg">
              <img src="./img/3.jpg" alt="an image here" class=""/>
                <div class="doc-ovrly"></div>
              </div>
              <div class="card-detail text-center">
              <p><i class="fas fa-user-md"></i> Dr.mahmoud sami</p>
              <p><i class="fas fa-stethoscope"></i>Cardiologue</p>
              </div>
            </div>
          </a> 
          <ul class="list-inline list-unstyled text-center">
            
            <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        
        
            <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
       
       
            <li class="list-inline-item"> <a href="#"><i class="fab fa-instagram"></i></a></li>
       
        
            <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
       
          </ul>
      </div>
      </div>

      <div class="col-md-3 col-6">
        <div class=" doc-card text-center p-0">
      <a href="single-doc.php.html">
            <div class="card-content">
              <div class="card-imgg">
                <img src="./img/4.jpg" alt="an image here" class=""/>
                <div class="doc-ovrly"></div>
              </div>
              <div class="card-detail text-center">
              <p><i class="fas fa-user-md"></i> Dr.safia kh</p>
              <p><i class="fas fa-stethoscope"></i>Génecologue</p>
              </div>
            </div>
          </a> 
          <ul class="list-inline list-unstyled text-center">
            
            <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
        
        
            <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
       
       
            <li class="list-inline-item"> <a href="#"><i class="fab fa-instagram"></i></a></li>
       
        
            <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
       
          </ul>
      </div>
      </div>
    </div>

  <div class="text-center more-btn">
    <a href="doctor.html" class=" btn btn-primary">See More</a>
  </div>
    </div>




</section>
    )
};
export default Doc;
