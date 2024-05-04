import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import loginService from '../../pages/Services/loginService';
import Swal from 'sweetalert2';
import Navbar from '../../components/Navbar/Navbar';

const Login = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value ,
    });
    console.log(data);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault()
    loginService
     .create(data)
     .then((res)=>{
      console.log(res);
      console.log("Data submitted:", data);
      localStorage.setItem('keyuser',  JSON.stringify(res.data));
      navigate("/")
        // Afficher l'alerte SweetAlert pour une connexion réussie
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
        // Afficher l'alerte SweetAlert pour une erreur de connexion
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Login failed! Please check your credentials.',
        });
      });
  };

  return (
    <div>
      <Navbar />
      <div className="login-container1">
        <div className="section1">
          <div className="container">
            <div className="row full-height justify-content-center">
              <div className="col-12 text-center align-self-center py-5">
                <div className="section pb-5 pt-5 pt-sm-2 text-center">
                  <h6 className="mb-0 pb-3">
                    <span>Log In </span>
                    <span>Sign Up</span>
                  </h6>
                  <input className="checkbox" type="checkbox" id="reg-log" name="reg-log" />
                  <label htmlFor="reg-log" />
                  <div className="card-3d-wrap mx-auto">
                    <div className="card-3d-wrapper">
                      <div className="card-front">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-4 pb-3">
                              <center>J'ai déjà un compte MediShpèreVie</center>
                            </h4>
                            <form method="post"  onSubmit={onSubmitHandler}>
                              <div className="form-group">
                              <input type="email" name="email" onChange={onChangeHandler} className="form-control" placeholder="Adresse e-mail ou numéro de téléphone " id="email" />
                                <i className="input-icon uil uil-at" />
                              </div>
                              <div className="form-group mt-2">
                              <input type="password" name="password" onChange={onChangeHandler} className="form-control" placeholder="Mot de passe" id="password" />
                                <i className="input-icon uil uil-lock-alt" />
                              </div>
                              <button type="submit" className="btn mt-4">
                                Se Connecter
                              </button>
                            </form>
                            <p className="mb-0 mt-4 text-center">
                              <a href="#0" className="link">
                                MOT DE PASSE OUBLIE ?
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>

                      {/*sign up */}
                      <div className="card-back">
                        <div className="center-wrap">
                          <div className="section text-center">
                            <h4 className="mb-4 pb-3">Sign Up</h4>
                            <div className="form-group">
                              <input
                                type="text"
                                name="logname"
                                className="form-style"
                                placeholder="Your Full Name"
                                id="logname"
                                autoComplete="off"
                              />
                              <i className="input-icon uil uil-user" />
                            </div>
                            <div className="form-group mt-2">
                              <input
                                type="email"
                                name="logemail"
                                className="form-style"
                                placeholder="Your Email"
                                id="logemail"
                                autoComplete="off"
                              />
                              <i className="input-icon uil uil-at" />
                            </div>
                            <div className="form-group mt-2">
                              <input
                                type="password"
                                name="logpass"
                                className="form-style"
                                placeholder="Your Password"
                                id="logpass"
                                autoComplete="off"
                              />
                              
                             <i className="input-icon uil uil-lock-alt" />
                            </div>


                            <div className="form-group mt-2">
                            <input
                              type="password"
                              name="logpass"
                              className="form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autoComplete="off"
                            />
                            <i className="input-icon uil uil-lock-alt" />
                          </div>

                          <div className="form-group mt-2">
                          <input
                            type="password"
                            name="logpass"
                            className="form-style"
                            placeholder="Your Password"
                            id="logpass"
                            autoComplete="off"
                          />
                          
                         <i className="input-icon uil uil-lock-alt" />
                        </div>

                        <div className="form-group mt-2">
                        <input
                          type="password"
                          name="logpass"
                          className="form-style"
                          placeholder="Your Password"
                          id="logpass"
                          autoComplete="off"
                        />
                        
                       <i className="input-icon uil uil-lock-alt" />
                      </div>

                      <div className="form-group mt-2">
                      <input
                        type="password"
                        name="logpass"
                        className="form-style"
                        placeholder="Your Password"
                        id="logpass"
                        autoComplete="off"
                      />
                      
                     <i className="input-icon uil uil-lock-alt" />
                    </div>

                            <a href="#" className="btn mt-4">
                              submit
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login
