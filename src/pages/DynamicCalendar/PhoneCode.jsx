import React from "react";
import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { useContext } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import './otp.css';
import {Link } from "react-router-dom";
export default function () {
  const [timerCount, setTimer] = React.useState(60);
  const [OTPinput, setOTPinput] = useState([0, 0, 0, 0]);
  const [disable, setDisable] = useState(true);

  function resendOTP() {
    if (disable) return;
    axios
      .post("http://localhost:5000/send_sms", {
        // Envoyer un message SMS au numéro de téléphone enregistré avec le code OTP
      })
      .then(() => setDisable(true))
      .then(() => alert("Un nouveau code OTP a été envoyé par SMS."))
      .then(() => setTimer(60))
      .catch(console.log);
  }

  function verfiyOTP() {
    // Récupérer le code saisi par l'utilisateur
    const enteredCode = parseInt(OTPinput.join(""), 10);
    if (!isNaN(enteredCode)) {
      // Comparer le code saisi par l'utilisateur avec le code stocké ou envoyé via SMS
      // Implémentez votre logique de comparaison ici
    } else {
      console.error("L'OTP saisi n'est pas un nombre valide.");
      // Gérer l'erreur ici si nécessaire
    }
  }

  React.useEffect(() => {
    let interval = setInterval(() => {
      setTimer((lastTimerCount) => {
        lastTimerCount <= 1 && clearInterval(interval);
        if (lastTimerCount <= 1) setDisable(false);
        if (lastTimerCount <= 0) return lastTimerCount;
        return lastTimerCount - 1;
      });
    }, 1000); // chaque compte dure une seconde
    // nettoyer l'intervalle à la fin
    return () => clearInterval(interval);
  }, [disable]);

  return (
 <div>
 <Navbar></Navbar>
  <div className="verification-container" >

  <div className="verification-box" 
    style={{ backgroundImage: "url('/img/otp.jpg')",
     backgroundColor: "rgba(255, 255, 255, 0.1)",
     backgroundSize: "899px 899px", 
     backgroundRepeat: "no-repeat",
     
     }}>
    <div className="verification-form">
      <div className="verification-header">
        <h2 className="verification-title">Message de vérification</h2>
        <p className="verification-info">Nous avons envoyé un nouveau code OTP à votre numéro mobile <strong></strong></p>

      </div>

      <form className="verification-inputs">
        
      <div className="otp-inputs flex flex-row items-center">
      <div className="w-10">
        <input
          maxLength="2"
          className="block rounded-full w-full text-center px-2 py-1 outline-none border border-gray-200 text-base bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
          type="text"
          name=""
          id=""
          onChange={(e) =>
            setOTPinput([
              e.target.value,
              OTPinput[1],
              OTPinput[2],
              OTPinput[3],
            ])
          }
        />
      </div>
    
      <div className="w-10 ml-2"> {/* Ajoutez des classes pour l'espacement entre les blocs */}
      <input
      maxLength="1"
      className="block rounded-full w-full text-center px-2 py-1 outline-none border border-gray-200 text-base bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
      type="text"
      name=""
      id=""
      onChange={(e) =>
        setOTPinput([
          OTPinput[0],
          e.target.value,
          OTPinput[2],
          OTPinput[3],
        ])
      }
    ></input>
      </div>

      <div className="w-10 ml-2"> {/* Ajoutez des classes pour l'espacement entre les blocs */}
      <input
      maxLength="1"
      className="block rounded-full w-full text-center px-2 py-1 outline-none border border-gray-200 text-base bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
      type="text"
      name=""
      id=""
      onChange={(e) =>
        setOTPinput([
          OTPinput[0],
          OTPinput[1],
          e.target.value,
          OTPinput[3],
        ])
      }
    ></input>
      </div>

      <div className="w-10 ml-2"> {/* Ajoutez des classes pour l'espacement entre les blocs */}
      <input
      maxLength="1"
      className="block rounded-full w-full text-center px-2 py-1 outline-none border border-gray-200 text-base bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
      type="text"
      name=""
      id=""
      onChange={(e) =>
        setOTPinput([
          OTPinput[0],
          OTPinput[1],
          OTPinput[2],
          e.target.value,
        ])
      }
    ></input>
      </div>



    </div>


    <div className="verification-actions">
    <button className="verify-button" type="button" onClick={verfiyOTP}>
    Vérification de Compte
  </button>
  
  </div>
  

      <div className="resend-link-container ">
      <p>
      <a href="/verificationEmailotp" style={{ textDecoration: 'none' , color:'black',fontWeight:'bold'}}>
        Vous n'avez pas reçu le code ?{" "}
      </a>
    </p>
    

      <div style={{ position: "relative" }}>
      <a
        className={`flex flex-row items-center ${disable ? "disabled" : ""}`}
        onClick={() => resendOTP()}
      >
        {disable ? `RENVOYER OTP in ${timerCount}s` : "Resend OTP"}
      </a>
      </div>
      </div>
    
        
      </form>
    </div>
  </div>
</div>

<div className="text-center p-3" style={{ backgroundColor: '#e7f4fd' , color:"black"}}>
© 2024 Copyright :  
<a className="text-black" href="https://localhost:3000/" > MediSphèreVie</a>
</div>
</div>
  
  );
}
