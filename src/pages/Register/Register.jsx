import React, { useState } from 'react';
import './register.css';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import loginService from '../../pages/Services/loginService';
import registreService from '../Services/registreService';
import Swal from 'sweetalert2';
import AccountP from '../AccountPatient/AccountP';

const Register = () => {
  const [estConnexion, setEstConnexion] = useState(false);

  const [email,setEmail] = useState("");
 /* const sendVerificationEmail = async (email) => {
    try {
      // Appelez votre API backend pour envoyer l'email de vérification
      const response = await fetch("/Register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
        }),
      });
  
      if (response.ok) {
        console.log("Email de vérification envoyé avec succès");
        // Gérez la réussite, affichez un message à l'utilisateur, etc.
      } else {
        console.error("Erreur lors de l'envoi de l'email de vérification");
        // Gérez l'échec, affichez un message d'erreur à l'utilisateur, etc.
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email de vérification:", error);
      // Gérez l'erreur, affichez un message d'erreur à l'utilisateur, etc.
    }
  };*/
  


  //pour le formulaire (input focus)
  const basculerFormulaire = () => {
    setEstConnexion(!estConnexion);
  };

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
  

  const [data, setData] = useState({});
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value ,
    });
    console.log(data);
  };

  //click sur le boutton (action)
  const onSubmitHandler = (e) => {
    e.preventDefault();
    
    loginService
      .create(data)
      .then((res) => {
        console.log(res);
  
        // Stockez le token dans le localStorage
        localStorage.setItem('accessToken', res.data.accessToken);
  
        // Stockez le nom et le prénom dans le localStorage
        const { nom, prenom } = res.data; // Assurez-vous que votre service renvoie ces informations
        const utilisateur = { nom, prenom };
        localStorage.setItem('utilisateur', JSON.stringify(utilisateur));
  
        navigate("/AccountP");
  
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
  

  //inscription d'un patient
  const onSubmitRegisterHandler = (e) => {
    e.preventDefault();
    // Utilisez le service d'inscription
    registreService
      .create(data)
      .then((res) => {
        console.log(res);
        localStorage.setItem('accessToken', res.data);
        console.log("Data submitted for registration:", data);
        //const { nom, prenom } = data;
      //const userData = { nom, prenom };

      localStorage.setItem('keyuser', JSON.stringify(data));
 // Stockez les données du token dans le localStorage
 
 //localStorage.setItem('refreshToken', res.data.refreshToken);

        navigate("")
        // Afficher l'alerte SweetAlert pour une connexion réussie
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Created successful!',
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
        // Afficher l'alerte SweetAlert pour une erreur d'inscription
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Registration failed! Please try again.',
        });
      });
  };

  return (
    <div>
    <Navbar/>
      <div className="container ">
    
        <section id="formHolder">
          <div className="row">
            {/* Boîte de la marque */}
            <div className="col-sm-6 brand ">
              <a href="#" className="logo">MSV <span>.</span></a>
              <div className="heading">
                <h2>Medi
                Shpère
                Vie</h2>
                <p>Simplifiez votre pratique, maximisez votre efficacité</p>
              </div>
              
            </div>
            {/* Boîte du formulaire */}
            <div className="col-sm-6 form">
            
              {/* Formulaire de connexion */}
              <div className={`login form-peice ${estConnexion ? 'switched' : ''}`}>              
              <div class="container-des-phrases">
                <h5>Vous avez déjà utilisé </h5>
                <h6>MediSphèreVie ?</h6>
              </div>

                <form className="login-form" action="#" method="post"  onSubmit={onSubmitHandler}>
                  <div className="form-group">
                    <label htmlFor="loginemail">Adresse e-mail</label>
                    <input type="email" name="email" id="email" required  className="form-control"
                      onChange={onChangeHandler}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                  </div>

                  <div class="form-group">
                    <label for="password" class="floating-label">Password</label>
                    <input type="password" id="password" name="password"   className="form-control"
                      onChange={onChangeHandler}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                  </div>

                  <div className="CTA">
                    <input type="submit" value="Connexion" />
                    <a href="#" className="switch" onClick={basculerFormulaire}>
                      {estConnexion ? 'J\'ai déjà un compte MediSphèreVie':'Je suis nouveau sur MediSphèreVie'}
                    </a> 
                  </div>
                </form>
              </div>{/* Fin du formulaire de connexion */}


              {/* Formulaire d'inscription */}
              <div className={`signup form-peice ${estConnexion ? '' : 'switched'}`}>
                <form className="signup-form" action="#" method="post" onSubmit={onSubmitRegisterHandler}>
                <div className="form-group">
                    <label htmlFor="loginNom">NOM</label>
                    <input type="text" name="nom" id="nom" required   className="form-control"
                    onChange={onChangeHandler}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="loginPrenom">PRENOM</label>
                    <input type="text" name="prenom" id="prenom" required   className="form-control"
                    onChange={onChangeHandler}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="loginTelephone">TELEPHONE</label>
                    <input type="text" name="telephone" id="telephone" required   className="form-control"
                    onChange={onChangeHandler}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}/>
                </div>
                <div className="form-group">
                    <label htmlFor="loginEmail">E-MAIL</label>
                    <input type="email" name="email" id="email" required   className="form-control"
                    onChange={onChangeHandler}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}/>
                </div>

                <div className="form-group">
                <label htmlFor="VerifEmail">VERIF E-MAIL</label>
                <input
                  type="email"
                  name="verifemail"
                  id="verifemail"
                  required
                  className="form-control"
                  onChange={(e) => {
                    onChangeHandler(e); // Appel de la fonction générique de gestion des changements
                    //sendVerificationEmail(e.target.value); // Appel de la fonction pour envoyer l'email de vérification
                  }}
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
              </div> 
              

              <div class="form-group">
                    <label for="date_naissance" class="floating-label">DATE NAISSANCE</label>
                    <input type="date" id="date_naissance" name="date_naissance"   className="form-control"
                    onChange={onChangeHandler}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
              </div>

              <div class="form-group">
                    <label for="password" class="floating-label">Password</label>
                    <input type="password" id="password" name="password"   className="form-control"
                    onChange={onChangeHandler}
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                  />
              </div>

                  <div className="CTA">
                    <input type="submit" value="S'INSCRIRE" id="submit" />
                    <a href="#" className="switch" onClick={basculerFormulaire}>
                      {estConnexion ? 'J\'ai déjà un compte MediSphèreVie ' : 'Je suis nouveau sur MediSohèreVie'}
                    </a>
                  </div>
                </form>
              </div>{/* Fin du formulaire d'inscription */}
            </div>
          </div>
        </section>
    
        <footer>
        
        </footer>
       
      </div>
   
    </div>
  );
};

export default Register;
