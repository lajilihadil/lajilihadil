import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Swal from 'sweetalert2';
// Importez les composants nécessaires de Leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import LeafletGeocoder from '../Home/LeafletGeocoder';
import LeafletRoutingMachine from '../Home/LeafletRoutingMachine';
import {
  faTimes,
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
import './accountM.css';
import profilMedecinService from '../Services/profilMedecinService';
const AccountM = () => {
  const [data, setData] = useState({});
  const [activeStep, setActiveStep] = useState(1);
  const navigate = useNavigate();
  const position = [51.505, -0.09]; // Latitude et longitude de la position initiale de la carte
  const handleInputFocus = (event) => {
    const label = event.target.previousSibling;
    label.classList.add('active');
  };
  const handleInputBlur = (event) => {
    const input = event.target;
    const label = input.previousSibling;
    if (label && !input.value) {
      label.classList.remove('active');
    }
  };
  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value ,
    });
    console.log(data);
  };
  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };
  const handlePrev = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    profilMedecinService
      .create(data)
      .then((res) => {
        console.log(res);
        // Stockez le token dans le localStorage
        localStorage.setItem('accessToken', res.data.accessToken);
        // Stockez le nom et le prénom dans le localStorage
        const { nom, prenom } = res.data; // Assurez-vous que votre service renvoie ces informations
        const utilisateur = { nom, prenom };
        localStorage.setItem('utilisateur', JSON.stringify(utilisateur));
        //navigate("/AccountP");
        // Affichez une alerte SweetAlert pour une connexion réussie
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Login successful!',
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
        // Affichez une alerte SweetAlert pour une erreur de connexion
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Login failed! Please check your credentials.',
        });
      });
  };
  const handleSpecialiteClick = (value) => {
    if (value) {
      setSpecialite(value);
      setData({
        ...data,
        specialite: value,
      });
    }
  };
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
  const [specialite, setSpecialite] = useState('');
  const [afficherHoraireSeance, setAfficherHoraireSeance] = useState(false);
  // Fonction pour gérer le changement d'option sélectionnée
  const toggleHoraireSeance = (e) => {
    // Vérifier si l'option "Fermé" est sélectionnée
    if (e.target.value === "3") {
      // Masquer le champ pour entrer l'heure de la séance unique
      setAfficherHoraireSeance(false);
    } else {
      // Afficher le champ pour entrer l'heure de la séance unique
      setAfficherHoraireSeance(true);
    }
  };
  useEffect(() => {
    // Mettre à jour l'état de la spécialité lorsque le composant est monté
    setSpecialite('Médecin-généraliste');
  }, []);
  const [inputs, setInputs] = useState([
    { id: 1, soin: '', tarif: '' }  ]);
  const [nextId, setNextId] = useState(3);
  const handleAddInput = () => {
    setInputs([...inputs, { id: nextId, soin: '', tarif: '' }]);
    setNextId(nextId + 1);
  };
  const handleRemoveInput = (id) => {
    if (id > 2) {
      setInputs(inputs.filter((input) => input.id !== id));
    }
  };
  const handleInputChange = (id, event) => {
    const { name, value } = event.target;
    const newInputs = inputs.map((input) =>
      input.id === id ? { ...input, [name]: value } : input
    );
    setInputs(newInputs);
  };
  const [jours, setJours] = useState([
    { id: 1, nom: "Lundi", seanceUniqueSelected: false, doubleSeanceSelected: false },
    { id: 2, nom: "Mardi", seanceUniqueSelected: false, doubleSeanceSelected: false },
    { id: 3, nom: "Mercredi", seanceUniqueSelected: false, doubleSeanceSelected: false },
    { id: 4, nom: "Jeudi", seanceUniqueSelected: false, doubleSeanceSelected: false },
    { id: 5, nom: "Vendredi", seanceUniqueSelected: false, doubleSeanceSelected: false },
    { id: 6, nom: "Samedi", seanceUniqueSelected: false, doubleSeanceSelected: false },
    { id: 7, nom: "Dimance", seanceUniqueSelected: false, doubleSeanceSelected: false },
    // Ajoutez les autres jours de la semaine ici avec leurs propriétés initiales
  ]);
  const handleOptionChange = (e, jourId, option) => {
    const updatedJours = jours.map(jour => {
      if (jour.id === jourId) {
        if (option === 'seanceUnique') {
          console.log(`${jour.nom} : Séance Unique`);
          return {
            ...jour,
            seanceUniqueSelected: true,
            doubleSeanceSelected: false,
          };
        } else if (option === 'doubleSeance') {
          console.log(`${jour.nom} : Double Séance`);
          return {
            ...jour,
            seanceUniqueSelected: false,
            doubleSeanceSelected: true,
          };
        } else {
          console.log(`${jour.nom} : Fermé`);
          // Si l'option est 'ferme', les deux autres options doivent être désélectionnées
          return {
            ...jour,
            seanceUniqueSelected: false,
            doubleSeanceSelected: false,
          };
        }
      } else {
        // Pour les autres jours, conserver les sélections actuelles
        return jour;
      }
    });
    setJours(updatedJours);
  };

  return (
    <div style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/img/imag1.png)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',  // Ajustez selon vos besoins
    }}>
      {/* Navbar*/}
      <nav className="navbar navbar-expand-lg navbar-light " style={{ backgroundColor: '#001f3f' , width:'100vw' }}>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="/" style={{ color: 'white' }}>MediShpèreVie</a>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
           
            <li className="nav-item">
              <a className="nav-link" href="/Med" style={{ color: 'white' }}>Acceuil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Login" style={{ color: 'white' }}>Se Connecter</a>
            </li>

            <li className="nav-item dropdown" onMouseEnter={handleDropdownToggle} onMouseLeave={handleDropdownLeave}>
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" style={{ color: 'white' }} role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Vous êtes
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown" id="navbarDropdownMenu">
              <p className="dropdown-subtitle" style={{ padding: '10px' }}>Pour les médecins</p>
              <a className="dropdown-item" href="#" onClick={() => handleSpecialiteClick('Médecin généraliste')}>
              <FontAwesomeIcon icon={faStethoscope} className="mr-2" />
              Médecin généraliste
            </a>
            
            
                <a className="dropdown-item" href="#">
                  <FontAwesomeIcon icon={faTooth} className="mr-2" />
                  Chirurgien-dentiste
                </a>
                <a className="dropdown-item" href="#">
                  <FontAwesomeIcon icon={faHandshake} className="mr-2" />
                  Masseur-kinésithérapeute
                </a>
                <a className="dropdown-item" href="#">
                  <FontAwesomeIcon icon={faBrain} className="mr-2" />
                  Psychologue
                </a>
                <a className="dropdown-item" href="#">
                  <FontAwesomeIcon icon={faBabyCarriage} className="mr-2" />
                  Pédicure-Podologue
                </a>
                <a className="dropdown-item" href="#">
                  <FontAwesomeIcon icon={faUserNurse} className="mr-2" />
                  Sage Femme
                </a>
                <a className="dropdown-item" href="#">
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
     
    <div id="page" className="site">
      <div className="container">
        <div className="form-box">
          <div className="progress1">
          <div className="logo">
              <a href="/">
                <span>MSV.</span>
              </a>
            </div>
            <ul className="progress-steps">
                {[1, 2, 3, 4, 5, 6].map((step) => (
                  <li key={step} className={`step ${activeStep === step ? 'active' : ''}`} >
                    <span>{step}</span>
                    <p>
                      {step === 1 ? 'Compte'
                     : step === 2 ? 'Cabinet' 
                     : step === 3 ? 'Spécialité' 
                     : step === 4 ? 'Actes' 
                     : step === 5 ? 'Pratiques' 
                     : 'Photos'}
                     </p>
                  </li>
                ))}
              </ul>
          </div>
          <form action="" method="post"  onSubmit={onSubmitHandler} >
          {activeStep === 1 && (
            <div className="form-one form-step ">
            <div className="bg-svg"></div>
            <h2>Information personnelles</h2>
            <div className="form-group">
            <label style={{ marginLeft: '10px' }}>Titre</label>
              <select name="titre" className="form-control"
              onChange={onChangeHandler}
              >
                <option value="">Titre</option>
                <option value="DR">Docteur</option>
                <option value="PR">Professeur</option>
                <option value="MM">Madame</option>
                <option value="MR">Monsieur</option>
              </select>
              <label>Genre</label>
              <select name="genre" className="form-control"
              onChange={onChangeHandler}>
                <option value="">Genre</option>
                <option value="F">Femme</option>
                <option value="H">Homme</option>
              </select>
              <label>Nom</label>
              <input type="text" name="nom" className="form-control" onChange={onChangeHandler}/>
              <label>Prénom</label>
              <input type="text" name="prenom" className="form-control" onChange={onChangeHandler} />
              <label>Date de naissance</label>
              <input type="date" id="date_naissance" name="date_naissance" className="form-control"
                onChange={onChangeHandler}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>
          </div>
          )}
          {activeStep === 2 && (
            <div className="form-two form-step">
            <div className="bg-svg"></div>
            <h2>Coordonnées cabinet</h2>
            <div className="form-group">
              <label>Adresse</label>
              <input type="text" name="adresse" placeholder="Rue, étage ..." className="form-control"
              onChange={onChangeHandler} />
            </div>
            <div className="form-group">
              <label>Gouvernorat</label>
              <select name="gouvernorat" className="form-control"  onChange={onChangeHandler}>
                <option value="">Gouvernerat</option>
                <option value="Ariana">Ariana</option>
                <option value="Béja">Béja</option>
                <option value="Ben Arous">Ben Arous</option>
                <option value="Bizerte">Bizerte</option>
                <option value="Gabès">Gabès</option>
                <option value="Gafsa">Gafsa</option>
                <option value="Jendouba">Jendouba</option>
                <option value="Kairouan">Kairouan</option>
                <option value="Kasserine">Kasserine</option>
                <option value="Kébili">Kébili</option>
                <option value="Kef">Kef</option>
                <option value="Mahdia">Mahdia</option>
                <option value="Manouba">Manouba</option>
                <option value="Médenine">Médenine</option>
                <option value="Monastir">Monastir</option>
                <option value="Nabeul">Nabeul</option>
                <option value="Sfax">Sfax</option>
                <option value="Sidi Bouzid">Sidi Bouzid</option>
                <option value="Siliana">Siliana</option>
                <option value="Sousse">Sousse</option>
                <option value="Tataouine">Tataouine</option>
                <option value="Tozeur">Tozeur</option>
                <option value="Tunis">Tunis</option>
                <option value="Zaghouan">Zaghouan</option>
              </select>            </div>
            <div className="form-group">
              <label>Téléphone fixe</label>
              <input type="text" name="telephone_fixe" placeholder="telephone_fixe" className="form-control" onChange={onChangeHandler}/>
            </div>
            <div className="form-group">
              <label>Téléphone portable</label>
              <input type="text" name="telephone_portable" placeholder="telephone_portable" className="form-control" onChange={onChangeHandler}/>
            </div>
            <div className="page-leaflet">
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <LeafletGeocoder/>
            </MapContainer>
            </div>
          </div>
              )}
              {activeStep === 3 && (
              <div className="form-three form-step">
              <div className="bg-svg"></div>
              <h2>Spécialité</h2>
              <div className="form-group">
                <label>Spécialité principale</label>
                <select name="specialite_principale" id="specialite" className="form-control"   onChange={onChangeHandler}>
                    <option value="Médecin généraliste">Médecin généraliste</option>
                    <option value="Chirurgien-dentiste">Chirurgien-dentiste</option>
                    <option value="Masseur-kinésithérapeute">Masseur-kinésithérapeute</option>
                    <option value="Psychologue">Psychologue</option>
                    <option value="Pédicure-Podologue">Pédicure-Podologue</option>
                    <option value="Sage Femme">Sage Femme</option>
                    <option value="Opticien / Audioprothésiste">Opticien / Audioprothésiste</option>
                    <option value="Pharmacien">Pharmacien</option>
                    <option value="Infirmier">Infirmier</option >
                    <option value="Anesthésiologie">Anesthésiologie</option>
                    <option value="Cardiologie">Cardiologie</option>
                    <option value="Chirurgie générale">Chirurgie générale</option>
                    <option value="Chirurgie orthopédique">Chirurgie orthopédique</option>
                    <option value="Dermatologie">Dermatologie</option>
                    <option value="Endocrinologie">Endocrinologie</option>
                    <option value="Gastro-entérologie">Gastro-entérologie</option>
                    <option value="Gynécologie-obstétrique">Gynécologie-obstétrique</option>
                    <option value="Hématologie">Hématologie</option>
                    <option value="Médecine interne">Médecine interne</option>
                    <option value="Néphrologie">Néphrologie</option>
                    <option value="Neurologie">Neurologie</option>
                    <option value="Oncologie">Oncologie</option>
                    <option value="Ophtalmologie">Ophtalmologie</option>
                    <option value="Oto-rhino-laryngologie (ORL)">Oto-rhino-laryngologie (ORL)</option>
                    <option value="Pédiatrie">Pédiatrie</option>
                    <option value="Pneumologie">Pneumologie</option>
                    <option value="Psychiatrie">Psychiatrie</option>
                    <option value="Radiologie">Radiologie</option>
                    <option value="Rhumatologie">Rhumatologie</option>
                    <option value="Urologie">Urologie</option>
                </select>
              </div>
              <div className="form-group">
                <label>Autre spécialité</label>
                <input type="text" name="autre_specialite" placeholder="Autre spécialité" className="form-control"    onChange={onChangeHandler} />
              </div>
              <div className="form-group">
                <label>Diplômes et/ou formations</label>
                <textarea id="field_diploma" name="diplome_formation" class="textarea mini" placeholder='Citez vos formations et/ou DIPLÔMES' className="form-control"
                onChange={onChangeHandler}></textarea>
              </div>
            </div>
              )}
              {activeStep === 4 && (
                <div className="form-four form-step">
                <div className="bg-svg"></div>
                <h2>Actes et soins</h2>
                {inputs.map((input, index) => (
                  <div key={index} className="form-group">
                    <div className="input-group">
                      <div className="input-item">
                        <label>Actes et soins</label>
                        <input
                          type="text"
                          name="actes_soins"
                          placeholder="Actes et soins"
                          className="form-control"
                          //value={input.soin}
                          onChange={onChangeHandler}
                         // onChange={(event) => handleInputChange(input.id, event)}
                        />
                      </div>
                      <div className="input-item">
                        <label>Tarifs</label>
                        <input
                          type="text"
                          name="tarif"
                          placeholder="Tarifs"
                          className="form-control"
                          //value={input.tarif}
                          onChange={onChangeHandler}
                          //onChange={(event) => handleInputChange(input.id, event)}
                        />
                      </div>
                      {input.id > 2 && (
                        <div className="remove-icon" onClick={() => handleRemoveInput(input.id)}>
                          <FontAwesomeIcon icon={faTimes} />
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <button type="button" className="btn-add" onClick={handleAddInput}>
                  Ajouter
                </button>
              </div>
              )}
              {activeStep === 5 && (
              <div className="form-five form-step">
              <div className="bg-svg"></div>
              <h2>Informations pratiques</h2>
              <div className="form-group">
                <label>Langues parlées</label>
                <select name="langue" id="langue" className="form-control" onChange={onChangeHandler}>
                  <option value="fr">Français</option>
                  <option value="en">Anglais</option>
                  <option value="es">Espagnol</option>
                  <option value="de">Allemand</option>
                  <option value="zh">Chinois (Mandarin)</option>
                  <option value="ar">Arabe</option>
                  <option value="ru">Russe</option>
                  <option value="hi">Hindi</option>
                  <option value="pt">Portugais</option>
                  <option value="ja">Japonais</option>
                </select>
              </div>
              <div className="form-group1">
              <label>Convention avec la CNAM</label>
              <input name="isConventionneCNAM" type="checkbox" id="field_cnam" value="1" className="form-control" onChange={onChangeHandler} />
              <label className='label1' htmlFor="field_cnam" data-on="OUI" data-off="NON"></label>
          </div>
              <div className="form-group">
                <label>Mode de paiement</label>
                <select name="modes_paiement" className="form-control" onChange={onChangeHandler}>
                    <option value="especes">Espèces</option>
                    <option value="carte_bancaire">Carte bancaire</option>
                    <option value="cheque">Chèque</option>
                    <option value="virement">Virement bancaire</option>
                  </select>
              </div>
              <div className="form-group">
                <label>Horaire de travail</label>
                <table>
                  <tbody>
                  {jours.map((jour, index) => (
                    <tr key={index}>
                      <td>{jour.nom}</td>
                      <td>
                        <div className="daytype">
                          <div className={`btn-radio radio-primary ${jour.seanceUniqueSelected ? "selected" : ""}`}>
                            <input
                              type="radio"
                              data-id={jour.id}
                              name="typeSeance"
                              //name={`typeSeance_${jour.id}`}
                              id={`uni_day_${jour.id}`}
                              value="SeanceUnique 1"
                              onChange={(e) => {
                                handleOptionChange(e, jour.id, 'seanceUnique');
                                onChangeHandler(e); // Appel de onChangeHandler ici
                              }}
                            />
                            <label htmlFor={`uni_day_${jour.id}`}>Séance Unique</label>
                          </div>
                          <div className={`btn-radio radio-primary ${jour.doubleSeanceSelected ? "selected" : ""}`}>
                            <input
                              type="radio"
                              data-id={jour.id}
                              name="typeSeance"
                             // name={`typeSeance_${jour.id}`}
                              id={`dbl_day_${jour.id}`}
                              value="DoubleSeance 2"
                              onChange={(e) => {
                                handleOptionChange(e, jour.id, 'doubleSeance');
                                onChangeHandler(e); // Appel de onChangeHandler ici
                              }}
                            />
                            <label htmlFor={`dbl_day_${jour.id}`}>Double Séance</label>
                          </div>
                          <div className={`btn-radio radio-primary ${!jour.seanceUniqueSelected && !jour.doubleSeanceSelected ? "selected" : ""}`}>
                            <input
                              type="radio"
                              data-id={jour.id}
                              name="typeSeance"
                             // name={`typeSeance_${jour.id}`}
                              id={`non_day_${jour.id}`}
                              value="Ferme 3"
                              onChange={(e) => {
                                handleOptionChange(e, jour.id, 'ferme');
                                onChangeHandler(e); // Appel de onChangeHandler ici
                              }}
                            />
                            <label htmlFor={`non_day_${jour.id}`}>Fermé</label>
                          </div>
                        </div>
                        {jour.seanceUniqueSelected && (
                          <div>
                            <label htmlFor={`heureSeance_${jour.id}`}>Entrez l'heure de la séance unique :</label>
                            <input  type="text" id={`heureSeance_${jour.id}`} name={`heureMatin_${jour.id}`} onChange={onChangeHandler}  />
                          </div>
                        )}
                        {jour.doubleSeanceSelected && (
                          <div>
                            <label htmlFor={`heureMatin_${jour.id}`}>Entrez l'heure de la séance du matin :</label>
                            <input type="text" id={`heureMatin_${jour.id}`} name="heureMatin" /*name={`heureMatin_${jour.id}`} */ onChange={onChangeHandler}/>
                            <label htmlFor={`heureSoir_${jour.id}`}>Entrez l'heure de la séance du soir :</label>
                            <input  type="text" id={`heureSoir_${jour.id}`}  name="heureSoir" /*name={`heureSoir_${jour.id}`}*/ onChange={onChangeHandler} />
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                  </tbody>
                </table>
              </div>
                  </div>
              )}
              {activeStep === 6 && (
              <div className="form-six form-step">
              <div className="bg-svg"></div>
              <h2>Photos</h2>
              <div className="form-group">
                <label>Photo d'identité</label>
                <input name="identite" type="file" id="photo" accept="image/*" className="form-control"/>
              </div>
             <p> Ps : Pour des raisons de sécurité et afin de nous assurer de la pertinence des données sur notre plateforme, nous vous prions de nous envoyer une photo de votre carte de visite tamponnée ou bien votre permis d'exercice. </p>
            </div>
              )}
          
            </form>
          </div>
        </div>
         {/* Boutons de navigation */}
         <div className="btn-container">
  <div className="btn-group">
    {activeStep > 1 && (
      <button type="button" className="btn-prev" onClick={handlePrev}>
        Retour
      </button>
    )}
    {activeStep < 6 && (
      <button type="button" className="btn-next" onClick={handleNext}>
        Suivant
      </button>
    )}
    {activeStep === 6 && (
      <button type="button" className="btn-submit" onClick={onSubmitHandler}>
        Envoyer
      </button>
    )}
  </div>
</div>
      </div>
    <Footer />
    </div>
  );
};
let DefaultIcon = L.icon({
  iconUrl:"http://unpkg.com/leaflet@1/dist/images/marker-icon.png",
  iconSize:[24, 41],
  iconAnchor :[10, 41],
  popupAnchor:[2, -40],
});
L.Marker.prototype.options.icon =DefaultIcon;
export default AccountM;
