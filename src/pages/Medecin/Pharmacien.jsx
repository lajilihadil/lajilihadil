import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCheck} from '@fortawesome/free-solid-svg-icons';
import './medecin.css';
import { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './medecin.css';
import {
  faStethoscope,
  faUserMd,
  faTooth,
  faBrain,
  faHandshake,
  faBabyCarriage,
  faGlasses,
  faCapsules,
  faUserNurse,
} from '@fortawesome/free-solid-svg-icons';
import medecinService from '../Services/medecinService';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Pharmacien = () => {

  const [specialite, setSpecialite] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  // Fonction pour gérer l'ouverture et la fermeture de la dropdown
  const handleDropdownToggle = () => {
    const dropdownMenu = document.getElementById('navbarDropdownMenu');
    dropdownMenu.classList.toggle('show');
  };

  // Fonction pour fermer la dropdown lorsque la souris quitte la zone de la dropdown
  const handleDropdownLeave = () => {
    const dropdownMenu = document.getElementById('navbarDropdownMenu');
    dropdownMenu.classList.remove('show');
  };

  const [data, setData] = useState({});
  const navigate = useNavigate()

  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

 //specialite inclus dans la base de donnée 
  const formData = {
    ...data,
    specialite,
  };

const onSubmitHandler= (e) => {

  e.preventDefault()
  // Vérifiez si la spécialité n'est pas vide avant de soumettre
  if (!specialite) {
    console.error('Specialite should not be empty');
    return;
  }
   medecinService
    .create(formData)  // donnee data => toul lil back 

      .then((res)=>{
         console.log(res);
         Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Medecin created successfully!',
          showConfirmButton: false,
          timer: 1500,
        });
        
         navigate("/AccountM")
    })
    .catch((err)=>
         console.log(err));
         Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Created failed! Please check your credentials.',
        });

           
  }
  const handleSpecialiteClick = (value) => {
    if (value) {
      setSpecialite(value);
      setData({
        ...data,
        specialite: value,
      });
    }
  };

  useEffect(() => {
    // Mettre à jour l'état de la spécialité lorsque le composant est monté
    setSpecialite('Pharmacien');
  }, []);

  return (
    <div style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/img/imag1.png)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',  // Ajustez selon vos besoins
    }}>

      {/* Navbar*/}
      <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: '#001f3f' }}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/" style={{ color: 'white' }}>MediShpèreVie</a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item ">
              <a className="nav-link" href="/" style={{ color: 'white' }}>Vous êtes <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Service" style={{ color: 'white' }}>Service</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Login" style={{ color: 'white' }}>Se Connecter</a>
            </li>

            <li className="nav-item dropdown" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownLeave}>
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" style={{ color: 'white' }} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Vous êtes
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown" id="navbarDropdownMenu">
              <a className="dropdown-item" href="/Medecin" >
              <FontAwesomeIcon icon={faStethoscope} className="mr-2" />
              Médecin généraliste
               </a>
                       
                <a className="dropdown-item" href="/Chirugien" >
                    <FontAwesomeIcon icon={faTooth} className="mr-2" />
                    Chirurgien-dentiste
                </a>
                <a className="dropdown-item" href="/Masseurkinésithérapeute">
                  <FontAwesomeIcon icon={faHandshake} className="mr-2" />
                  Masseur-kinésithérapeute
                </a>
                <a className="dropdown-item" href="/Psychologe" >
                  <FontAwesomeIcon icon={faBrain} className="mr-2" />
                  Psychologue
                </a>
                <a className="dropdown-item" href="/PedicurePodologue">
                  <FontAwesomeIcon icon={faBabyCarriage} className="mr-2" />
                  Pédicure-Podologue
                </a>
                <a className="dropdown-item" href="/Sagefemme" >
                  <FontAwesomeIcon icon={faUserNurse} className="mr-2" />
                  Sage Femme
                </a>
                <a className="dropdown-item" href="#" onClick={() => handleSpecialiteClick('Sage-Femme')}>
                  <FontAwesomeIcon icon={faGlasses} className="mr-2" />
                  Opticien / Audioprothésiste
                </a>
                <a className="dropdown-item" href="#">
                  <FontAwesomeIcon icon={faCapsules} className="mr-2" />
                  Pharmacien
                </a>
                <a className="dropdown-item" href="#">
                  <FontAwesomeIcon icon={faBrain} className="mr-2" />
                  Infirmier
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">

          </form>
        </div>
      </nav>

      <div className="container">
    
      <div className="row ">
        {/* For Demo Purpose */}
        <div className='hero-form-yellow__content '>
        <div className='hero-form-yellow-title'>
        <p
        className='title title--large'
        style={{
          fontSize: isHovered ? '2.5em' : '2em',
          color: isHovered ? 'rgb(2, 63, 92)' : 'inherit',
          cursor: 'pointer',
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      ><FontAwesomeIcon icon={faCapsules} style={{ marginRight: '10px' }}/>
        Pharmacien
      </p>
          <h1 className='title title--xxxlarge title--doodle2' style={{ fontSize: '25px' ,  color: '#7c9fc3' }}>
            La solution pour dévélopper l'activité de votre cabinet </h1>
        </div>
        <p className='title title--large'>
          "Améliorez la visibilité en ligne de votre officine pour attirer et fidéliser votre patientèle."
        </p>

        <ul className='hero-form-yellow__list'>
        <li className='icon-text'>
          <FontAwesomeIcon icon={faCheck} className='arrow-icon' />
          <p className='paragraoh icon-text__text paragraph--bold'>
        Agenda de prise de RDV 100% adaptab le à votre organisation
          </p>
        </li>
      
        <li className='icon-text'>
          <FontAwesomeIcon icon={faCheck} className='arrow-icon' />
          <p className='paragraoh icon-text__text paragraph--bold'>
           Motifs de consultation dédiés pour l'ensemble de vos missions
          </p>
        </li>

        <li className='icon-text'>
          <FontAwesomeIcon icon={faCheck} className='arrow-icon' />
          <p className='paragraoh icon-text__text paragraph--bold'>
           Outil de communication ciblées et personnalisables 100%
          </p>
        </li>
      </ul>
      </div>

        <div className="col-md-5 order-md-2 form-container">
          <form action="#" method="post" className='row pt-4' onSubmit={onSubmitHandler}>
           
              <p className="form-header">
                Remplissez ce formulaire pour créer votre fiche médecin
              </p>



              <div className='col-sm-6 col-xs-12 mbxs mb-3'>
              <label className='form-label'>Adresse mail</label>
              <input
                type="email"
                className='form-control'
                placeholder="Tapez votre e-mail"
                name="email"
                id="email"
                onChange={onChangeHandler}
                style={{
                  width: '220%',  // Ajustez la largeur selon vos préférences
                }}
              />
            </div>

         
            <div className='col-sm-6 col-xs-12 mbxs '></div>

            <div className='col-sm-6 col-xs-12 mbxs '>
              <label className='form-label'>Gouvernorat</label>
              <select className='form-select' aria-label="Default select example" name="gouvernorat" id="gouvernorat" onChange={onChangeHandler}>
                <option value="" selected>Sélectionnez votre gouvernorat</option>
                <option value="1">Ariana</option>
              </select>
            </div>




            <div className='col-sm-6 col-xs-12 mbxs mb-3'>
            <label className="form-label">Pays</label>
            <select className='form-select' aria-label="Default select example" name="pays" id="pays" onChange={onChangeHandler}>
              <option value="" selected>Sélectionnez votre pays</option>
              <option value="Tu">Tunisie</option>
            </select>
          </div>


          

            <div className='col-sm-6 col-xs-12 mbxs mb-4'>
              <label className='form-label'>Nom</label>
              <input type="text" className='form-control' placeholder="Tapez votre nom" name="nom" id="nom"  onChange={onChangeHandler}/>
            </div>

            <div className='col-sm-6 col-xs-12 mbxs mb-4 '>
              <label className='form-label'>Prénom</label>
              <input type="text" className='form-control' placeholder="Tapez votre prénom" name="prenom" id="prenom" onChange={onChangeHandler} />
            </div>

            <div className='col-sm-6 col-xs-12 mbxs mb-4'>
            <label className='form-label'>Spécialité</label>
            <input
              type="text"
              className={`form-control ${specialite === 'Pharmacien' ? 'selected' : ''}`}
              placeholder="Votre spécialité"
              name="specialite"
              id="specialite"
              value={specialite}
              onChange={onChangeHandler} // Utilisez la fonction de mise à jour spécifique pour la spécialité
              style={{
                fontWeight: 'bold'
              }}
              />
          </div>
          
          

            <div className='col-sm-6 col-xs-12 mbxs mb-3'>
              <label className='form-label'>Téléphone Mobile</label>
              <input type="tel" className='form-control' placeholder="Tapez votre numéro de téléphone" name="telephone" id="telephone" 
              onChange={onChangeHandler}
              />
            </div>

            <div className='col-sm-12 col-xs-12 mbxsmb-3'>
              <div className='form-check'>
                <input type="checkbox" className='form-check-input' id="accepterms" />
                <label className='form-check-label' htmlFor="accepterms">
                  J'accepte les <a href="#">CGU</a> ainsi que <a href="#">La charte de MédiSphèreVie</a>
                </label>
              </div>
            </div>

            <div className='col-sm-12 col-xs-12 mbxs mb-3'>
            <input type="hidden" name="action" value="submit" />
            <button className="btn custom-btn btn-sm mt-4 mb-sm-5 p-2" type="submit" id="submit_btn">Soumettre ma demande</button>
          </div>
          </form>
        </div>
      </div>
      </div>
    </div>
  
  );
}

export default Pharmacien;
