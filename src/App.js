import React from 'react';
import './App.css';
import { Navigate, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/home';
import Login from './pages/login/Login';
import Register from './pages/Register/Register';
import Medecin from './pages/Medecin/Medecin';
import Conversations from './pages/AccountPatient/Conversations/Conversations';
import Rendezvous from './pages/AccountPatient/Rendezvous/Rendezvous';
import Document from './pages/AccountPatient/Document/Document';
import HomeP from './pages/AccountPatient/Home/HomePatient';
import AccountP from './pages/AccountPatient/AccountP';
import Sante from './pages/ContenuCartes/Sante';
import Detailsmed from './pages/ContenuCartes/Detailsmed';
import Messagerie from './pages/ContenuCartes/Messagerie';
import Chirugien from './pages/Medecin/chirugien';
import Masseurkinésithérapeute from './pages/Medecin/masseur-kinésithérapeute';
import Psychologue from './pages/Medecin/Psychologue';
import PedicurePodologue from './pages/Medecin/Pédicure-Podologue';
import Sagefemme from './pages/Medecin/Sagefemme';
import Opticiens from './pages/Medecin/Opticiens';
import Pharmacien from './pages/Medecin/Pharmacien';
import Infirmier from './pages/Medecin/Infirmier';
import Acceuil from './pages/Medecin/acceuil';
import Service from './pages/Service1/Service';
import Infomed from './pages/Infomed/Infomed';
import CalendrierP from './pages/DynamicCalendar/CalendrierP';
import Magazine from "./pages/Magazine/Magazines/magazine";
import Stress from './pages/Magazine/Stress/stress';
import ListMedecin from './pages/Medecin/ListMedecin/listMedecin';
import PhoneCode from './pages/DynamicCalendar/PhoneCode';
function App() {
  /*const PrivateRoute = ({ children }) => {
    const userLoggedIn = localStorage.getItem('keyuser');
    if (userLoggedIn) {
      return children;
    } else {
      return <Navigate to="/login" />;
    }
  };  */

  return (
    
    <BrowserRouter> {/* Utilisez BrowserRouter ici au lieu de Router */}
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Service" element={<Service />} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/Medecin" element={<Medecin/>} />
          <Route path="/AccountP" element={<AccountP/>} />
          <Route path="/Conversations" element={<Conversations/>} />
          <Route path="/Rendezvous" element={<Rendezvous/>} />
          <Route path="/Document" element={<Document/>} />
          <Route path="/Sante" element={<Sante/>} />
          <Route path="/Detailsmed" element={<Detailsmed/>} />
          <Route path="/Messagerie" element={<Messagerie/>}/>
          <Route path="/Chirugien" element={<Chirugien/>} />
          <Route path="/Masseurkinésithérapeute" element={<Masseurkinésithérapeute/>} />
          <Route path="/Psychologue" element={<Psychologue/>} />
          <Route path="/PedicurePodologue" element={<PedicurePodologue/>} />
          <Route path="/Sagefemme" element={<Sagefemme/>} />
          <Route path="/Opticiens" element={<Opticiens/>} /> 
          <Route path="/Pharmacien" element={<Pharmacien/>} />      
          <Route path="/Infirmier" element={<Infirmier/>} />     
          <Route path="/Acceuil" element={<Acceuil/>} />     
          <Route path="/Magazine" element={<Magazine/>} /> 
          <Route path="/Login" element={<Login/>} /> 
          <Route path="/Service1" element={<Service />} />
          <Route path="/Infomed/:id" element={<Infomed/>} />  
          <Route path="/DynamicCalendar" element={<CalendrierP/>}/> 
          <Route path="/Stress" element={<Stress/>}/> 
          <Route path="/ListMedecin" element={<ListMedecin />} />
          <Route path="/PhoneCode" element={<PhoneCode />} />
          <></>
      

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
