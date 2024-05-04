import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Card from '../../pages/Carts/Card';
import React, { useState, useEffect } from 'react';
import './home.css'; // Assurez-vous d'avoir un fichier de style CSS associé
import Service from '../Service1/Service';
import SearchBar from '../../components/SearchBar';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import LeafletGeocoder from './LeafletGeocoder';
import LeafletRoutingMachine from './LeafletRoutingMachine';
import Doc from '../Medecin/Meetdoc/Doc';

const Home = () => {
  const data = [
    { phrase: 'un dentiste', image: 'img0.png' },
    { phrase:'une géneraliste' , image: 'img1.png'},
    { phrase: 'un pédiatre', image: 'img2.png' },
    { phrase: 'un osthéopathe', image: 'img3.png' },
    { phrase: 'un cardiologue', image: 'img4.png' },
    // Ajoutez d'autres paires phrase-image si nécessaire
  ];

  const [currentData, setCurrentData] = useState(data[0]);
  const position = [51.505, -0.09]; // Latitude et longitude de la position initiale de la carte
  const changeData = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setCurrentData(data[randomIndex]);
  };

  useEffect(() => {
    const intervalId = setInterval(changeData, 3000); // Changez la valeur en millisecondes selon la fréquence souhaitée (ici, toutes les 5 secondes)

    return () => clearInterval(intervalId); // Nettoie l'intervalle lors du démontage du composant
  }, [data]);

  return (
    <div className="page-container">
      <Navbar />
      <div className="home-container" style={{ backgroundColor: "#107aca" }}>
        <div className="phrase-container">
          <p style={{ color: "white" }}>Trouvez un rendez-vous avec</p>
          <p className='p1'>{currentData.phrase}</p>
        </div>
        <div className="image-container">
          <img className="featured-image" style={{height:'400px',width:'550px'}} src={process.env.PUBLIC_URL + `/img/${currentData.image}`} alt="Image" />
        </div>
      </div>
        <SearchBar />
        <Doc />
        <Card/>
        <Service />
      <Footer />
    </div>
  );
};

export default Home;
