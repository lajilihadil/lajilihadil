import Footer from '../../../components/Footer/Footer';
import Card from '../../Carts/Card';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SignOutService from '../../Services/SignOutService';

const HomePatient = () => {
    //image de la page home patient
    const data = [
        { phrase: 'un dentiste', image: 'img1.jpeg' },
        { phrase: 'un pédiatre', image: 'img2.jpeg' },
        { phrase: 'un cardiologue', image: 'img3.jpg' },
        // Ajoutez d'autres paires phrase-image si nécessaire
      ];
    
      const [currentData, setCurrentData] = useState(data[0]);
    
      //changer image aleatoirement
      const changeData = () => {
        const randomIndex = Math.floor(Math.random() * data.length);
        setCurrentData(data[randomIndex]);
      };
    
      
      useEffect(() => {
        const intervalId = setInterval(changeData, 3000); // Changez la valeur en millisecondes selon la fréquence souhaitée (ici, toutes les 5 secondes)
    
        return () => clearInterval(intervalId); // Nettoie l'intervalle lors du démontage du composant
      }, [data]);


      //Navbar Patient
      const [loggedIn, setLoggedIn] = useState(false);
      const [userInfo, setUserInfo] = useState({});
      const navigate = useNavigate();

      useEffect(() => {
        // Récupérer les informations de l'utilisateur depuis le localStorage
        const storedUser = localStorage.getItem('keyuser');
        if (storedUser) {
          const user = JSON.parse(storedUser);
          setUserInfo(user);
          setLoggedIn(true);
        }
      }, []);
    
    
    // deconnexion du patient
      const logout = () => {
        Swal.fire({
          title: 'Are you sure to logout?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, logout!'
        }).then((result) => {
          if (result.isConfirmed) {
            SignOutService.signOut()
              .then((res) => {
                console.log('success', res);
              })
              .catch((err) => {
                console.log('Error', err);
              });
            localStorage.clear('keyuser');
            navigate('/');
          }
        });

        
        
    }
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#45a9f1' }}>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <a className="navbar-brand" href="/HomeP" style={{ color: 'white' }}>MediShpèreVie</a>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="/Conversations" style={{ color: 'white' }}>Mes Messages <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Document" style={{ color: 'white' }}>Mes documents</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Rendezvous" style={{ color: 'white' }}>Mes rendez-vous</a>
        </li>
      </ul>

      {loggedIn ? (
        <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" style={{ color: 'white' }} role="button" data-toggle="dropdown" aria-expanded="false">
            {`${userInfo.nom} ${userInfo.prenom}`}
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li>
              <a className="dropdown-item" href="/MonCompte">
                <FontAwesomeIcon icon={faUser} className="icon" /> Mon compte
              </a>
            </li>
            <li>
              <a className="dropdown-item" onClick={logout}>
                <FontAwesomeIcon icon={faSignOutAlt} className="icon" /> Déconnexion
              </a>
            </li>
          </ul>
        </li>
      </ul>
      ) : null}
    </div>
  </nav>
    <div className="page-container">
  
    
    {/* Featured Start */}
    <div className="home-container">
      <div className="phrase-container">
        <p>Trouvez un rendez-vous avec</p>
        <p>{currentData.phrase}</p>
        
      <div className="input-group">
      <FontAwesomeIcon icon={faSearch} id="search-icon" />
      <input
        type="search"
        className="form-control rounded"
        placeholder="Nom, spécialité, établissement,..."
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <input
        type="search"
        className="form-control rounded"
        placeholder="Où ?"
        aria-label="Location"
        aria-describedby="location-addon"
      />
      </div>

        <div className="button-container">
          <button type="button" className="btn btn-outline-primary" data-mdb-ripple-init>Rechercher</button>
        </div>

      </div>
      {/* Importer l'image du public */}
    <div className="image-container">
        <img src={process.env.PUBLIC_URL + `/img/${currentData.image}`} alt="Image" />
      </div>
    </div>
    {/* Featured End */}


    {/* Cards Start */}
    <Card/>
   

 

   
    <Footer />
    {/* Footer End */}
  </div>
    </div>
  )
}

export default HomePatient
