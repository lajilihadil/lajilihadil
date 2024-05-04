import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Importez useNavigate depuis react-router-dom
import './searchbar.css';
import compteMedService from "../pages/Services/compteMedService";

const SearchBar = () => {
    const navigate = useNavigate(); // Initialisez useNavigate
    const [doctors, setDoctors] = useState([]);
    const [searchedDoctors, setSearchedDoctors] = useState([]);
    const [selectedGovernorate, setSelectedGovernorate] = useState("");
    const [availableGovernorates, setAvailableGovernorates] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const governorates = getAvailableGovernorates();
        setAvailableGovernorates(governorates);
    }, [doctors]);
    const [search,setSearch]=useState([]);
    const fetchData = async () => {
        try {
            const response = await compteMedService.getAll();
            setDoctors(response.data.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect((event) => {

        const filtered = doctors.filter(doctor =>
            doctor.nom.toLowerCase().includes(searchedDoctors) ||
            doctor.prenom.toLowerCase().includes(searchedDoctors) ||
            doctor.specialite.toLowerCase().includes(searchedDoctors)
        );
        setSearch(filtered);
        
        
    }, [searchedDoctors,doctors]);

    const handleLocationChange = (event) => {
        const value = event.target.value.toLowerCase();
        setSelectedGovernorate(value);
        const filtered = doctors.filter(doctor =>
            doctor.gouvernorat.toLowerCase().includes(value)
        );
        setSearch(filtered);
    };

    const getAvailableGovernorates = () => {
        const governorates = doctors.map(doctor => doctor.gouvernorat);
        return [...new Set(governorates)];
    };

    const handleSearch = () => {
        // Redirigez l'utilisateur vers une autre page lorsqu'il clique sur le bouton de recherche
        navigate('/ListMedecin'); // Remplacez '/autre-page' par le chemin de votre autre page
    };

    return (
        <section className="main-slider">
            <div className="search-holder text-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="search-box">
                            <div className="form-sec">
                                <h4>Rechercher votre médecin... !</h4>
                                <div className="row">
                                    <div className="col-md-4 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            onChange={(e)=>setSearchedDoctors(e.target.value)}
                                            value={searchedDoctors}
                                            list="doctorsList"
                                        />
                                        <datalist id="doctorsList">
                                            {search.map((doctor, index) => (
                                            <option key={index} value={`${doctor.nom}  ${doctor.prenom} : ${doctor.specialite}`} >
                                            </option>
                                          ))}
                                        </datalist>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Où ? Localisation"
                                            onChange={handleLocationChange}
                                            list="governoratesList"
                                            
                                        />
                                        <datalist id="governoratesList">
                                            {availableGovernorates.map((governorate, index) => (
                                                <option key={index} value={governorate} />
                                            ))}
                                        </datalist>
                                    </div>
                                    <div className="col-md-4 mb-3">
                                        <button
                                            type="button"
                                            className="btn btn-primary btn-block search-btn-wrapper"
                                            style={{ backgroundColor: '#107aca', color: 'white' }}
                                            onClick={handleSearch}

                                        >
                                            Rechercher <i className="fas fa-search ml-1"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="join-sec d-none d-md-flex justify-content-center align-items-start">
                                <div className="join" style={{ paddingTop: "15px" }}>
                                    <p style={{ whiteSpace: "nowrap" }}>Vous êtes un médecin ?</p>
                                    <div style={{ paddingTop: "-65px" }}>
                                        <a className="btn my-2 my-sm-0" href="/Acceuil" style={{ width: '70%' }}>Rejoignez nous</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SearchBar;
